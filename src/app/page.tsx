import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} style={{ padding: 0 }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Powerful Landing Pages That Convert
          </h1>
          <p className={styles.heroSubtitle}>
            Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.
          </p>
          <a
            href="#get-started"
            className={styles.heroCta}
          >
            Start my trial
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>
          Data-driven lead capture solutions
        </h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>Intuitive builder</h3>
            <p>Create high-converting landing pages without writing a single line of code. Build multiple variations, A/B test, and optimize your results.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>Lead enrichment</h3>
            <p>Unlock the full potential of your leads by automatically adding key details like industry, company size, and location.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>A/B Testing</h3>
            <p>Experiment with different headlines, images, CTAs, and more to continuously optimize your page.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          More Leads. More Conversions. Start for Free.
        </h2>
        <p className={styles.ctaSubtitle}>
          Ready to soar past your marketing goals? Try our platform free for 14 days and discover a faster and more powerful lead optimization solution.
        </p>
        <a
          href="#"
          className={styles.ctaButton}
        >
          Sign Up Free
        </a>
      </section>
    </div>
  );
}
