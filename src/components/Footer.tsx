import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/behealthinformed/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@informedhealth", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border mt-auto bg-orange-100/70">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-gray-50/80 backdrop-blur-sm border-t border-gray-200"
      >
        {/* Subtle top shadow */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-300/50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-1xl md:text-2xl lg:text-3xl text-gray-800 mb-2 leading-tight">
              Start Your Personalized Path to Vitality<br />
              <span className="text-[#6cc52e]">With Madhavi!</span>
            </h2>

            <p className="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto mb-2">
              Take the first step toward better health with personalized functional nutrition guidance
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6cc52e] text-l rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-[#6cc52e]/20"
            >
              <p>Book an Appointment</p>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h1 className="font-heading font-bold text-lg text-primary">Follow Us</h1>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-white hover:text-primary"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Consultation", "Workshops", "Testimonials", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a 
                  href="tel:+918826504708" 
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  +91 88265 04708
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-secondary flex-shrink-0" />
                <a 
                  href="https://wa.me/918826504708" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a 
                  href="mailto:behealthinformed@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  behealthinformed@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Reviews & Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Reviews & Policies</h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/place/Informed+Health/@28.537549,77.246406,17z/data=!4m18!1m9!3m8!1s0x390ce3a43a325245:0x11ca783ce946bc7a!2sInformed+Health!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b!3m7!1s0x390ce3a43a325245:0x11ca783ce946bc7a!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  G
                </div>
                <span>Google Reviews</span>
              </a>
              <ul className="space-y-2">
                <li>
                  <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cancellation-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className="text-sm text-muted-foreground hover:text-primary">
                    Grievance Portal
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-black/20 text-center">
          <p className="text-sm text-black-300">
            © {new Date().getFullYear()} Madhavi K. Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;