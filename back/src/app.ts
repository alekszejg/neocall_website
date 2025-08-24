import express, { Request, Response, NextFunction  } from "express";
import { oAuth2Client } from './auth';

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

app.post("/api/submit-form", (req: Request, res: Response) => {
  const { name, email, website, company } = req.body;
  console.log("Form submitted:", { name, email, website, company });

  res.json({ success: true, message: "Form received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});