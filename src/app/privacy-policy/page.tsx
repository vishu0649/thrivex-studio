import styles from './privacy-policy.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Thrivex Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website or use our services.
          </p>
          <p>
            By using our website and services, you consent to the data practices described 
            in this policy. If you do not agree with our policies and practices, please do 
            not use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company or organization information</li>
            <li>Project details and requirements</li>
            <li>Communication preferences</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information, including:</p>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>

          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your experience, 
            analyze website traffic, and understand where our visitors are coming from. 
            You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process and fulfill your requests</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and abuse</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
          
          <h3>4.1 Service Providers</h3>
          <p>
            We may share your information with trusted third-party service providers who 
            assist us in operating our website, conducting business, or servicing you.
          </p>

          <h3>4.2 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response 
            to valid requests by public authorities.
          </p>

          <h3>4.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information 
            may be transferred as part of the business transaction.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to 
            protect your personal information against unauthorized access, alteration, 
            disclosure, or destruction. However, no method of transmission over the 
            internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Objection:</strong> Object to processing of your personal information</li>
            <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided 
            at the end of this policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Third-Party Services</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>
          
          <h3>7.1 Analytics and Marketing</h3>
          <p>
            We may use third-party analytics and marketing services, such as Google Analytics, 
            to help us understand how visitors use our website and to improve our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13. We do not 
            knowingly collect personal information from children under 13. If you are a 
            parent or guardian and believe your child has provided us with personal 
            information, please contact us immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than 
            your own. We ensure that such transfers comply with applicable data protection 
            laws and implement appropriate safeguards to protect your information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new Privacy Policy on this page and updating the 
            &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>Email:</strong>
              <a href="mailto:privacy@thrivexstudio.com">privacy@thrivexstudio.com</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Address:</strong>
              <p>123 Studio Street<br />Creative District<br />City, State 12345</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 