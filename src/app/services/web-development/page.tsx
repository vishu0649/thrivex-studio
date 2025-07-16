import styles from "../../page.module.css";

export default function WebDevelopmentServicePage() {
  return (
    <div className={styles.page} style={{ padding: 0, minHeight: '80vh' }}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)', color: '#fff', marginBottom: 48 }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Web Development Services</h1>
          <p className={styles.heroSubtitle}>
            From business websites to e-commerce, apps, and branding—our in-house team delivers high-performance digital solutions tailored to your goals.
          </p>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fcfcfe', borderRadius: 16, padding: 40, boxShadow: '0 2px 12px rgba(38,87,191,0.06)', marginBottom: 40 }}>
        <h2 style={{ color: '#2575fc', marginBottom: 28, fontSize: 28, textAlign: 'center' }}>Our Web Development Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>💼</div>
            <b>Corporate & Business Websites</b>
            <p style={{ color: '#444', marginTop: 8 }}>Professional, scalable sites for brands, portfolios, and organizations.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>🛒</div>
            <b>E-commerce Development</b>
            <p style={{ color: '#444', marginTop: 8 }}>Shopify, WooCommerce, Magento, and custom online stores with secure payments.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>🖥️</div>
            <b>WordPress & CMS</b>
            <p style={{ color: '#444', marginTop: 8 }}>Custom WordPress, speed optimization, migration, and ongoing support.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>📱</div>
            <b>App Development</b>
            <p style={{ color: '#444', marginTop: 8 }}>iOS, Android, Flutter, and React Native apps for every business need.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>🎨</div>
            <b>Branding & Design</b>
            <p style={{ color: '#444', marginTop: 8 }}>Logo, brochure, packaging, and full brand identity design.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 6px rgba(38,87,191,0.04)', textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>🔍</div>
            <b>SEO & Digital Marketing</b>
            <p style={{ color: '#444', marginTop: 8 }}>SEO, Google Ads, social media, and lead generation to grow your business.</p>
          </div>
        </div>
      </section>

      {/* Stats/Experience Section */}
      <section style={{ maxWidth: 1100, margin: '0 auto', marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 220, flex: '1 1 220px', textAlign: 'center', boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
          <div style={{ fontSize: 32, color: '#2575fc', fontWeight: 700 }}>14+</div>
          <div style={{ color: '#444', fontWeight: 600 }}>Years Experience</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 220, flex: '1 1 220px', textAlign: 'center', boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
          <div style={{ fontSize: 32, color: '#2575fc', fontWeight: 700 }}>500+</div>
          <div style={{ color: '#444', fontWeight: 600 }}>Projects Delivered</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 220, flex: '1 1 220px', textAlign: 'center', boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
          <div style={{ fontSize: 32, color: '#2575fc', fontWeight: 700 }}>100%</div>
          <div style={{ color: '#444', fontWeight: 600 }}>In-House Team</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 220, flex: '1 1 220px', textAlign: 'center', boxShadow: '0 1px 6px rgba(38,87,191,0.04)' }}>
          <div style={{ fontSize: 32, color: '#2575fc', fontWeight: 700 }}>96%</div>
          <div style={{ color: '#444', fontWeight: 600 }}>Client Retention</div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ maxWidth: 900, margin: '0 auto', background: '#2575fc', borderRadius: 16, padding: 40, color: '#fff', textAlign: 'center', boxShadow: '0 2px 12px rgba(38,87,191,0.10)' }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>Ready to Build Something Amazing?</h2>
        <p style={{ fontSize: 18, marginBottom: 24 }}>Let’s work together to create a website or app that drives real results for your business.</p>
        <a href="/contact" style={{ background: '#fff', color: '#2575fc', padding: '16px 40px', borderRadius: 32, fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 12px rgba(38,87,191,0.10)' }}>Request a Free Quote</a>
      </section>
    </div>
  );
} 