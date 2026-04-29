import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, X } from "lucide-react";
import homepageImage from "/facebook banner.png";
import seed from "/seedling.png";
import stretch from "/gymnastic.png";
import sunMoon from "/day-and-night.png";
import lotus from "/lotus.png";
import gutIcon from "/stomach.png";
import madhavi from "@/assets/madhavi2.jpeg";

const scrollToId = (id: string, offset = 120) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || window.pageYOffset;
  const target = Math.max(0, scrollTop + rect.top - offset);
  window.scrollTo({ top: target, behavior: "smooth" });
};

const Typewriter = ({
  text,
  speed = 40,
  delay = 200,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let mounted = true;
    let i = 0;
    const start = window.setTimeout(function tick() {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        window.setTimeout(tick, speed);
      }
    }, delay);
    return () => {
      mounted = false;
      clearTimeout(start);
    };
  }, [text, speed, delay]);

  const isComplete = display.length === text.length;

  return (
    <span className="break-words">
      {display}
      {!isComplete && <span className="ml-1 inline-block animate-pulse">|</span>}
    </span>
  );
};

const getInitials = (name: string) => {
  if (!name || typeof name !== "string") return "U";
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const getRandomColor = (name: string) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  const index = (name?.length || 0) % colors.length;
  return colors[index];
};

