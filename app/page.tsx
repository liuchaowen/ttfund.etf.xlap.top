export default function Home() {
    return (
        <main style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>天天基金 API</h1>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '40px' }}>
                提供基金实时净值、历史净值、基金列表等数据接口
            </p>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
                    API 接口列表
                </h2>

                {/* 实时净值 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#0070f3' }}>GET /api/fund/realtime</h3>
                    <p>获取单个基金的实时净值数据</p>
                    <div style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto'
                    }}>
                        <code>GET /api/fund/realtime?code=001186</code>
                    </div>
                    <p><strong>参数:</strong></p>
                    <ul>
                        <li><code>code</code> - 基金代码 (6位数字，必填)</li>
                    </ul>
                    <p><strong>返回示例:</strong></p>
                    <pre style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {`{
  "fundcode": "001186",
  "name": "富国国有企业债A",
  "jzrq": "2024-01-15",
  "dwjz": "1.2340",
  "gsz": "1.2350",
  "gszzl": "0.08",
  "gztime": "2024-01-16 15:00"
}`}
                    </pre>
                </div>

                {/* 历史净值 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#0070f3' }}>GET /api/fund/history</h3>
                    <p>获取单个基金的历史净值数据</p>
                    <div style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px'
                    }}>
                        <code>GET /api/fund/history?code=001186</code>
                    </div>
                    <p><strong>参数:</strong></p>
                    <ul>
                        <li><code>code</code> - 基金代码 (6位数字，必填)</li>
                    </ul>
                    <p><strong>返回示例:</strong></p>
                    <pre style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {`[
  {
    "x": 1705276800000,
    "y": 1.234,
    "equityReturn": 0.08,
    "unitMoney": "元",
    "cumulative": 1.567
  }
]`}
                    </pre>
                </div>

                {/* 基金列表 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#0070f3' }}>GET /api/fund/list</h3>
                    <p>获取全量基金列表</p>
                    <div style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px'
                    }}>
                        <code>GET /api/fund/list</code>
                    </div>
                    <p><strong>返回示例:</strong></p>
                    <pre style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {`[
  {
    "fund_code": "000001",
    "abbr": "HHCZ",
    "name": "华夏成长混合",
    "type": "混合型",
    "pinyin": "huaxiachengzhanghunhe"
  }
]`}
                    </pre>
                </div>

                {/* 批量实时净值 */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#0070f3' }}>POST /api/fund/batch-realtime</h3>
                    <p>批量获取多个基金的实时净值数据</p>
                    <div style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px'
                    }}>
                        <code>POST /api/fund/batch-realtime</code>
                    </div>
                    <p><strong>请求体:</strong></p>
                    <pre style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {`{
  "codes": ["001186", "110022"],
  "concurrency": 5
}`}
                    </pre>
                    <p><strong>参数:</strong></p>
                    <ul>
                        <li><code>codes</code> - 基金代码数组 (必填)</li>
                        <li><code>concurrency</code> - 并发数 (可选，默认5)</li>
                    </ul>
                    <p><strong>返回示例:</strong></p>
                    <pre style={{
                        background: '#f6f8fa',
                        padding: '15px',
                        borderRadius: '6px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {`{
  "001186": {
    "fundcode": "001186",
    "name": "富国国有企业债A",
    ...
  },
  "110022": {
    "fundcode": "110022",
    "name": "易方达消费行业股票",
    ...
  }
}`}
                    </pre>
                </div>
            </section>

            <footer style={{
                borderTop: '1px solid #eee',
                paddingTop: '20px',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                <p>数据来源: 天天基金 (fund.eastmoney.com)</p>
                <p>API 域名: ttfund.etf.xlap.top</p>
            </footer>
        </main>
    );
}