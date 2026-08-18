import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import madhavi from "@/assets/madhavi.jpg"
import madhaviwork from "@/assets/wellness talk.jpg"
import olxLogo from "@/assets/logos/olx.png";
import zomatoLogo from "@/assets/logos/zomato.png";
import durdarshanLogo from "@/assets/logos/durdarshan.png";
import toiLogo from "@/assets/logos/toi.png";
import gridIndiaLogo from "@/assets/logos/GridIndiaLogo.png";
import blogChatterLogo from "@/assets/logos/blogchatter.jpg";
import adityaBirlaLogo from "@/assets/logos/aditya-birla.png";
import htLogo from "@/assets/logos/ht.png";
import happyMomsLogo from "@/assets/logos/happy-moms-kids.jpg";
import millenniumLogo from "@/assets/logos/millenium.jpeg";
import itcLogo from "@/assets/logos/itc.png";
import hmdLogo from "@/assets/logos/hmd.jpg";
import ddkisanLogo from "@/assets/logos/ddkisan.png";
import thehindu from "@/assets/logos/the-hindu.png";
import heartFoundationLogo from "@/assets/logos/heart-foundation-botswana.jpeg";
import { Award, BookOpen, Heart, Users, CheckCircle2, Briefcase, MessageSquare, LogOut } from "lucide-react";

