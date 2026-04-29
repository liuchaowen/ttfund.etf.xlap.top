/**
 * 获取基金列表 API
 * GET /api/fund/list
 */

import { NextResponse } from 'next/server';
import { getFundList } from '@/lib/fetcher';

export async function GET() {
  try {
    const data = await getFundList();
    
    if (!data) {
      return NextResponse.json(
        { error: '获取基金列表失败' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('获取基金列表失败:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}