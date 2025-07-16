import styles from "../../page.module.css";

export default function VideoEditingServicePage() {
  return (
    <div className={styles.page} style={{ padding: 0, minHeight: '80vh' }}>
      <section className={styles.heroSection} style={{ background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)', color: '#fff', marginBottom: 48 }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Video Editing</h1>
          <p className={styles.heroSubtitle}>
            Captivate your audience with stunning, professional video content for every platform.
          </p>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: '0 auto', background: '#fcfcfe', borderRadius: 16, padding: 40, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 40 }}>
        <h2 style={{ color: '#2575fc', marginBottom: 24, fontSize: 28 }}>Our Video Editing Features</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>🎬 Multi-Platform Editing</b>
            <p style={{ color: '#444', marginTop: 8 }}>YouTube, Instagram, podcasts, ads, and more—tailored for every channel.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>✨ Creative Effects</b>
            <p style={{ color: '#444', marginTop: 8 }}>Eye-catching transitions, graphics, captions, and animations.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>🎵 Sound Design</b>
            <p style={{ color: '#444', marginTop: 8 }}>Music, voice, and effects mixed for maximum impact.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>📏 Custom Formats</b>
            <p style={{ color: '#444', marginTop: 8 }}>Vertical, square, or widescreen—perfect for every platform.</p>
          </div>
          <div style={{ flex: '1 1 260px', minWidth: 260, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
            <b>🚀 Fast Turnaround</b>
            <p style={{ color: '#444', marginTop: 8 }}>Quick delivery without sacrificing quality or creativity.</p>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 40 }}>
        <h2 style={{ color: '#2575fc', marginBottom: 18, fontSize: 26 }}>Our Workflow</h2>
        <ol style={{ color: '#222', fontSize: 17, lineHeight: 1.7, paddingLeft: 24, marginBottom: 18 }}>
          <li><b>Consultation:</b> We discuss your vision, goals, and audience.</li>
          <li><b>Planning:</b> We storyboard, script, and plan your content.</li>
          <li><b>Editing:</b> We cut, enhance, and add effects for maximum impact.</li>
          <li><b>Review:</b> You review and request changes—your satisfaction is our priority.</li>
          <li><b>Delivery:</b> We deliver ready-to-publish files in your preferred formats.</li>
        </ol>
        <div style={{ color: '#444', fontSize: 16 }}>Want to wow your audience? <b>Contact us</b> for a free video editing consultation!</div>
      </section>
      <section style={{ maxWidth: 900, margin: '0 auto', background: '#fcfcfe', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)' }}>
        <h2 style={{ color: '#2575fc', marginBottom: 18, fontSize: 24 }}>Client Success Stories</h2>
        <ul style={{ color: '#222', fontSize: 17, lineHeight: 1.7, paddingLeft: 24, marginBottom: 18 }}>
          <li>"Our Instagram reels now get 5x more engagement!"</li>
          <li>"The YouTube edits are so professional—our subscribers love them."</li>
          <li>"Fast, creative, and always on-brand. Highly recommended!"</li>
        </ul>
      </section>
    </div>
  );
} 