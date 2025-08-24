import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

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

getOAuthTokens();