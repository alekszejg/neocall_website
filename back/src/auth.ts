import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

//const TOKEN_PATH = path.resolve(__dirname, 'token.json');
const TOKEN_PATH = '/app/src/token.json';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface TokenData {
    access_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    expiry_date: number;
}

interface GoogleApiErr extends Error {
    code?: number | string;
    message: string;
}

export function isGoogleApiErr(err: unknown): err is GoogleApiErr {
    return (
        typeof err === 'object' && err !== null && ('message' in err || 'code' in err)
    );
}

const { GOOGLE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_REDIRECT_URI } = process.env;
if (!GOOGLE_CLIENT_ID || !GOOGLE_SECRET || !GOOGLE_REDIRECT_URI) {
    throw new Error('Missing Google credentials in environment variables');
}

export const oAuth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_REDIRECT_URI);

async function getOAuthTokens() {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline', // get refresh token
        scope: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('Authorize this app by visiting this url:', authUrl);
}

async function refreshToken() {
    try {
        const { credentials } = await oAuth2Client.refreshAccessToken();
        await fs.writeFile(TOKEN_PATH, JSON.stringify(credentials, null, 2))
        oAuth2Client.setCredentials(credentials);
        console.log('Tokens refreshed and saved to token.json');
        return credentials;
    } catch (err) {
    // Print full error details
        if (err instanceof Error) {
            console.error('Error refreshing tokens:', err.message);
        } else {
            console.error('Error refreshing tokens:', err);
        }
        throw new Error(`Failed to refresh tokens. Original error: ${err instanceof Error ? err.message : String(err)}`);
    }
}

export async function loadToken() {
  try {
    const raw = await fs.readFile(TOKEN_PATH, 'utf8');
    const tokenData = JSON.parse(raw);
    oAuth2Client.setCredentials(tokenData);
  } catch (err) {
    try {
        await refreshToken()
    } catch (err) {
        const errMessage = isGoogleApiErr(err) ? err.message : String(err);
        console.error('Unexpected error during loading/refreshing token:', errMessage)
        throw new Error('Failed to load or refresh tokens. Run auth flow first.');
    }
  }
}
