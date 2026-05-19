import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-6 tracking-tight">Refund Policy</h1>
          
          <Card className="p-8 mb-6 border-l-4 border-red-500 bg-red-50">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading font-bold text-lg text-red-900 mb-2">Strict No-Refund Policy</h2>
                <p className="text-red-800">
                  At Informed Health, we are committed to providing high-value, clinically-driven programs. To maintain the integrity of our scheduling and resources, we follow a Strict No-Refund Policy.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">1. Consultation Consult</h2>
              <p className="text-muted-foreground mb-4">
                All fees paid for consultationations, workshops, and program packages are non-refundable and non-transferable.
              </p>
              <p className="text-muted-foreground mb-6 italic">
                <strong>Commitment:</strong> By enrolling in a program or booking a session, you acknowledge that the fee is a commitment to your health journey and cannot be reclaimed.
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">2. Program Packages & Consultation</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Once a program has commenced or a consultationation is booked, no refunds will be issued for "change of mind" or partial completion.</li>
                <li>Sessions must be utilized within the stipulated program duration (e.g., 12–14 weeks); unused sessions will not be refunded or carried forward.</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">3. Professional Conduct & Compliance</h2>
              <p className="text-muted-foreground mb-4">
                A successful transformation is built on mutual respect, trust, and transparency. Informed Health reserves the right to terminate any program immediately, without a refund, in the following instances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Behavioral Issues:</strong> Display of poor attitude, lack of respect, or resorting to baseless allegations and blame.</li>
                <li><strong>Non-Compliance:</strong> Repeated failure to provide food and activity journals or providing intentionally inaccurate information.</li>
                <li><strong>Guideline Violations:</strong> Failure to abide by the clinical guidelines and protocols signed up for.</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">4. Corporate Workshop Registrations</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Registration fees for corporate or public workshops are final.</li>
                <li>In the event of a participant's absence (no-show), the fee remains non-refundable.</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">5. Digital Products</h2>
              <p className="text-muted-foreground">
                All sales of digital goods, including e-books, meal plans, and guidebooks, are final once access is granted or the file is downloaded.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
