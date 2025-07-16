# Google Sheets Integration Setup

This guide will help you set up the contact form to save data to your Google Sheets.

## Step 1: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the contents of `google-apps-script.js`
4. Save the project with a name like "Contact Form Handler"

## Step 2: Deploy as Web App

1. Click on "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for now, you can restrict this later)
4. Click "Deploy"
5. Copy the Web App URL that's generated

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line:
   ```
   GOOGLE_APPS_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
   ```
3. Replace `YOUR_WEB_APP_URL_HERE` with the URL from Step 2

## Step 4: Set up Google Sheets

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/18GjEHxJNMTCxRSZFGz2Yzf6I-yrYkCfP1jC-LHiBn9s/edit?gid=0#gid=0
2. Add headers to the first row (optional but recommended):
   - A1: Timestamp
   - B1: First Name
   - C1: Last Name
   - D1: Email
   - E1: Phone
   - F1: Company
   - G1: Service
   - H1: Budget
   - I1: Message

## Step 5: Test the Integration

1. Start your Next.js development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Google Sheet to see if the data was saved

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your Google Apps Script is deployed as a web app with "Anyone" access
2. **Permission Denied**: Check that the Google Apps Script has permission to access your Google Sheet
3. **Environment Variable Not Found**: Make sure `.env.local` is in your project root and restart your dev server

### Testing the Google Apps Script:

1. Visit your web app URL directly in a browser
2. You should see: `{"status":"Google Apps Script is running"}`

### Manual Testing:

You can test the Google Apps Script manually by sending a POST request:

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "spreadsheetId": "18GjEHxJNMTCxRSZFGz2Yzf6I-yrYkCfP1jC-LHiBn9s",
    "range": "Sheet1!A:I",
    "values": [["2024-01-01T00:00:00.000Z", "John", "Doe", "john@example.com", "123-456-7890", "Test Company", "web-development", "5k-10k", "Test message"]]
  }'
```

## Security Considerations

1. **Restrict Access**: Once working, you can change the web app access to "Anyone with Google Account" for better security
2. **Rate Limiting**: Consider adding rate limiting to prevent spam
3. **Validation**: The API already validates required fields, but you might want to add more validation

## Data Structure

The contact form will save the following data to your Google Sheet:

| Column | Field | Required |
|--------|-------|----------|
| A | Timestamp | Auto-generated |
| B | First Name | Yes |
| C | Last Name | Yes |
| D | Email | Yes |
| E | Phone | No |
| F | Company | No |
| G | Service | Yes |
| H | Budget | No |
| I | Message | Yes |

## Next Steps

1. Test the form submission
2. Customize the data structure if needed
3. Add additional validation or fields
4. Consider adding email notifications for new submissions 