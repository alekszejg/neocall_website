import express, { Request, Response, NextFunction  } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({ error: "Invalid payload. Expected JSON" });
  }
  next();
});

// Example route
app.post("/submit-form", (req: Request, res: Response) => {
  const { name, email, website, company } = req.body;
  console.log("Form submitted:", { name, email, website, company });

  res.json({ success: true, message: "Form received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});