const Avatar = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  const bgColor = getRandomColor(name);
  return (
    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${bgColor} text-white font-semibold text-sm sm:text-lg`}>
      {initials}
    </div>
  );
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100" aria-label="Close modal">
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    id: number;
    content: string;
    rating: number;
    name: string;
  } | null>(null);

  const testimonialData = [
    {
      id: 1,
      content: "Madhavi Sharma’s Informed Health Programme continues to be my lifeline to good health, and a centred mind and spirit. Her guidance over 14 weeks taught me to practice eating well, right, and on time. This consciousness is so well embedded in my daily life and its rhythms today that I cannot imagine living or eating any other way. What caught my attention was her emphasis on addressing health concerns, particularly high sugar and insulin resistance, by first focusing on the gut, understanding the ‘why’s’, ‘’where’s’, ‘what’s’, ‘when’s’, and ‘how’s’ of basic elements of food consumption and plate portions, and the right and correct way of exercising. Her diligence in paying attention to every meal, her weekly follow-ups, her ready suggestions with alternatives, and patience with questions are remarkable, and her quirky humour makes her course workable and an enjoyable ride.",
      rating: 5,
      name: "Chitra Gopalakrishnan",
    },
    {
      id: 2,
      content: `Dr. Madhavi Sharma has been a God-sent mentor for me at a time when I was searching for the right guidance to reverse diabetes and other health issues naturally.
      
      Before meeting her, I had tried intermittent fasting — one meal a day and two meals a day — but I couldn't maintain consistency. This often led to overeating, post-meal fatigue, and low energy throughout the day.
    
    She took the time to thoroughly understand my health concerns, lifestyle, habits, and goals, and then designed a realistic and sustainable approach that truly worked for me.
    
    Thanks to her guidance, my health has improved significantly, my energy levels are higher, and I feel lighter while walking and moving around. My post-meal blurry vision has also reduced noticeably.
    
    Every recommendation she made was supported by clear explanations, and the changes felt manageable rather than restrictive. She focuses on long-term health rather than quick fixes and genuinely cares about her client's progress and well-being.
    
    With her approach, we are not just getting healthier today, we are building a strong foundation for a healthier future. I am deeply thankful for the transformative difference she has made in my health.`,
      rating: 5,
      name: "Suraj Reddy",
    },
  ];

  const truncateText = (text: string, maxLength: number = 150) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const pillars = [
    {
      iconPath: gutIcon,
      title: "Gut Reset",
      text: "Heal Your Core. Optimize your microbiome to eliminate bloating and unlock peak nutrient absorption for all-day energy.",
    },
    {
      iconPath: seed,
      title: "Metabolic Nutrition",
      text: "Fuel Your Metabolism. Stabilize blood sugar and balance hormones using \"food-as-medicine\" to crush cravings and burn fat efficiently.",
    },
    {
      iconPath: stretch,
      title: "Movement",
      text: "Move with Purpose. Boost insulin sensitivity and functional strength through sustainable movement that energizes rather than exhausts.",
    },
    {
      iconPath: sunMoon,
      title: "Rhythm & Recovery",
      text: "Master Your Clock. Align your sleep and nutrition with your natural circadian rhythm to trigger deep cellular repair and wake up refreshed.",
    },
    {
      iconPath: lotus,
      title: "Mind-Body Balance",
      text: "Regulate Your System. Master stress regulation and emotional resilience to shift your body from \"survival mode\" into a state of total healing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative min-h-[80vh] sm:min-h-[550px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homepageImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="hidden lg:block absolute top-6 right-6 bg-secondary/90 text-secondary-foreground p-3 lg:p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="font-heading font-bold text-xl md:text-2xl">1500+</p>
            <p className="text-xs md:text-sm">Happy Clients</p>
          </div>

          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
                Rebuild Your Health from Inside Out
              </h1>

              <div className="mt-4">
                <p className="font-heading font-semibold text-lg sm:text-xl text-white/90 tracking-wider">
                  Using
                </p>

                <p className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{ color: '#6cc52e' }}>
                  <Typewriter text="The Science of Nutrition and the Art of Mindful Living" speed={50} delay={120} />
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto"
            >
              The perfect blend of Indian Nutritional Wisdom and Modern Nutrition Science <br className="hidden sm:block" /> using Food as Medicine and Lifestyle as Therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-3"
            >
              <Button asChild size="sm" className="bg-secondary w-full sm:w-auto">
                <Link to="/contact" className="flex items-center justify-center gap-2 px-4 py-2">
                  Get Started <ArrowRight size={16} />
                </Link>
              </Button>

              <Button
                onClick={() => scrollToId("pillars")}
                size="sm"
                className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded-lg w-full sm:w-auto"
                variant="ghost"
              >
                Discover the 5 Pillars
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl" style={{ color: "#444444" }}>
              Reclaim Your Vitality with the 5 Pillars of Functional Healing.
            </h2>
            <p className="text-muted-foreground mt-3 text-base sm:text-lg">
              Stop managing symptoms and start addressing the root cause. Build a high-performance body with a science-backed, personalized foundation.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
            >
              {pillars.map((p, i) => {
                const initialProps =
                  i <= 1
                    ? { opacity: 0, x: -80 }
                    : i === 2
                    ? { opacity: 0, y: 8 }
                    : { opacity: 0, x: 80 };

                return (
                  <motion.div
                    key={p.title}
                    initial={initialProps}
                    whileInView={i === 2 ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                    className="flex-1"
                  >
                    <div className="flex flex-col items-center text-center p-4 rounded-lg">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <img src={p.iconPath} alt={p.title} loading="lazy" className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex flex-col items-center max-w-xs">
                        <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{p.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-20 pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-center max-w-4xl mx-auto mb-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center" style={{ color: '#444444' }}>
              Why Functional Healing is the Key to Lasting Health.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-1 flex flex-col items-left"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full">
                <img
                  src={madhavi}
                  alt="Madhavi"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-left ml-6">
                <p className="font-heading font-semibold text-lg" style={{ color: '#444444' }}>Madhavi K. Sharma</p>
                <p className="text-sm text-muted-foreground">Founder - InformedHealth</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-2"
            >
              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Many of us spend years chasing quick relief for acidity, bloating, high sugar, or stubborn weight without ever uncovering the true trigger. Treating only the surface symptoms ensures the underlying imbalance persists, but real, lasting healing begins by addressing the <span className="font-bold text-gray-600">Root Cause</span>: your gut ecosystem, metabolic function, and circadian rhythms.
                </p>
                <p>
                  My approach replaces fads and fear with evidence-based nutrition and circadian-friendly habits that align your lifestyle with your body's natural clock for deep repair. By combining modern nutrition science with traditional Indian foods, ancient yogic practices, and Ayurvedic principles, I help you rebuild your health with compassion—no fads, no fear, and no unnecessary restriction. The result is a practical, <span className="font-bold text-gray-600">Sustainable Change</span> that fits your real life, allowing your symptoms to resolve naturally so you can finally move forward with clarity and sustained energy.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Start Your Healing Journey
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{ color: '#444444' }}>Results & Testimonials</h2>
            <p className="text-muted-foreground mt-3 text-base">Real people. Real results. Root-cause healing in action.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-4 sm:p-6 h-full hover:shadow-xl transition-shadow" style={{ boxShadow: '6px 6px 20px rgba(108,197,46,0.18)' }}>
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary mr-1" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-2 italic text-sm sm:text-base">
                    "{truncateText(testimonial.content)}"
                    {testimonial.content.length > 150 && (
                      <button
                        onClick={() => {
                          setTimeout(() => setSelectedTestimonial(testimonial), 200);
                        }}
                        className="text-primary hover:underline ml-1 not-italic cursor-pointer text-sm"
                      >
                        Read more
                      </button>
                    )}
                  </p>

                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <Avatar name={testimonial.name} />
                    <div className="ml-3">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
            >
              <Link to="/testimonials" style={{ fontSize: "16px" }} className="flex items-center justify-center gap-2 px-4 py-2">
                Read More Success Stories
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedTestimonial} onClose={() => setSelectedTestimonial(null)}>
        {selectedTestimonial && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <Avatar name={selectedTestimonial.name} />
              <div>
                <h3 className="font-semibold text-lg">{selectedTestimonial.name}</h3>
              </div>
            </div>
            <div className="flex mb-2">
              {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary mr-1" />
              ))}
            </div>
            <p className="text-base italic text-muted-foreground">"{selectedTestimonial.content}"</p>
          </div>
        )}
      </Modal>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex justify-center">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-6 text-center" style={{ color: '#444444' }}>Meet <span className="text-primary font-bold">Madhavi Sharma</span>, Your Partner in Functional Health</h2>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
                <p>
                  I am Madhavi Sharma, a Functional Nutritionist specializing in Gut Health and Diabetes Reversal. With over 20 years of international experience in integrative health, I’ve learned that your body isn’t broken—it’s simply waiting to be understood.
                  My approach uniquely combines modern nutrition science with traditional Indian foods and Ayurvedic principles to address the root causes of chronic illness.
                </p>
                <p>
                  By focusing on circadian rhythm alignment, mindful eating, and unlearning the stress of restrictive diet culture, I help you rebuild your vitality naturally through clarity and flow. Together, we will design a simple, sensible, and sustainable plan that fits your real life and enables true, long-term healing.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/about" style={{ fontSize: '16px' }} className="px-4 py-2">Meet Madhavi</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-[16px] sm:text-[18px]">
          Please feel free to Call Us at{' '}
          <a
            href="tel:+918826504708"
            style={{ color: '#6cc52e', fontWeight: '600' }}
            aria-label="Call +91 8826504708"
          >
            +91 8826504708
          </a>{' '}
          or Email at{' '}
          <a
            href="mailto:behealthinformed@gmail.com"
            style={{ color: '#6cc52e', fontWeight: '600' }}
            aria-label="Email behealthinformed at gmail dot com"
          >
            behealthinformed@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Home;
