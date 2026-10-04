import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clock3,
  Hammer,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import "./styles.css";

const WHATSAPP = "27789044710";

function whatsappUrl(message) {
  if (!message) {
    message = "Hi ProTouch, I'd like to enquire about a vehicle repair.";
  }

  return (
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(message)
  );
}

function assetUrl(path) {
  return import.meta.env.BASE_URL + path;
}

const services = [
  {
    icon: Car,
    title: "Dent & Scratch Repairs",
    text: "Restore panels and remove everyday dents, scratches and body damage.",
  },
  {
    icon: Hammer,
    title: "Full Body Repair",
    text: "Professional body repair work focused on a clean, quality finish.",
  },
  {
    icon: Sparkles,
    title: "Dent Removal",
    text: "Get your vehicle looking sharp again with targeted dent repair.",
  },
  {
    icon: ShieldCheck,
    title: "Frame Straightening",
    text: "Structural correction for vehicles that need frame alignment.",
  },
  {
    icon: Wrench,
    title: "Mechanical Repairs",
    text: "Mechanical assistance for general vehicle maintenance and repairs.",
  },
  {
    icon: CheckCircle2,
    title: "Brakes & Suspension",
    text: "Brake, suspension and shock-related repairs and servicing.",
  },
  {
    icon: Clock3,
    title: "Minor & Major Service",
    text: "Keep your vehicle maintained with routine and major servicing.",
  },
  {
    icon: Sparkles,
    title: "Car Polishing",
    text: "Refresh your vehicle's finish with professional polishing.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home" aria-label="ProTouch home">
          <span className="brand-mark">
            <Car size={24} strokeWidth={2.4} />
          </span>

          <span>
            <strong>PROTOUCH</strong>
            <small>Panel Beaters & Mechanic</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-whatsapp"
          href={whatsappUrl(
            "Hi ProTouch, I'd like to get a quote for my vehicle."
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          WhatsApp Us
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              Kelvin, Sandton
            </div>

            <h1>
              Expert vehicle repairs.
              <br />
              <em>Quality you can trust.</em>
            </h1>

            <p>
              Your trusted partner for mechanical mastery and body repair.
              From dents and scratches to servicing, brakes and suspension,
              ProTouch is ready to get you back on the road.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={whatsappUrl(
                  "Hi ProTouch, I'd like to get a quote for my vehicle. Please assist me."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Get a Quote on WhatsApp
                <ArrowRight size={18} />
              </a>

              <a className="btn btn-secondary" href="tel:0789044710">
                <Phone size={19} />
                078 904 4710
              </a>
            </div>

            <div className="trust-row">
              <span>
                <CheckCircle2 size={17} />
                Body repairs
              </span>

              <span>
                <CheckCircle2 size={17} />
                Mechanical
              </span>

              <span>
                <CheckCircle2 size={17} />
                Servicing
              </span>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="image-frame">
              <img
                src={assetUrl("assets/protouch-sign.jpg")}
                alt="ProTouch Panel Beaters & Mechanic sign"
              />
            </div>

            <div className="floating-card">
              <div className="floating-icon">
                <Wrench size={21} />
              </div>

              <div>
                <strong>Panel Beaters & Mechanic</strong>
                <span>20 Pretoria Main Road</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-strip">
          <div>
            <strong>8+</strong>
            <span>Core services</span>
          </div>

          <div>
            <strong>Body</strong>
            <span>Repair specialists</span>
          </div>

          <div>
            <strong>Auto</strong>
            <span>Mechanical care</span>
          </div>

          <div>
            <strong>Local</strong>
            <span>Kelvin, Sandton</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span />
                What we do
              </div>

              <h2>
                One workshop for your
                <br />
                <em>vehicle's needs.</em>
              </h2>
            </div>

            <p>
              Whether your car needs bodywork after an accident or routine
              mechanical attention, contact us for an assessment and quote.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={23} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <a
                  href={whatsappUrl(
                    "Hi ProTouch, I'd like to enquire about " +
                      title.toLowerCase() +
                      "."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery-section section">
          <div className="section-heading gallery-heading">
            <div>
              <div className="eyebrow">
                <span />
                Our work
              </div>

              <h2>
                Built around <em>quality.</em>
              </h2>
            </div>

            <p>
              Take a look at the ProTouch branding and services. For
              vehicle-specific examples, WhatsApp us and we can discuss your
              repair.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item gallery-large">
              <img
                src={assetUrl("assets/gallery-sign.jpg")}
                alt="ProTouch Panel Beaters and Mechanic sign"
              />
              <figcaption>
                ProTouch Panel Beaters & Mechanic
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src={assetUrl("assets/gallery-bodywork.jpg")}
                alt="Vehicle body repair work"
              />
              <figcaption>Body repair & refinishing</figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src={assetUrl("assets/gallery-mechanical.jpg")}
                alt="Vehicle mechanical repair work"
              />
              <figcaption>Mechanical repairs</figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src={assetUrl("assets/protouch-sign.jpg")}
                alt="ProTouch workshop information"
              />
              <figcaption>Local workshop in Kelvin</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-image">
            <img
              src={assetUrl("assets/protouch-sign.jpg")}
              alt="ProTouch workshop sign"
            />
          </div>

          <div className="about-copy">
            <div className="eyebrow">
              <span />
              ProTouch
            </div>

            <h2>
              Your trusted partner for{" "}
              <em>mechanical mastery</em> and body repair.
            </h2>

            <p>
              ProTouch Panel Beaters & Mechanic provides a practical,
              all-in-one solution for vehicle body repairs and mechanical work
              in Kelvin, Sandton.
            </p>

            <div className="about-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Panel beating and body repair</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Mechanical repairs and servicing</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Brakes, suspension and shocks</span>
              </div>
            </div>

            <a
              className="text-link"
              href={whatsappUrl(
                "Hi ProTouch, I need help with my vehicle. Can I get an assessment and quote?"
              )}
              target="_blank"
              rel="noreferrer"
            >
              Talk to ProTouch
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <div>
              <div className="eyebrow light">
                <span />
                Get in touch
              </div>

              <h2>
                Ready to get your car
                <br />
                <em>back in shape?</em>
              </h2>

              <p>
                Send us a WhatsApp message and tell us what your vehicle needs.
                You can also call us directly.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="contact-item"
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={24} />

                <span>
                  <small>WhatsApp</small>
                  <strong>078 904 4710</strong>
                </span>
              </a>

              <a className="contact-item" href="tel:0784507449">
                <Phone size={24} />

                <span>
                  <small>Call</small>
                  <strong>078 450 7449</strong>
                </span>
              </a>

              <a
                className="contact-item"
                href="mailto:ss.mlindelwa@gmail.com"
              >
                <span className="mail-icon">@</span>

                <span>
                  <small>Email</small>
                  <strong>ss.mlindelwa@gmail.com</strong>
                </span>
              </a>

              <div className="contact-item">
                <MapPin size={24} />

                <span>
                  <small>Workshop</small>
                  <strong>
                    20 Pretoria Main Road, Kelvin, Sandton
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <strong>PROTOUCH</strong>
          <span>Panel Beaters & Mechanic</span>
        </div>

        <span>
          © {new Date().getFullYear()} ProTouch. All rights reserved.
        </span>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ProTouch on WhatsApp"
      >
        <MessageCircle size={26} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);