// BlurImage component for optimized loading
const BlurImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`
          absolute inset-0 
          ${isLoading ? "animate-pulse bg-muted" : "opacity-0"}
          transition-opacity duration-300
        `}
      />
      {currentSrc && (
        <img
          loading="lazy"
          src={currentSrc}
          alt={alt}
          className={`
            w-full h-full object-cover
            ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"}
            transition-all duration-300
          `}
        />
      )}
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives personalized attention and support throughout their wellness journey",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "All recommendations are grounded in the latest nutritional science and research",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Certified and continuously learning to provide the best possible care",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your goals, preferences, and lifestyle are at the heart of every plan",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#444444', fontWeight: 'bold' }} className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight">About Madhavi K. Sharma</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Top-Tier Functional Nutritionist | Founder, Informed Health <br />Specializing in Root-Cause Healing, Metabolic Wellness & Chronic Recovery
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-[6/5] rounded-2xl overflow-hidden shadow-xl">
              <BlurImage
                src={madhavi}
                alt="Madhavi K. Sharma"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-4xl" style={{ color:"#6cc52e", fontFamily: 'Inter, sans-serif' }}>Meet Madhavi </h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground pb-3 text-[18px]">
                Madhavi Sharma is a premier Functional Nutritionist and the visionary Founder of Informed Health. Leveraging a Nutrition & Dietetics degree from Delhi University and 20+ years of global practice, she is a leading authority in integrative medicine, Gut Reset protocols, and evidence-based lifestyle interventions.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                Her clinical expertise includes specialized residency at the Centre for Diabetes and Endocrinology (South Africa) and International Diabetes Federation (Belgium) accreditation. This worldwide experience empowers her to master natural Diabetes Reversal, advanced endocrinology, and complex metabolic health management.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                By merging Modern Nutritional Science with Traditional Ayurvedic Food Wisdom, Madhavi delivers high-impact functional nutrition and lifestyle therapy. Her holistic strategy transcends calorie tracking, prioritizing gut microbiome restoration and sustainable metabolic transformation.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                Throughout her prestigious career, Madhavi has mentored a global elite—ranging from high-performance professionals to global leaders, including Sir Seretse Khama, the former President of Botswana.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                Madhavi’s methodology centers on bio-individual balance through nutrition, movement, and mindfulness. By fostering a connection with the body’s innate biological intelligence, she empowers clients to achieve permanent well-being and optimal metabolic harmony.
              </p>
            </div>
          </motion.div>
        </div>

        {/* New Sections: Her Approach, Her Work, Her Philosophy */}
        <section className="space-y-12 mb-16">
          {/* Her Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl text-center"
          >
            <div>
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="text-primary" size={48} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>The Functional Framework: A Multi-Dimensional Approach</h2>
                 <p className="text-muted-foreground mb-8 text-[18px]">
                   Madhavi's work is anchored in the principle of root-cause healing — addressing underlying imbalances rather than managing surface-level symptoms. Her functional framework integrates:
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        {
                          title: "Food as Medicine",
                          desc: "Targeted nutrition to optimize metabolism, balance hormones, and reverse systemic inflammation.",
                          bg: "from-primary/10 to-primary/5",
                          border: "border-l-4 border-primary",
                        },
                        {
                          title: "Movement & Strength",
                          desc: "Enhancing metabolic flexibility, insulin sensitivity, and sustainable energy balance.",
                          bg: "from-secondary/10 to-secondary/5",
                          border: "border-l-4 border-secondary",
                        },
                        {
                          title: "Circadian Alignment",
                          desc: "Synchronizing nutrition and sleep hygiene with your natural biological rhythms.",
                          bg: "from-primary/10 to-primary/5",
                          border: "border-l-4 border-primary",
                        },
                        {
                          title: "Mind-Body Connection",
                          desc: "Cultivating emotional resilience and nervous system regulation via mindfulness.",
                          bg: "from-secondary/10 to-secondary/5",
                          border: "border-l-4 border-secondary",
                        },
                      ].map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-br ${point.bg} ${point.border} p-5 rounded-lg text-left hover:shadow-md transition-shadow`}
                      >
                        <h4 className="font-semibold text-base mb-2" style={{ color: "#444444" }}>
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                 <p className="text-[16px] text-muted-foreground">
                   This multi-dimensional approach helps clients reverse chronic conditions, rebuild metabolic health, and experience deep, lasting vitality.
                 </p>
              </div>
            </div>
           </motion.div>

           {/* Her Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto max-w-8xl text-center relative rounded-2xl overflow-hidden mb-16"
            >
              <div className="absolute inset-0">
                <BlurImage
                  src={madhaviwork}
                  alt="Wellness Session"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10 py-16 px-6 md:px-12">
                <div className="flex justify-center mb-6">
                  <Briefcase className="text-white" size={48} />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4 text-white" style={{ color: "#ffffff", fontFamily: 'Inter, sans-serif' }}>
                  Her Work: Driving Global Metabolic Health
                </h2>
                <p className="text-white/90 mb-8 text-[18px] max-w-4xl mx-auto">
                  Madhavi’s influence extends across global health education and clinical wellness, bridging the gap between advanced nutritional science and actionable recovery strategies for international communities and organizations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-8 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Media & Health Advocacy",
                      content: "As a vetted Functional Nutritionist, Madhavi is a frequent expert on DD National. Her clinical insights on natural diabetes reversal and metabolic repair are regularly featured in authoritative outlets like The Times of India and The Indian Express.",
                    },
                    {
                      title: "Strategic Corporate Wellness",
                      content: "She serves as a premier corporate health advisor for global giants, including Aditya Birla Group, GRID India, OLX, and HMD. Her executive programs optimize workforce performance through circadian-synced nutrition and biological stress management.",
                    },
                    {
                      title: "International Clinical Partnerships",
                      content: "Madhavi spearheads high-level health initiatives for the Heart Foundation Botswana and Zomato Healthy. Her global projects focus on deploying sustainable lifestyle medicine and functional therapies across diverse international demographics.",
                    },
                    {
                      title: "Digital Health Outreach",
                      content: "Through the Informed Health ecosystem, she delivers evidence-based education on gut-brain health and hormonal regulation. Her digital platform empowers a global community to master metabolic healing through science-backed advocacy.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all"
                    >
                      <h4 className="font-semibold text-secondary text-lg mb-2">{item.title}:</h4>
                      <p className="text-white/90 text-base leading-relaxed">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

           {/* Her Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-6xl text-center"
            >
              <div>
                <div className="flex justify-center mb-6">
                  <MessageSquare className="text-primary" size={48} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>Her Philosophy</h2>
                  <p className="text-muted-foreground mb-8 text-[18px] max-w-4xl mx-auto">
                    True health is an inside-out biological process. By nourishing your system with targeted functional nutrition, circadian rhythm, and mindfulness, you activate the body's natural ability to restore metabolic balance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                    {[
                      {
                        title: "Root-Cause Healing",
                        desc: "Identify and address underlying metabolic imbalances to eliminate chronic symptoms like bloating, adrenal fatigue, and insulin spikes at the source.",
                      },
                      {
                        title: "Body’s Innate Intelligence",
                        desc: "Your physiology is biologically programmed for homeostasis; we curate the optimal environment for natural recovery and peak vitality.",
                      },
                      {
                        title: "Simple & Sustainable Wellness",
                        desc: "Practical, evidence-based protocols designed for modern lifestyles—eliminating restrictive diets, health fads, and unnecessary complexity.",
                      },
                      {
                        title: "Ancient Wisdom Meets Modern Science",
                        desc: "A potent synergy of Traditional Indian Food Wisdom (Ayurvedic principles) and cutting-edge functional nutrition research.",
                      },
                    ].map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-br ${
                          idx % 2 === 0
                            ? "from-primary/10 to-primary/5 border-l-4 border-primary"
                            : "from-secondary/10 to-secondary/5 border-l-4 border-secondary"
                        } p-5 rounded-lg text-left hover:shadow-md transition-shadow`}
                      >
                        <h4 className="font-semibold text-base mb-2" style={{ color: "#444444" }}>
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-primary italic text-muted-foreground max-w-4xl mx-auto text-[18px] font-medium">
                    "When you decode your body’s unique bio-signals, you stop fighting it and start healing it."
                  </blockquote>
                </div>
              </div>
            </motion.div>
         </section>

        {/* Clients Section - Local Logo Assets */}
        <section className="mb-16 py-12 bg-gradient-to-r from-primary/20 via-accent/5 to-primary/20 rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 px-4"
          >
            <h2 className="font-heading font-bold text-4xl mb-4" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>Featured In</h2>
            <p className="text-muted-foreground text-lg">Working with organizations committed to wellness and health</p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "OLX", logo: olxLogo },
                { name: "Zomato", logo: zomatoLogo },
                { name: "Doordarshan", logo: durdarshanLogo },
                { name: "TOI", logo: toiLogo },
                { name: "GRID India", logo: gridIndiaLogo },
                { name: "BlogChatter", logo: blogChatterLogo },
                { name: "Aditya Birla Group", logo: adityaBirlaLogo },
                { name: "HT", logo: htLogo },
                { name: "Happy Moms & Kids", logo: happyMomsLogo },
                { name: "Millennium Post", logo: millenniumLogo },
                { name: "ITC", logo: itcLogo },
                { name: "The Hindu", logo: thehindu },
                { name: "HMD", logo: hmdLogo },
                { name: "Doordarshan Kisan", logo: ddkisanLogo },
                { name: "Heart Foundation Botswana", logo: heartFoundationLogo },
              ].map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{duration: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-28 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-3"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiNmMGYwZjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkxvZ28gTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==";
                    }}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
          >
            <Button asChild size="lg">
              <Link to="/consultation" style={{fontSize: '18px'}}>Kickstart your Health Journey</Link>
              </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
