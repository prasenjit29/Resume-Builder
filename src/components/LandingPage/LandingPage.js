import React, { useState, useRef, useEffect } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';



// Font Awesome CDN for icons (add to public/index.html for production)
const FA_LINK = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

const statsData = [
  { number: 50000, suffix: '+', label: 'job seekers' },
  { number: 95, suffix: '%', label: 'get more interviews' },
  { number: 25, suffix: '+', label: 'ATS-compatible templates' }
];

const features = [
  { icon: '✓', title: 'ATS-Friendly Templates', desc: 'Optimized for Applicant Tracking Systems to ensure your resume gets past initial screenings and into human hands.' },
  { icon: '🤖', title: 'AI-Powered Content', desc: 'Get personalized suggestions, pre-written bullet points, and content recommendations tailored to your industry.' },
  { icon: '📄', title: 'Multiple Formats', desc: "Download your resume as PDF, Word document, or plain text to meet any employer's requirements." },
  { icon: '👀', title: 'Real-time Preview', desc: 'See exactly how your resume looks as you build it, with instant updates and formatting previews.' },
  { icon: '🎨', title: 'Professional Templates', desc: 'Choose from 25+ modern, industry-specific designs created by professional designers.' },
  { icon: '📱', title: 'Mobile Responsive', desc: 'Build, edit, and download your resume from any device - desktop, tablet, or smartphone.' }
];

const whyResumes = [
  { title: 'Your Gateway to Opportunities', desc: 'Resumes are your first impression with potential employers. A professional resume increases your chances of landing an interview by 42% compared to basic formats.', stat: '42% higher response rate' },
  { title: 'Showcase Your Value', desc: 'A well-structured resume effectively highlights your skills, experience, and achievements, making it easy for recruiters to see your potential.', stat: '6 seconds average review time' },
  { title: 'Beat the Competition', desc: "In today's competitive job market, a professional resume helps you stand out among hundreds of applicants vying for the same position.", stat: '95% of companies use ATS' },
  { title: 'Build Your Brand', desc: 'Your resume creates a consistent professional image that reinforces your personal brand across all career interactions.', stat: '3x more likely to get hired' }
];

const testimonials = [
  {
    quote: 'This resume builder helped me land my dream job! The templates are professional and the AI suggestions saved me hours of writing.',
    name: 'Sanghdeep Gedam',
    title: 'Cloud Engineer'
  },
  {
    quote: 'The ATS optimization feature is game-changing. I went from 0 responses to 5 interviews in just two weeks after using this platform.',
    name: 'Pratik Mendhe',
    title: 'Frontend Developer'
  },
  {
    quote: 'Clean, easy to use, and the results speak for themselves. I got hired within a month of updating my resume with this tool.',
    name: 'Virendra Shahane',
    title: 'Backend Developer'
  }
];

const LandingPage = () => {
  const navigate = useNavigate();



  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(null);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const lastScroll = useRef(window.scrollY);

  // Smooth scroll to section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (id && id !== '#') {
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
        const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Header scroll effect
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      setHeaderHidden(st > lastScroll.current && st > 100);
      setHeaderBg(st > 50);
      lastScroll.current = st;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Modal close with Escape
  useEffect(() => {
    const esc = (e) => {
      if (e.key === 'Escape' && aboutOpen) setAboutOpen(false);
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [aboutOpen]);

  // ...existing imports and state...

useEffect(() => {
  // Stat counter animation
  const stats = document.querySelectorAll('.stat__number');
  stats.forEach((stat, idx) => {
    let animated = false;
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const { number, suffix } = statsData[idx];
          let current = 0;
          const increment = number / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              stat.textContent = number.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              stat.textContent = Math.floor(current).toLocaleString() + suffix;
            }
          }, 30);
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(stat);
  });
}, []);

