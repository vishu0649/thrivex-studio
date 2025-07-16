import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      budget,
      message
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const rowData = [
      new Date().toISOString(), // Timestamp
      firstName,
      lastName,
      email,
      phone || '',
      company || '',
      service,
      budget || '',
      message
    ];

    // Google Sheets API configuration
    const SPREADSHEET_ID = '18GjEHxJNMTCxRSZFGz2Yzf6I-yrYkCfP1jC-LHiBn9s';
    const RANGE = 'Sheet1!A:I'; // Adjust based on your sheet structure

    // Google Apps Script URL for contact form submissions
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw75tuh6WLZxFmAfmlbk-yli0rkZwrDYX4-PWEL-cLfWOVUt5wfJ98oUv37UIvckSOM/exec';

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
        values: [rowData]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 