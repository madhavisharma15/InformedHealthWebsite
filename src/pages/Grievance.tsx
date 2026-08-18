import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const Grievance = () => {
  const { toast } = useToast();
  const [termsOpen, setTermsOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingRef: "",
    feedbackType: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms & Conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResultMsg("Please wait...");

    const formPayload = {
      ...formData,
      subject: `Grievance: ${formData.feedbackType}`,
      access_key: "b215e59e-9f2d-4ecd-b218-505979235808",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const json = await response.json();

      if (response.ok) {
        toast({
          title: "Submission Received",
          description:
            "Your feedback has been formally logged. You will receive acknowledgment within 24 hours.",
        });
        setResultMsg("Feedback Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          bookingRef: "",
          feedbackType: "",
          description: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: json.message || "Something went wrong!",
          variant: "destructive",
        });
        setResultMsg(json.message);
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please try again later.",
        variant: "destructive",
      });
      setResultMsg("Something went wrong!");
    }

    setLoading(false);

    setTimeout(() => {
      setResultMsg("");
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-8 tracking-tight">Client Resolution & Feedback Portal</h1>

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground">
                At Informed Health, we are committed to clinical excellence and professional integrity. If you have concerns regarding your program or service experience, please submit them through this formal channel. We prioritize professional accountability and will investigate and respond within 48 business hours.
              </p>

              <h2 className="font-heading font-bold text-xl mt-6 mb-3">When to Use This Portal</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Service & Clinical Quality:</strong> Feedback regarding the delivery of your functional nutrition protocols or workshop content.</li>
                <li><strong>Administrative Discrepancies:</strong> Issues related to scheduling, session credits, or billing records.</li>
                <li><strong>Operational Concerns:</strong> Technical difficulties with digital products or access to resources.</li>
                <li><strong>Privacy & Data Integrity:</strong> Any concerns regarding the confidentiality of your health markers or personal data.</li>
                <li><strong>Professional Conduct:</strong> Matters related to the mutual code of respect and transparency outlined in our refund policy.</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 88265 04708"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="bookingRef">Program Reference (if applicable)</Label>
                  <Input
                    id="bookingRef"
                    value={formData.bookingRef}
                    onChange={(e) => setFormData({ ...formData, bookingRef: e.target.value })}
                    placeholder="e.g., PKG12345"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="feedbackType">Category of Feedback *</Label>
                <Input
                  id="feedbackType"
                  value={formData.feedbackType}
                  onChange={(e) => setFormData({ ...formData, feedbackType: e.target.value })}
                  placeholder="e.g., Service Quality, Administrative Discrepancy"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please provide a detailed account of your concern, including dates, times, and relevant documentation..."
                  rows={8}
                  required
                />
              </div>

              <div className="flex items-center space-x-2 p-4 border border-muted rounded-lg">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setTermsOpen(true)}
                    className="underline text-primary hover:text-primary/80"
                  >
                    Terms & Conditions
                  </button>
                  *
                </label>
              </div>

              {resultMsg && (
                <div className="text-sm font-medium text-center text-primary">
                  {resultMsg}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={!agreedToTerms || loading}>
                {loading ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </Card>

          <Card className="p-6 bg-muted">
            <h3 className="font-heading font-bold text-lg mb-4">Our Resolution Protocol</h3>
            <p className="text-sm text-muted-foreground mb-4">To ensure a fair and evidence-based review of your feedback, we follow a specialized 4-Step Protocol:</p>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-bold block">Acknowledge & Record</span>
                  <span>Your submission will be formally acknowledged and logged into our system within 24 hours.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-bold block">Clinical & Administrative Review</span>
                  <span>We will conduct a thorough internal investigation, reviewing all session logs, communication history, and program compliance records.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-bold block">Formal Determination</span>
                  <span>You will receive a detailed written response outlining our findings and position within 48 business hours.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-bold block">Strategic Resolution</span>
                  <span>If the matter requires further dialogue, a brief, structured call will be scheduled to finalize the resolution in alignment with our Terms and Conditions.</span>
                </div>
              </li>
            </ol>
          </Card>
        </motion.div>
      </div>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto max-w-2xl">
          <DialogHeader>
            <DialogTitle>Terms & Conditions & Informed Consent</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="text-xs italic mb-6">Last Updated: March 1, 2026</p>
            
            <p className="mb-6">By enrolling in any program or booking a consultationation with Informed Health, you agree to the following legally binding terms:</p>

            <h3 className="font-bold text-lg mt-6 mb-3">1. Scope of Service & Medical Liability</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Not a Substitute for Medical Care:</strong> I acknowledge that the information provided by Informed Health during the nutrition program is not a substitute for professional medical advice, diagnosis, or treatment.</li>
              <li><strong>Prescription Adherence:</strong> You are advised to continue with your prescriptions as provided by your healthcare practitioner at all times.</li>
              <li><strong>Mandatory Consultation:</strong> You are required to remain in consultationation with your doctor or primary healthcare provider throughout the program.</li>
              <li><strong>Voluntary Enrollment:</strong> I acknowledge that I have enrolled in the nutrition program at my own will, and I have not been coerced or forced to join.</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">2. Time-Bound Program & Forfeiture</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Programme Timeline:</strong> I understand that the nutrition program is a time-bound, we offer 12 weeks or 14-week program.</li>
              <li><strong>No Extensions:</strong> I agree to adhere to the designated timeline and acknowledge that sessions will not be extended beyond the specified period.</li>
              <li><strong>Rescheduling:</strong> In the event of a missed session, Informed Health reserves the right to reschedule at its sole discretion.</li>
              <li><strong>No Reminders:</strong> No joining reminders will be sent at the time of your session; it is your responsibility to be present.</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">3. Professional Conduct & Program Termination</h3>
            <p className="mb-3">Informed Health reserves the right to terminate any program immediately, without a refund, in the event of:</p>
            <ul className="space-y-2 mb-6">
              <li><strong>Behavioral Issues:</strong> Display of poor attitude, lack of respect, or resorting to baseless allegations and blame.</li>
              <li><strong>Non-Compliance:</strong> Repeated failure to provide food and activity journals as requested throughout the time period signed up for.</li>
              <li><strong>Guideline Violations:</strong> Failure to abide by the clinical guidelines and protocols provided.</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">4. Strict No-Refund & Non-Transfer Policy</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Non-Refundable Fee:</strong> I acknowledge that the fee paid for the nutrition program is non-refundable and non-transferable.</li>
              <li><strong>Final Sale:</strong> Once payment is made, it cannot be refunded or transferred to another individual or program.</li>
              <li><strong>No Partial Refunds:</strong> No refunds will be issued for "change of mind" or partial program completion.</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">5. Confidentiality & Media Consent</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Data Privacy:</strong> All information shared during sessions will be kept confidential and not disclosed to third parties without explicit consent, except as required by law.</li>
              <li><strong>Photography & Testimonials:</strong> I grant permission to Informed Health to use photographs taken during the program and any provided testimonials for promotional purposes (website, social media, and marketing).</li>
            </ul>

            <h3 className="font-bold text-lg mb-3">Final Confirmation</h3>
            <p>I have read this consent form thoroughly and understand its contents. By proceeding with payment or signing below, I agree to comply with the terms outlined above.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Grievance;