useEffect(() => {
  // Fade-in animation for cards
  const animatedEls = document.querySelectorAll('.feature__card, .why-resume__card, .testimonial__card');
  animatedEls.forEach((el, idx) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, idx * 100);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    observer.observe(el);
  });
}, []);

  // Animate stats on scroll
  useEffect(() => {
    const stats = document.querySelectorAll('.stat__number');
    stats.forEach((stat, idx) => {
      let animated = false;
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const { number, suffix } = statsData[idx];
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                stat.textContent = number.toLocaleString() + suffix;
                clearInterval(timer);
              } else {
                stat.textContent = Math.floor(current).toLocaleString() + suffix;
              }
            }, 30);
            observer.unobserve(stat);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(stat);
    });
  }, []);

  // Animate cards on scroll
  useEffect(() => {
    const animatedEls = document.querySelectorAll('.feature__card, .why-resume__card, .testimonial__card');
    animatedEls.forEach((el, idx) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s, transform 0.6s';
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, idx * 100);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      observer.observe(el);
    });
  }, []);

  // Parallax effect for hero image (optional)
  useEffect(() => {
    const heroImg = document.querySelector('.hero__img');
    if (!heroImg) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.3;
      heroImg.style.transform = `translateY(${rate}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Loading state for CTA buttons
const handleCTA = (e, btnKey) => {
  e.preventDefault();
  setLoadingBtn(btnKey);
  setTimeout(() => {
    setLoadingBtn(null);
    navigate('/resume-builder'); // Change to your actual route
  }, 500); // Shorter delay for better UX
};

const handleViewTemplates = (e) => {
  e.preventDefault();
  navigate('/templates'); // Change to your actual route
};

  // Mailto copy
  const handleMailClick = (e) => {
    if (!navigator.userAgent.includes('Mobile')) {
      e.preventDefault();
      const email = 'hello@resumebuilder.com';
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address ${email} copied to clipboard!`);
      }).catch(() => {
        alert(`Please email us at: ${email}`);
      });
    }
  };

  // Testimonial card hover
  useEffect(() => {
    const cards = document.querySelectorAll('.testimonial__card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = 'var(--shadow-lg)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow-sm)';
      });
    });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Add Font Awesome link dynamically (for dev)
  useEffect(() => {
    if (!document.querySelector('link[href="' + FA_LINK + '"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FA_LINK;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header
        className={`header${headerBg ? ' scrolled' : ''}`}
        style={{
          transform: headerHidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.3s, background-color 0.3s'
        }}
      >
        <nav className="nav container">
          <div className="nav__brand">
            <i className="fas fa-file-alt"></i>
            <span>HireWire</span>
          </div>
          <ul className={`nav__menu${menuOpen ? ' active' : ''}`}>
            <li><a href="#home" className="nav__link" onClick={e => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#features" className="nav__link" onClick={e => handleNavClick(e, 'features')}>Features</a></li>
            <li><a href="#why-resumes" className="nav__link" onClick={e => handleNavClick(e, 'why-resumes')}>Why Resumes Matter</a></li>
            <li><a href="#" className="nav__link" onClick={e => { e.preventDefault(); setAboutOpen(true); }}>About Me</a></li>
            <li><a href="#contact" className="nav__link" onClick={e => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <button
            className="btn btn--primary nav__cta"
            onClick={e => handleCTA(e, 'nav')}
            disabled={loadingBtn === 'nav'}
            style={loadingBtn === 'nav' ? { opacity: 0.7 } : {}}
          >
            {loadingBtn === 'nav' ? 'Loading...' : 'Get Started Free'}
          </button>
          <button
            className="nav__toggle"
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">Build Your Professional Resume in Minutes</h1>
              <p className="hero__subtitle">
                Create ATS-friendly resumes that get you hired faster. Choose from professional templates, get AI-powered suggestions, and download in multiple formats.
              </p>
              <div className="hero__cta">
                <button
                  className="btn btn--primary btn--lg"
                  onClick={e => handleCTA(e, 'hero')}
                  disabled={loadingBtn === 'hero'}
                  style={loadingBtn === 'hero' ? { opacity: 0.7 } : {}}
                >
                  {loadingBtn === 'hero' ? 'Loading...' : 'Start Building Now'}
                </button>
                <button
                  className="btn btn--outline btn--lg"
                  onClick={handleViewTemplates}
                >
                  View Templates
                </button>
              </div>
              <div className="hero__stats">
                {statsData.map((stat, i) => (
                  <div className="stat" key={i}>
                    <span className="stat__number">{stat.number.toLocaleString() + stat.suffix}</span>
                    <span className="stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero__image">
              <img
                src="https://pplx-res.cloudinary.com/image/upload/v1755253435/pplx_project_search_images/e8c249f76c8e9372f2004a45860a8a1ab3e11e4f.png"
                alt="Professional resume template preview"
                className="hero__img"
                style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Why Choose Our Resume Builder?</h2>
            <p className="section__subtitle">Powerful features designed to help you create the perfect resume</p>
          </div>
          <div className="features__grid">
            {features.map((f, i) => (
              <div className="feature__card" key={i}>
                <div className="feature__icon">{f.icon}</div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Resumes Matter Section */}
      <section className="why-resumes" id="why-resumes">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">The Power of a Professional Resume</h2>
            <p className="section__subtitle">Understanding why a great resume is your key to career success</p>
          </div>
          <div className="why-resumes__grid">
            {whyResumes.map((w, i) => (
              <div className="why-resume__card" key={i}>
                <h3 className="why-resume__title">{w.title}</h3>
                <p className="why-resume__description">{w.desc}</p>
                <div className="why-resume__stat">{w.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What Our Users Say</h2>
            <p className="section__subtitle">Success stories from job seekers who landed their dream jobs</p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="testimonial__card" key={i}>
                <div className="testimonial__content">
                  <p className="testimonial__quote">{t.quote}</p>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="testimonial__info">
                      <h4 className="testimonial__name">{t.name}</h4>
                      <p className="testimonial__title">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Land Your Dream Job?</h2>
            <p className="cta__subtitle">Join thousands of successful job seekers who've used our platform</p>
            <button
              className="btn btn--primary btn--lg cta__button"
              onClick={e => handleCTA(e, 'cta')}
              disabled={loadingBtn === 'cta'}
              style={loadingBtn === 'cta' ? { opacity: 0.7 } : {}}
            >
              {loadingBtn === 'cta' ? 'Loading...' : 'Create Your Resume Now'}
            </button>
            <p className="cta__note">Free to start, no credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <div className="nav__brand">
                <i className="fas fa-file-alt"></i>
                <span>HireWire</span>
              </div>
              <p className="footer__description">Build professional resumes that get you hired faster.</p>
            </div>
            <div className="footer__links">
              <div className="footer__section">
                <h4 className="footer__title">Product</h4>
                <ul className="footer__list">
                  <li><a href="#" className="footer__link">Templates</a></li>
                  <li><a href="#" className="footer__link">Features</a></li>
                  <li><a href="#" className="footer__link">Pricing</a></li>
                </ul>
              </div>
              <div className="footer__section">
                <h4 className="footer__title">Company</h4>
                <ul className="footer__list">
                  <li><a href="#" className="footer__link">Privacy Policy</a></li>
                  <li><a href="#" className="footer__link">Terms of Service</a></li>
                  <li><a href="#" className="footer__link">Contact</a></li>
                </ul>
              </div>
              <div className="footer__section">
                <h4 className="footer__title">Follow Us</h4>
                <div className="footer__social">
                  <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/prasenjit-urade-a96155323/" className="footer__social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com/prasenjit29" className="footer__social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2025 ResumeBuilder Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* About Me Modal */}
      {aboutOpen && (
        <div className="modal" id="about-modal" style={{ display: 'block' }}>
          <div className="modal__overlay" onClick={() => setAboutOpen(false)}></div>
          <div className="modal__content">
            <button className="modal__close" onClick={() => setAboutOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal__header">
              <h2 className="modal__title">About the Creator</h2>
            </div>
            <div className="modal__body">
              <div className="about__content">
                <div className="about__image">
                  <div className="about__avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                </div>
                <div className="about__text">
                  <p>Hi, I'm a passionate web developer and career enthusiast who understands the challenges of job hunting. After helping hundreds of friends and colleagues create winning resumes, I built this platform to make professional resume creation accessible to everyone.</p>
                  <p>With a background in both technology and career development, I've designed this tool to bridge the gap between what job seekers need and what employers want to see. My mission is to empower every professional with the tools they need to succeed in their career journey.</p>
                  <div className="about__contact">
                    <h4>Get in touch:</h4>
                    <div className="contact__links">
                      <a href="mailto:prasenjiturade@gmail.com" className="contact__link" target="_blank" rel="noopener noreferrer" onClick={handleMailClick}>
                        <i className="fas fa-envelope"></i> prasenjiturade@gmail.com
                      </a>
                      <a href="https://www.linkedin.com/in/prasenjit-urade-a96155323/" className="contact__link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                      <a href="#" className="contact__link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;