'use client';

import styles from './contact.module.css';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you! Your message has been sent successfully.'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Ready to start your next project? We'd love to hear from you.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <h2>Send us a message</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company/Organization</label>
              <input type="text" id="company" name="company" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">Service Interest *</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="podfast">Podfast - Podcast Services</option>
                <option value="web-development">Web Development</option>
                <option value="video-recording">Video Recording</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="budget">Budget Range</label>
              <select id="budget" name="budget">
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over-50k">Over $50,000</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Project Details *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                required
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting && <span className={styles.loader}></span>}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus.type && (
              <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>Get in Touch</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a href="mailto:hello@thrivexstudio.com">hello@thrivexstudio.com</a>
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
          </div>

          <div className={styles.infoCard}>
            <h3>Business Hours</h3>
            <div className={styles.hours}>
              <div className={styles.hourItem}>
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className={styles.hourItem}>
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className={styles.hourItem}>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 