import styles from "../../page.module.css";

export default function PodcastServicePage() {
  return (
    <div className={styles.page} style={{ padding: 0, minHeight: '80vh' }}>
      <section className={styles.heroSection} style={{ background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)', color: '#fff', marginBottom: 48 }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Podcast Production</h1>
          <p className={styles.heroSubtitle}>
            Launch, grow, and scale your podcast with our all-in-one production studio. From concept to distribution, we help you sound professional and reach your audience.
          </p>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: '0 auto', background: '#fcfcfe', borderRadius: 16, padding: 40, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 40 }}>
        <h2 style={{ color: '#2575fc', marginBottom: 24, fontSize: 28 }}>Why Choose Our Podcast Services?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>🎙️ Studio-Quality Recording</b>
            <p style={{ color: '#444', marginTop: 8 }}>Professional equipment and sound engineering for crystal-clear audio.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>✂️ Expert Editing</b>
            <p style={{ color: '#444', marginTop: 8 }}>Remove noise, add music, and polish your episodes for a seamless listener experience.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>🚀 Launch & Distribution</b>
            <p style={{ color: '#444', marginTop: 8 }}>We handle publishing to Spotify, Apple Podcasts, YouTube, and more.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>📈 Growth Strategy</b>
            <p style={{ color: '#444', marginTop: 8 }}>Get marketing support, show notes, and social media assets to grow your audience.</p>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: '0 auto', marginBottom: 40 }}>
        <h2 style={{ color: '#2575fc', marginBottom: 18, fontSize: 26 }}>See Our Work</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', padding: 12 }}>
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/1OTzt4UUeLI" title="Podcast Example 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: 8 }}></iframe>
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', padding: 12 }}>
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/T6OBykUknK4" title="Podcast Example 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: 8 }}></iframe>
          </div>
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', padding: 12 }}>
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/FaH53MynsTY" title="Podcast Example 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: 8 }}></iframe>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: '0 auto', background: '#fcfcfe', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)' }}>
        <h2 style={{ color: '#2575fc', marginBottom: 18, fontSize: 24 }}>Client Results</h2>
        <ul style={{ color: '#222', fontSize: 17, lineHeight: 1.7, paddingLeft: 24, marginBottom: 18 }}>
          <li>"Our downloads grew 3x in 6 months after switching to Thrivex Studio!"</li>
          <li>"The editing quality and launch support are unmatched."</li>
          <li>"We finally sound like the pros, and our audience noticed!"</li>
        </ul>
        <div style={{ color: '#444', fontSize: 16 }}>Ready to launch your podcast? <b>Contact us</b> for a free consultation!</div>
      </section>
    </div>
  );
} 