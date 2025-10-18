'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })

  const services = [
    { name: 'Haircut & Style', price: '$65', desc: 'Professional cut and styling' },
    { name: 'Color Service', price: '$120+', desc: 'Full color or highlights' },
    { name: 'Balayage', price: '$180+', desc: 'Hand-painted highlights' },
    { name: 'Deep Conditioning', price: '$45', desc: 'Intensive treatment' },
    { name: 'Blowout', price: '$55', desc: 'Professional styling' },
    { name: 'Updo', price: '$95+', desc: 'Special occasion styling' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking request received! We will contact you shortly to confirm.')
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>Luxe Hair Salon</h1>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Experience Luxury Hair Care</h2>
          <p>Where style meets sophistication</p>
          <a href="#booking" className={styles.ctaButton}>Book Appointment</a>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <h3>{service.name}</h3>
              <p className={styles.price}>{service.price}</p>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>About Luxe Hair Salon</h2>
          <p>
            With over 15 years of experience, our team of expert stylists is dedicated to
            bringing out the best in your hair. We use only premium products and the latest
            techniques to ensure you leave feeling confident and beautiful.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Expert Stylists</h3>
              <p>Certified professionals with years of training</p>
            </div>
            <div className={styles.feature}>
              <h3>Premium Products</h3>
              <p>We use only the finest hair care brands</p>
            </div>
            <div className={styles.feature}>
              <h3>Relaxing Atmosphere</h3>
              <p>Enjoy a spa-like experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.booking}>
        <h2>Book Your Appointment</h2>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="service">Service *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              {services.map((service, idx) => (
                <option key={idx} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Additional Notes</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Request Appointment
          </button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Luxe Hair Salon</h3>
            <p>123 Main Street</p>
            <p>Beverly Hills, CA 90210</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Hours</h3>
            <p>Mon-Fri: 9am - 8pm</p>
            <p>Sat: 9am - 6pm</p>
            <p>Sun: 10am - 5pm</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@luxehairsalon.com</p>
          </div>
        </div>
        <p className={styles.copyright}>© 2024 Luxe Hair Salon. All rights reserved.</p>
      </footer>
    </div>
  )
}
