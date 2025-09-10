export default function Success() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>✅ Thanks for your order!</h1>
      <p>Your payment was completed successfully.</p>
      <p>You’ll receive a Stripe receipt in your email.</p>
      <a href="/" style={{ marginTop: 20, display: 'inline-block', color: '#0070f3' }}>
        Back to Home
      </a>
    </div>
  );
}
