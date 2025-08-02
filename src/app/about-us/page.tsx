import styles from './about-us.module.css';

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Thrivex Studio</h1>
          <p>We&apos;re a creative studio passionate about helping businesses grow through innovative digital solutions, podcast production, and video content creation.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.sectionContent}>
          <h2>Our Mission</h2>
          <p>
            At Thrivex Studio, we believe that every business has a unique story to tell. 
            Our mission is to amplify those stories through cutting-edge technology, creative 
            design, and strategic content creation. We help businesses connect with their 
            audiences in meaningful ways that drive growth and build lasting relationships.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.sectionContent}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We stay ahead of the curve, embracing new technologies and creative approaches to deliver exceptional results.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Quality</h3>
              <p>Every project we undertake meets our high standards for excellence, from concept to final delivery.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Collaboration</h3>
              <p>We work closely with our clients, treating every project as a partnership built on trust and communication.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Impact</h3>
              <p>We measure success by the real impact our work has on our clients&apos; business growth and audience engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.services}>
        <div className={styles.sectionContent}>
          <h2>What We Do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Podfast - Podcast Services</h3>
              <p>Complete podcast production from concept to distribution. We handle everything from recording and editing to hosting and marketing strategy.</p>
              <ul>
                <li>Professional recording and editing</li>
                <li>Podcast strategy and branding</li>
                <li>Hosting and distribution setup</li>
                <li>Marketing and growth strategies</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web applications that convert visitors into customers and drive business growth.</p>
              <ul>
                <li>Custom website design</li>
                <li>Front-end and back-end development</li>
                <li>E-commerce solutions</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3>Video Recording</h3>
              <p>Professional video production services for businesses, content creators, and marketing campaigns.</p>
              <ul>
                <li>Studio rental and on-site recording</li>
                <li>Video editing and post-production</li>
                <li>Marketing video creation</li>
                <li>Live streaming setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.sectionContent}>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholder}>JD</div>
              </div>
              <h3>John Doe</h3>
              <p className={styles.role}>Founder & Creative Director</p>
              <p>With over 10 years of experience in digital media and creative production, John leads our team with a vision for innovative storytelling and technical excellence.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholder}>JS</div>
              </div>
              <h3>Jane Smith</h3>
              <p className={styles.role}>Lead Web Developer</p>
              <p>Jane specializes in creating seamless user experiences and robust web applications that drive business results and user engagement.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <div className={styles.placeholder}>MJ</div>
              </div>
              <h3>Mike Johnson</h3>
              <p className={styles.role}>Audio & Video Producer</p>
              <p>Mike brings his expertise in audio engineering and video production to create compelling content that captures and retains audience attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.sectionContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>25+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.sectionContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let&apos;s work together to bring your vision to life. Get in touch to discuss your project and how we can help you achieve your goals.</p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.primaryButton}>Get Started</a>
            <a href="/portfolio" className={styles.secondaryButton}>View Our Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}



