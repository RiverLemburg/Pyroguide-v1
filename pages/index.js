export default function Home() {
  async function handleBuy(kind) {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: kind })
    });
    const data = await res.json();
    if (data.url) window.location = data.url;
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1>PyroGuide — Wood Burning Starter Kits</h1>
      <p style={{ marginTop: 8 }}>
        Kits with stick-on templates and wedding-grade wood blanks. Simple, crisp results for beginners and makers.
      </p>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
        <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3>Starter Kit</h3>
          <p>Pen, 10 templates, 3 blanks</p>
          <strong>$69</strong><br/>
          <button onClick={() => handleBuy('starter')} style={{ marginTop: 8, padding: '8px 12px' }}>Buy Starter Kit</button>
        </div>

        <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3>Pro Bundle</h3>
          <p>Extra tips, 30 templates, 10 blanks</p>
          <strong>$129</strong><br/>
          <button onClick={() => handleBuy('pro')} style={{ marginTop: 8, padding: '8px 12px' }}>Buy Pro Bundle</button>
        </div>

        <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 16 }}>
          <h3>Wedding Welcome Sign</h3>
          <p>18×24 maple/oak blank</p>
          <strong>$120</strong><br/>
          <button onClick={() => handleBuy('welcome')} style={{ marginTop: 8, padding: '8px 12px' }}>Order Sign</button>
        </div>
      </div>

      <h3 style={{ marginTop: 32 }}>Free SVG Templates</h3>
      <ul>
        <li><a href="/templates/wreath.svg" download>Wreath SVG</a></li>
        <li><a href="/templates/monogram.svg" download>Monogram SVG</a></li>
        <li><a href="/templates/mrandmrs.svg" download>Mr &amp; Mrs SVG</a></li>
      </ul>
    </div>
  );
}
