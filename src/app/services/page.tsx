import Link from "next/link";
import styles from "../page.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.page} style={{ padding: 0, minHeight: '80vh' }}>
      <section className={styles.heroSection} style={{ background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)', color: '#fff', marginBottom: 48 }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSubtitle}>
            Explore our core offerings designed to help your brand grow and thrive in the digital world.
          </p>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ background: '#fcfcfe', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 24 }}>
          <h2 style={{ color: '#2575fc', marginBottom: 12 }}>Podcast Production</h2>
          <p style={{ color: '#222', marginBottom: 16 }}>Launch, grow, and manage your podcast with our end-to-end production services, including recording, editing, and distribution.</p>
          <Link href="/services/podcast" style={{ color: '#2575fc', fontWeight: 700, textDecoration: 'underline' }}>Learn more</Link>
        </div>
        <div style={{ background: '#fcfcfe', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 24 }}>
          <h2 style={{ color: '#2575fc', marginBottom: 12 }}>Web Development</h2>
          <p style={{ color: '#222', marginBottom: 16 }}>Modern, responsive websites and web apps that drive business growth and engagement for your brand.</p>
          <Link href="/services/web-development" style={{ color: '#2575fc', fontWeight: 700, textDecoration: 'underline' }}>Learn more</Link>
        </div>
        <div style={{ background: '#fcfcfe', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px rgba(38,87,191,0.06)' }}>
          <h2 style={{ color: '#2575fc', marginBottom: 12 }}>Video Editing</h2>
          <p style={{ color: '#222', marginBottom: 16 }}>Professional video editing for marketing, YouTube, Instagram, and more. Make your brand stand out with stunning visuals.</p>
          <Link href="/services/video-editing" style={{ color: '#2575fc', fontWeight: 700, textDecoration: 'underline' }}>Learn more</Link>
        </div>
      </section>
    </div>
  );
} 