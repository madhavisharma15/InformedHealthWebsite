import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { workshops } from "@/data/mockData";
import { Calendar, Clock, Users, IndianRupee, Award, Globe, Zap, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import wellness from '@/assets/welcome.jpg';

const Workshops = () => {
  const { toast } = useToast();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen py-8 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#444444', fontWeight: "bold" }} className="font-heading font-semibold text-[28px] sm:text-[36px] md:text-[50px] mb-2 tracking-tight">Upcoming Workshops</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our Interactive Workshops to deepen your Understanding of
            Functional Nutrition and Practical Wellness Strategies
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {workshops.map((workshop, index) => {
            const spotsLeft = workshop.capacity - workshop.enrolled;
            const isAlmostFull = spotsLeft <= 5;

            // Date Calculation Logic
            const eventDate = new Date(workshop.dateTime);
            const diffMs = eventDate.getTime() - now.getTime();
            
            const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
            const diffHours = Math.max(0, Math.floor((diffMs / (1000 * 60 * 60)) % 24));
            const diffMinutes = Math.max(0, Math.floor((diffMs / (1000 * 60)) % 60));
            const diffSeconds = Math.max(0, Math.floor((diffMs / 1000) % 60));
            const isPast = diffMs < 0;

            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Card className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-video relative overflow-hidden w-full">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {isAlmostFull && spotsLeft > 0 && (
                      <Badge className="absolute top-4 right-4 bg-secondary">
                        Only {spotsLeft} spots left!
                      </Badge>
                    )}
                  </div>

                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-base md:text-lg mb-2">{workshop.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 flex-1">{workshop.description}</p>

                    <div className="space-y-1 mb-4">
                      <div className="flex items-center flex-wrap text-xs md:text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-2 text-primary flex-shrink-0" />
                        <span>{eventDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        {!isPast && (
                          <span className="ml-2 text-xs text-primary font-semibold">
                            ({diffDays}d {diffHours}h {diffMinutes}m {diffSeconds}s left)
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <Clock size={14} className="mr-2 text-primary flex-shrink-0" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <Users size={14} className="mr-2 text-primary flex-shrink-0" />
                        <span>{workshop.enrolled} / {workshop.capacity} enrolled</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t gap-2">
                      <div className="flex items-center">
                        <IndianRupee size={16} className="text-primary flex-shrink-0" />
                        <span className="font-heading font-bold text-lg md:text-xl">{workshop.price}</span>
                      </div>
                      <Button 
                        asChild
                        disabled={spotsLeft === 0 || isPast}
                        size="sm"
                        className="whitespace-nowrap"
                      >
                        {spotsLeft === 0 ? (
                          <span>Sold Out</span>
                        ) : isPast ? (
                          <span>Completed</span>
                        ) : (
                          <a href="https://nutrition.informedhealth.in/defeat-diabetes-naturally" target="_blank" rel="noopener noreferrer">
                            Register Now
                          </a>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 py-10 mt-8">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden"
          >
            <div className="relative">
              <img
                src={wellness}
                alt="Corporate Wellness"
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/10 rounded-t-2xl" />
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-b-2xl">
              <div className="text-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl mb-4 text-secondary">
                Wellness & Corporate Workshops: Fueling Organizational Performance
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-bold mb-2">
                Transform Employee Health into Your Competitive Advantage
              </p>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                In a high-pressure corporate world, your team's vitality is your greatest asset. Madhavi Sharma brings over 20 years of international expertise as a Functional Nutritionist to help global organizations move beyond "perk-based" wellness into science-backed performance. Having empowered teams at OLX, Aditya Birla Group, Grid India and more, Madhavi delivers dynamic, high-impact sessions that eliminate the "invisible" costs of burnout, brain fog, and declining productivity.
              </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-5xl mx-auto mb-8 rounded-2xl border border-primary/20 bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8"
              >
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold text-center mb-2">
                  Corporate Wellness
                </p>
                <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-center mb-5">
                  Signature Speaking Topics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {[
                    "Beyond the Fad: Building a Foundation of Science-Backed Lifestyle Medicine.",
                    "The Circadian Edge: Aligning Biological Rhythms for Peak Professional Performance.",
                    "The Intuitive Gut: How Microbiome Health Dictates Leadership Clarity.",
                    "The Psychology of Performance: Conscious Eating for Sustained Energy & Focus.",
                    "Neuro-Metabolic Resilience: Rewiring Stress Responses & Emotional Eating Patterns.",
                    "The Sleep Advantage: Optimizing the Most Underrated Pillar of Corporate Health."
                  ].map((topic, idx) => {
                    const [title, ...rest] = topic.split(":");
                    const body = rest.join(":").trim();

                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/10 p-4 text-sm md:text-base text-foreground leading-relaxed"
                      >
                        <span className="font-semibold">{title}{rest.length ? ":" : ""}</span>
                        {body ? ` ${body}` : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="text-center">
                  <Button asChild size="lg" className="w-full sm:w-auto text-white font-semibold shadow-md hover:scale-105 transition-transform">
                    <Link to="/contact">Invite Madhavi Sharma to Empower Your Team</Link>
                  </Button>
                </div>
              </motion.div>

                <div className="mt-8 mb-8">
                <h3 className="font-heading font-bold text-2xl mb-6 text-center">Why HR Leaders Partner With Us:</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                    <Award size={24} className="text-primary" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg mb-2">Proven Authority</h4>
                    <p className="text-sm text-muted-foreground">Targeted strategies rooted in the 5 Pillars of Health and Functional Medicine.</p>
                    </div>
                  </div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                    <Globe size={24} className="text-primary" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg mb-2">Global Track Record</h4>
                    <p className="text-sm text-muted-foreground">Trusted by industry giants to inspire and retain high-performing talent.</p>
                    </div>
                  </div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                    <Zap size={24} className="text-primary" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg mb-2">Actionable Biohacks</h4>
                    <p className="text-sm text-muted-foreground">Employees learn tools to optimize energy, focus, and stress resilience.</p>
                    </div>
                  </div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-lg p-3 flex-shrink-0">
                    <TrendingUp size={24} className="text-primary" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg mb-2">Measurable Results</h4>
                    <p className="text-sm text-muted-foreground">Designed to reduce health-related absenteeism and boost productivity.</p>
                    </div>
                  </div>
                  </motion.div>
                </div>
                </div>

              <div className="text-center">
              <Button
                asChild
                size="lg"
                className="text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                {/* <a href="/contact#/contact">
                Enquire for Corporate Wellness
                </a> */}
                <Link to="/contact">
                  Enquire for Corporate Wellness
                </Link>
              </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 mt-8"
        >
          <h2 className="font-heading font-bold text-2xl mb-4 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Immersive Interactive Learning</h3>
          <p className="text-sm text-muted-foreground">
            Move beyond passive listening with hands-on biohacking and real-time health audits.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Behavioral Architecture</h3>
          <p className="text-sm text-muted-foreground">
            Learn the psychology of "habit stacking" to seamlessly integrate wellness into a demanding workday.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Direct Expert Access (Live Q&A)</h3>
          <p className="text-sm text-muted-foreground">
            Get answers to individual health barriers through direct clinical insights in a group setting.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Actionable "Desk-Side" Biohacks</h3>
          <p className="text-sm text-muted-foreground">
            Stop the slump with immediate, science-backed interventions that work right from the office chair.
          </p>
        </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workshops;