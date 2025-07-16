"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Animated gradient effect for hero section
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      frame += 1;
      const deg = 90 + 30 * Math.sin(frame / 120);
      const color1 = `#6a11cb`;
      const color2 = `#2575fc`;
      if (heroRef.current) {
        heroRef.current.style.background = `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 100%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.page} style={{ padding: 0 }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent} ref={heroRef}>
          <h1 className={styles.heroTitle}>
            Thrivex Studio
          </h1>
          <p className={styles.heroSubtitle}>
            Elevate your brand with expert <b>Web Development</b>, <b>Video Editing</b>, <b>Podcast Production</b>, and <b>Instagram Videos</b>.<br/>
            Your one-stop creative partner for digital growth.
          </p>
          <a
            href="#get-started"
            className={styles.heroCta}
            style={{ fontSize: 24, padding: "18px 48px", marginTop: 24 }}
          >
            Start Your Project
          </a>
        </div>
      </section>
      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon} role="img" aria-label="Web Development">💻</span>
            <h3>Web Development</h3>
            <p>Modern, responsive websites and web apps that drive business growth and engagement.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon} role="img" aria-label="Video Editing">🎬</span>
            <h3>Video Editing</h3>
            <p>Professional editing for marketing, YouTube, Instagram, and more. Make your brand stand out.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon} role="img" aria-label="Podcast Production">🎙️</span>
            <h3>Podcast Production</h3>
            <p>From recording to distribution, we help you launch and grow your podcast with ease.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon} role="img" aria-label="Instagram Videos">📱</span>
            <h3>Instagram Videos</h3>
            <p>Short-form, high-impact videos tailored for social media engagement and brand awareness.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon} role="img" aria-label="Social Media Management">📈</span>
            <h3>Social Media Management</h3>
            <p>Grow your audience and boost your online presence with our expert social media strategies.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              “Thrivex Studio delivered our website and promo videos faster than we imagined. The quality and creativity were top-notch!”
            </p>
            <div className={styles.testimonialAuthor}>— Priya S., Marketing Lead</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              “Their podcast production team made launching our show effortless. We love the results and the ongoing support!”
            </p>
            <div className={styles.testimonialAuthor}>— Alex R., Podcast Host</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>
              “Our Instagram engagement skyrocketed after working with Thrivex. Highly recommended for any business!”
            </p>
            <div className={styles.testimonialAuthor}>— Jamie L., Small Business Owner</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>
          Why Choose Thrivex Studio?
        </h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>Fast Turnaround</h3>
            <p>Get your projects delivered quickly without compromising quality.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>Creative Team</h3>
            <p>Work with passionate experts in web, video, and audio production.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureCardTitle}>End-to-End Solutions</h3>
            <p>From concept to launch, we handle every step of your digital journey.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Ready to Transform Your Brand?
        </h2>
        <p className={styles.ctaSubtitle}>
          Let’s create something amazing together. Get in touch for a free consultation and see how Thrivex Studio can help you grow.
        </p>
        <a
          href="/contact"
          className={styles.ctaButton}
          style={{ fontSize: 22, padding: "16px 44px" }}
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
