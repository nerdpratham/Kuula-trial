export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Virtual Walkthrough</h1>
        <p style={styles.subtitle}>Explore the space in 360°</p>
      </header>

      <main style={styles.main}>
        <div style={styles.tourWrapper}>
          <iframe
            title="Virtual Walkthrough"
            src="https://kuula.co/share/collection/7T0sf?logo=1&info=1&fs=1&vr=0&thumbs=1"
            style={styles.iframe}
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Use mouse or touch to navigate · Scroll to zoom</p>
      </footer>
    </div>
  )
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  header: {
    padding: '2rem 1.5rem 1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#94a3b8',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 1.5rem',
  },
  tourWrapper: {
    width: '100%',
    maxWidth: '1200px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    aspectRatio: '16 / 9',
    position: 'relative',
    background: '#000',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    fontSize: '0.8rem',
    color: '#475569',
  },
}
