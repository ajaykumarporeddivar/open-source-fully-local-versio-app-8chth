import { DOCUMENTS, OPERATIONS } from '@/lib/data';
import { ApiResponse, Document, Operation } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

type SearchResultItem = Document | Operation;

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<{ results: SearchResultItem[]; total: number; query: string | null }>>> {
  console.log(JSON.stringify({ route: '/api/search', method: 'GET', ts: Date.now() }));
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type'); // 'documents' or 'operations'

    const lowerCaseQuery = query.toLowerCase();
    let matchingItems: SearchResultItem[] = [];

    if (!query) {
      // If query is empty, return first 5 items based on type or documents by default
      if (type === 'operations') {
        matchingItems = OPERATIONS.slice(0, 5);
      } else {
        matchingItems = DOCUMENTS.slice(0, 5);
      }
    } else {
      if (!type || type === 'documents') {
        matchingItems.push(
          ...DOCUMENTS.filter(
            (doc) =>
              doc.title.toLowerCase().includes(lowerCaseQuery) ||
              doc.content.toLowerCase().includes(lowerCaseQuery)
          )
        );
      }

      if (!type || type === 'operations') {
        matchingItems.push(
          ...OPERATIONS.filter(
            (op) =>
              op.input.toLowerCase().includes(lowerCaseQuery) ||
              op.output.toLowerCase().includes(lowerCaseQuery)
          )
        );
      }
    }

    // Limit results to a maximum of 20
    const results = matchingItems.slice(0, 20);

    return NextResponse.json({
      ok: true,
      data: {
        results: results,
        total: results.length,
        query: query,
      },
    });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/search', error: String(e), ts: Date.now() }));
    return NextResponse.json(
      { ok: false, error: String(e) },
      { status: 500 }
    );
  }
}