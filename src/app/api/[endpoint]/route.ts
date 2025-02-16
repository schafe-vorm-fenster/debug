import { NextRequest, NextResponse } from 'next/server';

// Helper function to log requests
const logRequest = async (req: NextRequest, method: string) => {
  const body = method === 'GET' ? null : await req.json().catch(() => null);
  const log = {
    timestamp: new Date().toISOString(),
    method,
    url: req.url,
    headers: Object.fromEntries(req.headers),
    query: Object.fromEntries(new URL(req.url).searchParams),
    body,
  };
  
  console.log(JSON.stringify(log, null, 2));
  return log;
};

export async function GET(
  request: NextRequest,
) {
  const logData = await logRequest(request, 'GET');
  return NextResponse.json({ success: true, logged: logData });
}

export async function POST(
  request: NextRequest,
) {
  const logData = await logRequest(request, 'POST');
  return NextResponse.json({ success: true, logged: logData });
}