import { google } from 'googleapis';
import { oAuth2Client, isGoogleApiErr, loadToken } from "./auth";

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Berlin', // CEST
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24-hour format
    };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    
    const parts = formatter.formatToParts(date);
    const day = parts.find(p => p.type === 'day')!.value;
    const month = parts.find(p => p.type === 'month')!.value;
    const year = parts.find(p => p.type === 'year')!.value;
    const hour = parts.find(p => p.type === 'hour')!.value.padStart(2, '0');
    const minute = parts.find(p => p.type === 'minute')!.value.padStart(2, '0');

    return `'${day}-${month}-${year} ${hour}:${minute}'`;
}

export async function writeToSheet(name: string, email: string, comment: string) {
    try {
        await loadToken();
        const dateTime = formatDate(new Date());
        const values = [[dateTime, name, email, comment]];
        const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: '14-pBEQSvSp02Ss-FtynTO8PnQnd4UXO40a_zFBOBvLo',
            range: 'Sheet1!A:D', // must match actual sheet name, watch out with renaming...
            valueInputOption: 'USER_ENTERED', 
            requestBody: {
                values,
            },
        });
        return response.data;
    } catch (err: unknown) {
        const errMessage = isGoogleApiErr(err) ? err.message : String(err);
        throw errMessage;
    }
}

