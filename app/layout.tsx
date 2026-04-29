import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '天天基金 API',
    description: '天天基金数据 API 服务 - 提供基金实时净值、历史净值、基金列表等数据接口',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN">
            <body>{children}</body>
        </html>
    );
}