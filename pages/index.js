export default function Home() {
  async function handleBuy(kind) {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: kind })
    });
    const data = await res.json();
    if (data?.url) window.location = data.url;
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', color: '#111' }}>
      {/* HERO with video */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid #eee' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/kit-hero.jpg"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: 520 }}
        >
          <source src="/video/hero-burn.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15))'
        }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 24, color: '#fff'
        }}>
          <div style={{ maxWidth: 900 }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0 }}>PyroGuide — Wood burning made easy</h1>
            <p style={{ marginTop: 8, fontSize: 16, opacity: 0.95 }}>
              Starter kits, stick-on templates, and wedding-grade blanks for crisp, reliable results.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
              <button onClick={() => handleBuy('starter')}
                style={{ background: '#fff', color: '#111', border: 'none', padding: '10px 14px', borderRadius: 10, fontWeight: 600 }}>
                Buy Starter Kit — $69
              </button>
              <a href="#gallery"
                 style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '10px 14px', borderRadius: 10, textDecoration: 'none' }}>
                See Results
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* “Burned templates” strip */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Templates, actually burned into wood</h2>
        <p style={{ color: '#555', marginBottom: 16 }}>
          Use our free SVGs or your custom design. Stick, trace, burn — peel to reveal clean lines.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16
        }}>
          {/* Before/after tile */}
          <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            <img src="/images/before-after.jpg" alt="Before and After burn" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 12 }}>
              <strong>Before → After</strong>
              <p style={{ margin: '6px 0', color: '#555' }}>Peel the template to reveal crisp burned lines.</p>
              <a href="/templates/wreath.svg" download>Download Wreath SVG</a>
            </div>
          </div>
          {/* Wedding sign */}
          <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            <img src="/images/wedding-sign.jpg" alt="Wedding welcome sign" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 12 }}>
              <strong>Wedding Welcome Sign</strong>
              <p style={{ margin: '6px 0', color: '#555' }}>Perfect for ceremonies and receptions.</p>
              <a href="/templates/mrandmrs_script.svg" download>Mr &amp; Mrs Script SVG</a>
            </div>
          </div>
          {/* Coasters */}
          <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            <img src="/images/coaster-set.jpg" alt="Burned monogram coasters" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 12 }}>
              <strong>Monogram Coasters</strong>
              <p style={{ margin: '6px 0', color: '#555' }}>Personalized gifts in minutes.</p>
              <a href="/templates/monogram_ring.svg" download>Monogram Ring SVG</a>
            </div>
          </div>
          {/* Table numbers */}
          <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            <img src="/images/table-numbers.jpg" alt="Burned table numbers" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 12 }}>
              <strong>Table Numbers</strong>
              <p style={{ margin: '6px 0', color: '#555' }}>Batch-friendly designs for events.</p>
              <a href="/templates/leaf_laurel.svg" download>Leaf Laurel SVG</a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section id="gallery" style={{ background: '#fafafa', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Gallery</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 12
          }}>
            <img src="/images/kit-hero.jpg" alt="Kit contents" style={{ width: '100%', borderRadius: 12 }} />
            <img src="/images/burn-closeup.jpg" alt="Burning closeup" style={{ width: '100%', borderRadius: 12 }} />
            <img src="/images/mountains.jpg" alt="Mountains design" style={{ width: '100%', borderRadius: 12 }} />
            <img src="/images/pine-forest.jpg" alt="Pine forest design" style={{ width: '100%', borderRadius: 12 }} />
          </div>
        </div>
      </section>

      {/* Shop cards */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Shop Kits & Blanks</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16
        }}>
          <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3 style={{ margin: '4px 0' }}>Starter Kit</h3>
            <p style={{ margin: '6px 0', color: '#555' }}>Pen + 10 templates + 3 blanks</p>
            <strong>$69</strong><br />
            <button onClick={() => handleBuy('starter')}
              style={{ marginTop: 8, padding: '10px 14px', borderRadius: 10, border: '1px solid #111', background: '#111', color: '#fff' }}>
              Buy Starter Kit
            </button>
          </div>

          <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3 style={{ margin: '4px 0' }}>Pro Bundle</h3>
            <p style={{ margin: '6px 0', color: '#555' }}>Extra tips + 30 templates + 10 blanks</p>
            <strong>$129</strong><br />
            <button onClick={() => handleBuy('pro')}
              style={{ marginTop: 8, padding: '10px 14px', borderRadius: 10, border: '1px solid #111', background: '#111', color: '#fff' }}>
              Buy Pro Bundle
            </button>
          </div>

          <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3 style={{ margin: '4px 0' }}>Wedding Welcome Sign</h3>
            <p style={{ margin: '6px 0', color: '#555' }}>18×24 maple/oak blank</p>
            <strong>$120</strong><br />
            <button onClick={() => handleBuy('welcome')}
              style={{ marginTop: 8, padding: '10px 14px', borderRadius: 10, border: '1px solid #111', background: '#111', color: '#fff' }}>
              Order Sign
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: 24, color: '#666' }}>
        © {new Date().getFullYear()} PyroGuide • <a href="mailto:hello@pyroguide.example">Contact</a>
      </footer>
    </div>
  );
}
