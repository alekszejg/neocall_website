import express, { Request, Response, NextFunction  } from "express";
import { oAuth2Client } from './auth';
import { writeToSheet } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON body
app.use(express.json());
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({ error: "Invalid payload. Expected JSON" });
  }
  next();
});


app.get('/oauth/callback', async (req, res) => {
  const code = req.query.code as string;
  if (!code) return res.status(400).send('No code returned');

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log('Tokens:', tokens); 
    res.send('Authorization successful! Check your terminal for tokens.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving tokens');
  }
});

app.post("/api/submit-form", async (req: Request, res: Response) => {
  const { name, email, comment, company } = req.body;
  
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof comment !== "string" ||
    (company !== undefined && typeof company !== "string")
  ) {
    return res.status(400).json({ success: false, message: "Invalid field types" });
  }

  // this one is for bots
  if (company !== "" && company.trim() !== "") {
    return res.status(200).json({ success: true, message: "Form successfully submitted!" });
  }

  if (name.length > 50) {
    return res.status(400).json({ success: false, message: "Name cannot exceed 50 characters" });
  } else if (email.length > 100) {
    return res.status(400).json({ success: false, message: "Email cannot exceed 100 characters" });
  } else if (comment.length > 500) {
    return res.status(400).json({ success: false, message: "Comment cannot exceed 500 characters" });
  }

  try {
    await writeToSheet(name, email, comment);
    return res.status(200).json({ success: true, message: "Form successfully submitted!" });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return res.status(500).json({ success: false, message: "Internal error. Please try again." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});