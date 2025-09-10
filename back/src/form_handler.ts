import { Request, Response } from "express";
import dns from 'dns/promises';
import { writeToSheet } from "./utils";

interface isEmailDomainValidRes {
   valid: boolean, 
   internalErr: string 
}

async function checkEmailDomain(email: string): Promise<isEmailDomainValidRes> {
    const res = { valid: false, internalErr: "" }
    
    const domain = email.split('@')[1]; 
    if (!domain) {
        return { ...res, internalErr: "Email address had no domain part" };
    }

    try {
        const mxRecords = await dns.resolveMx(domain);
        const isValid = mxRecords && mxRecords.length > 0
        return { ...res, valid: isValid };
    } catch (err: unknown) {
        const e = err as NodeJS.ErrnoException & { hostname?: string }; // keep hostname for logs
        if (e.code === "ENOTFOUND") {
            return res;
        } else {
            return { ...res, internalErr: `Unexpected error in checkEmailDomain(). Code: ${e.code}. Hostname: ${e.hostname}` }
        }
    }
}

export default async function formHandler(req: Request, res: Response) {
    // fake success response for bots
    const fakeBotResponse = () => res.status(200).json({ success: true, message: "Form successfully submitted!" });
    
    if (!req.body || typeof req.body !== "object") {
        return fakeBotResponse();
    }
    
    const { name, email, comment, company } = req.body;
    if (
        typeof name !== "string" || typeof email !== "string" ||
        typeof comment !== "string" || typeof company !== "string"
    ) {
        return fakeBotResponse();
    }

    if (name === "" || name.length > 50) {
        return fakeBotResponse();
    } else if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) {
        return fakeBotResponse();
    } else if (comment.length > 500) {
        return fakeBotResponse();
    } else if (company !== "") {
        return fakeBotResponse();
    }

    try {
        const response = await checkEmailDomain(email);
        if (!response.valid && !response.internalErr) {
            return res.status(400).json({ success: false, error: "EMAIL_DOMAIN_NOT_FOUND", message: "Email domain not found" });
        } else if (response.internalErr) {
            console.error(response.internalErr);
            return res.status(500).json({ success: false, error: "INTERNAL", message: "Internal server error. Please try again." });
        }
    } catch (err: unknown) {
        console.error(err)
        return res.status(500).json({ success: false, error: "INTERNAL", message: "Internal server error. Please try again." });
    }

    try {
        await writeToSheet(name, email, comment);
        return res.status(200).json({ success: true, message: "Form successfully submitted!" });
    } catch (err) {
        console.error("Google Sheets error:", err);
        return res.status(500).json({ success: false, message: "Internal server error. Please try again." });
    }
}