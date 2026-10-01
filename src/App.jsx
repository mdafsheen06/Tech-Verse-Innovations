import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Monitor, Smartphone, Code, 
  Cpu, Cloud, Shield, Lightbulb, BarChart, Clock, 
  TrendingUp, CheckCircle, ArrowRight
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'glass-card' : ''}`} style={{ padding: scrolled ? '1rem 0' : '1.5rem 0', borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>TechVerse Innovations</div>
          
          <div className="nav-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }}>Solutions</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Process</a>
            <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us'); }}>Why Us</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>
          
          <div className="nav-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>Get a Free Consultation</button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(5, 11, 20, 0.95)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }}>Solutions</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Process</a>
            <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us'); }}>Why Us</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => scrollTo('contact')}>Get a Free Consultation</button>
          </div>
        )}
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="trust-badge" style={{ marginBottom: '1.5rem' }}>Customized • Affordable • Scalable • Future-Ready</span>
              <h1>Technology Solutions Built Around Your Business.</h1>
              <p>TechVerse Innovations helps startups, small businesses, schools, and organizations simplify their work through affordable, innovative, and customized digital solutions.</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollTo('contact')}>Get a Free Consultation</button>
                <button className="btn btn-secondary" onClick={() => scrollTo('services')}>Explore Our Services</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="abstract-node"></div>
              <div className="tech-element" style={{ animationDelay: '0s' }}>
                <Code className="service-icon" style={{ margin: 0, marginBottom: '1rem' }}/>
                <h4 style={{ color: '#fff' }}>Web & Mobile</h4>
                <div style={{ width: '100%', height: '4px', background: 'var(--glass-bg)', borderRadius: '2px', marginTop: '0.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '60%', background: 'var(--accent-blue)' }}></div>
                </div>
              </div>
              <div className="tech-element" style={{ position: 'absolute', right: '10%', top: '10%', animationDelay: '1s' }}>
                <Cpu className="service-icon" style={{ margin: 0, marginBottom: '1rem', color: 'var(--accent-purple)', background: 'rgba(157, 78, 221, 0.1)' }}/>
                <h4 style={{ color: '#fff' }}>AI Solutions</h4>
              </div>
              <div className="tech-element" style={{ position: 'absolute', bottom: '10%', left: '20%', animationDelay: '2s' }}>
                <Cloud className="service-icon" style={{ margin: 0, marginBottom: '1rem' }}/>
                <h4 style={{ color: '#fff' }}>Cloud & Security</h4>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section style={{ background: 'var(--glass-bg)', padding: '4rem 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ width: '100%', display: 'block' }}>Technology That Makes Business Simpler.</h2>
            <div className="metrics-grid" style={{ marginTop: '3rem' }}>
              <div className="metric-card glass-card">
                <Clock className="service-icon" style={{ margin: '0 auto 1rem' }}/>
                <div className="metric-title">Save Time</div>
                <div className="metric-desc">Reduce repetitive and manual work.</div>
              </div>
              <div className="metric-card glass-card">
                <TrendingUp className="service-icon" style={{ margin: '0 auto 1rem' }}/>
                <div className="metric-title">Improve Efficiency</div>
                <div className="metric-desc">Make workflows simpler and more organized.</div>
              </div>
              <div className="metric-card glass-card">
                <Monitor className="service-icon" style={{ margin: '0 auto 1rem' }}/>
                <div className="metric-title">Grow Digitally</div>
                <div className="metric-desc">Build a stronger digital presence.</div>
              </div>
              <div className="metric-card glass-card">
                <Lightbulb className="service-icon" style={{ margin: '0 auto 1rem' }}/>
                <div className="metric-title">Work Smarter</div>
                <div className="metric-desc">Use technology to make better use of resources and information.</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="why-us">
          <div className="container">
            <div className="text-center">
              <h2>Technology Should Solve Problems, Not Create Them.</h2>
              <p className="section-subtitle">Common challenges businesses face with outdated or generic solutions.</p>
            </div>
            <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { title: 'Manual Processes', text: 'Manual and time-consuming processes that slow down growth.' },
                { title: 'Outdated Systems', text: 'Legacy software that is difficult to maintain and integrate.' },
                { title: 'No Online Presence', text: 'Lack of digital presence in a highly connected world.' },
                { title: 'Data Security', text: 'Concerns over protecting business and customer data.' },
                { title: 'High Costs', text: 'High technology costs with low return on investment.' },
                { title: 'Generic Solutions', text: 'Solutions that do not match specific business requirements.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <X className="service-icon" style={{ color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)', width: '30px', height: '30px', marginBottom: '1rem', fontSize: '1rem' }} />
                  <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section id="solutions" style={{ background: 'var(--secondary-bg)' }}>
          <div className="container">
            <div className="text-center">
              <h2>From Business Challenges to Digital Solutions</h2>
              <p className="section-subtitle">We understand that every organization is different. Instead of offering one-size-fits-all solutions, TechVerse Innovations understands each client's requirements and develops technology solutions designed around their specific goals.</p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
              <div className="glass-card text-center" style={{ flex: '1', minWidth: '150px' }}>Business Problem</div>
              <ArrowRight style={{ color: 'var(--accent-blue)' }} />
              <div className="glass-card text-center" style={{ flex: '1', minWidth: '150px' }}>Requirement Analysis</div>
              <ArrowRight style={{ color: 'var(--accent-blue)' }} />
              <div className="glass-card text-center" style={{ flex: '1', minWidth: '150px', background: 'rgba(0, 240, 255, 0.1)', borderColor: 'var(--accent-blue)' }}>Customized Solution</div>
              <ArrowRight style={{ color: 'var(--accent-purple)' }} />
              <div className="glass-card text-center" style={{ flex: '1', minWidth: '150px' }}>Implementation</div>
              <ArrowRight style={{ color: 'var(--accent-purple)' }} />
              <div className="glass-card text-center" style={{ flex: '1', minWidth: '150px', background: 'rgba(157, 78, 221, 0.1)', borderColor: 'var(--accent-purple)' }}>Business Growth</div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <div className="container">
            <div className="text-center">
              <h2>Our Technology Services</h2>
              <p className="section-subtitle">Comprehensive digital solutions customized for your exact needs.</p>
            </div>
            
            <div className="grid-container">
              {/* Service 1 */}
              <div className="glass-card service-card">
                <Monitor className="service-icon" />
                <h3>Web Development</h3>
                <p>Responsive, modern, and user-friendly websites designed to establish a strong digital presence.</p>
                <ul>
                  <li><CheckCircle size={16} /> Business websites</li>
                  <li><CheckCircle size={16} /> Responsive design</li>
                  <li><CheckCircle size={16} /> Web applications</li>
                  <li><CheckCircle size={16} /> UI/UX development</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="glass-card service-card">
                <Smartphone className="service-icon" />
                <h3>Mobile App Development</h3>
                <p>Customized mobile applications designed to improve customer engagement and business operations.</p>
                <ul>
                  <li><CheckCircle size={16} /> Android applications</li>
                  <li><CheckCircle size={16} /> Cross-platform applications</li>
                  <li><CheckCircle size={16} /> Business applications</li>
                  <li><CheckCircle size={16} /> User-friendly interfaces</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="glass-card service-card">
                <Code className="service-icon" />
                <h3>Custom Software Development</h3>
                <p>Software solutions developed according to the specific requirements and workflows of your organization.</p>
                <ul>
                  <li><CheckCircle size={16} /> Business management systems</li>
                  <li><CheckCircle size={16} /> Automation solutions</li>
                  <li><CheckCircle size={16} /> Custom applications</li>
                  <li><CheckCircle size={16} /> Workflow solutions</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="glass-card service-card">
                <Cpu className="service-icon" />
                <h3>AI Solutions</h3>
                <p>Practical AI solutions that help organizations automate tasks, analyze information, and improve decision-making.</p>
                <ul>
                  <li><CheckCircle size={16} /> AI-powered applications</li>
                  <li><CheckCircle size={16} /> Automation</li>
                  <li><CheckCircle size={16} /> Intelligent workflows</li>
                  <li><CheckCircle size={16} /> AI integration</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="glass-card service-card">
                <Cloud className="service-icon" />
                <h3>Cloud Services</h3>
                <p>Scalable cloud-based solutions that help organizations improve accessibility, flexibility, and operational efficiency.</p>
                <ul>
                  <li><CheckCircle size={16} /> Cloud deployment</li>
                  <li><CheckCircle size={16} /> Cloud-based applications</li>
                  <li><CheckCircle size={16} /> Data management</li>
                  <li><CheckCircle size={16} /> Scalable infrastructure</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="glass-card service-card">
                <Shield className="service-icon" />
                <h3>Cybersecurity</h3>
                <p>Security-focused solutions designed to help organizations protect their applications, systems, and business data.</p>
                <ul>
                  <li><CheckCircle size={16} /> Security assessment</li>
                  <li><CheckCircle size={16} /> Application security</li>
                  <li><CheckCircle size={16} /> Data protection</li>
                  <li><CheckCircle size={16} /> Security best practices</li>
                </ul>
              </div>

              {/* Service 7 */}
              <div className="glass-card service-card" style={{ gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto' }}>
                <Lightbulb className="service-icon" />
                <h3>IT Consulting</h3>
                <p>Technology guidance that helps organizations identify the right tools, systems, and strategies for their goals.</p>
                <ul>
                  <li><CheckCircle size={16} /> Technology consulting</li>
                  <li><CheckCircle size={16} /> Digital transformation</li>
                  <li><CheckCircle size={16} /> IT strategy</li>
                  <li><CheckCircle size={16} /> Solution planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section style={{ background: 'var(--secondary-bg)' }}>
          <div className="container">
            <h2 className="text-center" style={{ width: '100%', display: 'block' }}>Technology for Every Growing Organization</h2>
            <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="glass-card">
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>Startups</h4>
                <p>Build your digital foundation without unnecessary complexity.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>Small Businesses</h4>
                <p>Automate everyday tasks and improve operational efficiency.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>Schools & Institutions</h4>
                <p>Create digital platforms that simplify administration, learning, and communication.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontSize: '1.2rem' }}>Organizations</h4>
                <p>Modernize workflows and adopt scalable technology solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process">
          <div className="container">
            <div className="text-center">
              <h2>Our Development Process</h2>
              <p className="section-subtitle">A clear, step-by-step approach from idea to impact.</p>
            </div>
            
            <div className="process-timeline" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
              <div className="process-step glass-card">
                <h4>01 — Understand</h4>
                <p>Understand the client's business, goals, and challenges.</p>
              </div>
              <div className="process-step glass-card">
                <h4>02 — Analyze</h4>
                <p>Study requirements and identify the right technology approach.</p>
              </div>
              <div className="process-step glass-card">
                <h4>03 — Design</h4>
                <p>Create user-focused interfaces and solution architecture.</p>
              </div>
              <div className="process-step glass-card">
                <h4>04 — Develop</h4>
                <p>Build secure, scalable, and reliable solutions.</p>
              </div>
              <div className="process-step glass-card">
                <h4>05 — Test</h4>
                <p>Test functionality, usability, performance, and reliability.</p>
              </div>
              <div className="process-step glass-card">
                <h4>06 — Deploy</h4>
                <p>Launch the solution and make it available to users.</p>
              </div>
              <div className="process-step glass-card">
                <h4>07 — Support</h4>
                <p>Provide improvements, maintenance, and technical support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" style={{ background: 'var(--secondary-bg)' }}>
          <div className="container">
            <h2 className="text-center" style={{ width: '100%', display: 'block' }}>About TechVerse Innovations</h2>
            <div className="glass-card" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center', padding: '3rem' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                TechVerse Innovations is a Software and IT Services company focused on helping businesses and organizations adopt practical digital solutions. We develop websites, mobile applications, custom software, AI solutions, cloud services, cybersecurity solutions, and provide IT consulting based on client requirements.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <span className="trust-badge">Understanding requirements</span>
                <span className="trust-badge">Building practical solutions</span>
                <span className="trust-badge">Making technology accessible</span>
                <span className="trust-badge">Improving efficiency</span>
                <span className="trust-badge">Supporting digital growth</span>
              </div>
            </div>

            <div className="grid-container" style={{ marginTop: '3rem' }}>
              <div className="glass-card" style={{ borderTop: '4px solid var(--accent-blue)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
                <p>To provide practical, affordable, and customized technology solutions that simplify work and improve efficiency for businesses and organizations.</p>
              </div>
              <div className="glass-card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
                <p>To become a trusted technology partner that enables businesses and organizations to grow through innovative, accessible, and useful digital solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <div className="container">
            <h2 className="text-center" style={{ width: '100%', display: 'block' }}>Why Choose TechVerse Innovations?</h2>
            <div className="grid-container" style={{ marginTop: '3rem' }}>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Customized Solutions</h4>
                <p style={{ fontSize: '0.95rem' }}>Solutions designed around specific business requirements.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Affordable Technology</h4>
                <p style={{ fontSize: '0.95rem' }}>Practical solutions designed to provide value without unnecessary complexity.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Modern Technology</h4>
                <p style={{ fontSize: '0.95rem' }}>Use current technologies and development practices.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Scalable Solutions</h4>
                <p style={{ fontSize: '0.95rem' }}>Build solutions that can grow with the organization.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>User-Centered Design</h4>
                <p style={{ fontSize: '0.95rem' }}>Focus on simplicity, usability, and customer experience.</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Long-Term Partnership</h4>
                <p style={{ fontSize: '0.95rem' }}>Work with clients beyond development through support and improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO / CONCEPTS */}
        <section style={{ background: 'var(--secondary-bg)' }}>
          <div className="container">
            <div className="text-center">
              <h2>Selected Solutions & Concepts</h2>
              <p className="section-subtitle">Examples of how we apply technology to solve real business challenges.</p>
            </div>
            
            <div className="grid-container">
              {[
                { title: 'Business Web Applications', icon: <Monitor /> },
                { title: 'Custom Management Systems', icon: <BarChart /> },
                { title: 'AI-Powered Solutions', icon: <Cpu /> },
                { title: 'Educational Technology', icon: <Lightbulb /> },
                { title: 'Cloud-Based Applications', icon: <Cloud /> }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div className="service-icon" style={{ marginBottom: '1rem' }}>{item.icon}</div>
                  <h4 style={{ marginBottom: '1rem', color: '#fff' }}>{item.title}</h4>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: 'auto' }}>View Project</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{ paddingBottom: '2rem' }}>
          <div className="container">
            <div className="glass-card" style={{ 
              background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(157,78,221,0.05) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '4rem',
              textAlign: 'center'
            }}>
              <h2 style={{ display: 'block', width: '100%', marginBottom: '1rem' }}>Have a Business Problem? Let's Build the Solution.</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>Tell us about your business challenge or technology requirement. Our team can help you explore a practical digital solution.</p>
              
              <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <form name="contact" method="POST" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="text" name="name" placeholder="Full Name" style={{ flex: 1, padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff' }} required />
                    <input type="email" name="email" placeholder="Email Address" style={{ flex: 1, padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff' }} required />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="tel" name="phone" placeholder="Phone Number" style={{ flex: 1, padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff' }} />
                    <input type="text" name="organization" placeholder="Organization" style={{ flex: 1, padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff' }} />
                  </div>
                  <select name="service" style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff', appearance: 'none' }} required defaultValue="">
                    <option value="" disabled>Service Required</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="software">Custom Software</option>
                    <option value="ai">AI Solutions</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" placeholder="Tell Us About Your Requirement" rows="4" style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff', resize: 'vertical' }} required></textarea>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="logo" style={{ marginBottom: '1rem', display: 'inline-block' }}>TechVerse Innovations</div>
              <p>"Affordable Technology. Smarter Business. Sustainable Growth."</p>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <span>contact@techverseinnovations.com</span>
                <span>+1 (555) 000-0000</span>
                <span>TechVerse Headquarters, Innovation City</span>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a></li>
                <li><a href="#solutions" onClick={(e) => { e.preventDefault(); scrollTo('solutions'); }}>Solutions</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>Process</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Applications</a></li>
                <li><a href="#services">Custom Software</a></li>
                <li><a href="#services">AI Solutions</a></li>
                <li><a href="#services">Cloud Services</a></li>
                <li><a href="#services">Cybersecurity</a></li>
                <li><a href="#services">IT Consulting</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 TechVerse Innovations. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
