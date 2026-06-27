import { DOCUMENTS, OPERATIONS, DEMO_USER, STATS } from '@/lib/data';
import { ApiResponse, Document, Operation, DemoUser } from '@/lib/types';
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<NextResponse<ApiResponse<{
  documents: Document[];
  operations: Operation[];
  user: DemoUser;
  stats: Record<string, number>;
  totalDocuments: number;
  totalOperations: number;
}>>> {
  console.log(JSON.stringify({ route: '/api/data', method: 'GET', ts: Date.now() }));
  try {
    return NextResponse.json(
      {
        ok: true,
        data: {
          documents: DOCUMENTS,
          operations: OPERATIONS,
          user: DEMO_USER,
          stats: STATS,
          totalDocuments: DOCUMENTS.length,
          totalOperations: OPERATIONS.length,
        },
      },
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json(
      { ok: false, error: String(e) },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse<ApiResponse<{ message: string; received: unknown }>>> {
  console.log(JSON.stringify({ route: '/api/data', method: 'POST', ts: Date.now() }));
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        ok: true,
        message: 'Demo mode — data not persisted',
        received: body,
      },
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json(
      { ok: false, error: String(e) },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS(): Promise<NextResponse<null>> {
  return NextResponse.json(null, { status: 200, headers: corsHeaders });
}