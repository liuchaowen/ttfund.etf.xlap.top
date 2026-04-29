/**
 * 获取基金实时净值 API
 * GET /api/fund/realtime?code=基金代码
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFundRealtime } from '@/lib/fetcher';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { error: '缺少基金代码参数 code' },
      { status: 400 }
    );
  }

  // 验证基金代码格式 (6位数字)
  if (!/^\d{6}$/.test(code)) {
    return NextResponse.json(
      { error: '基金代码格式错误，应为6位数字' },
      { status: 400 }
    );
  }

  try {
    const data = await getFundRealtime(code);
    
    if (!data) {
      return NextResponse.json(
        { error: '获取数据失败，请检查基金代码是否正确' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('获取实时净值失败:', error);
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}