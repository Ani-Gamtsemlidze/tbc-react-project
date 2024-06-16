import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(new Error('No filename provided'), { status: 400 });
  }

  const fileBuffer = await request.arrayBuffer(); // Convert request body to ArrayBuffer

  if (!fileBuffer) {
    return NextResponse.json(new Error('No file content provided'), { status: 400 });
  }

  const blob = await put(filename, Buffer.from(fileBuffer), {
    access: 'public',
  });

  return NextResponse.json(blob);
}
