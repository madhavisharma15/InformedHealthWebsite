import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const realTestimonials = [
	{
		id: 1,
		content:
			"Madhvi ji came highly recommended and I can say she has delivered for me. So the five stars for her. Despite my crazy travel schedule, she taught me / motivated me / guided me and explained to me the basics of food selection and food planning. Her teachings will stay with me forever. She is not a dietician. Her philosophy is simple - healthy eating & healthy habits leads to great life. Thank you Madhvi ji.",
		rating: 5,
		name: "Shailesh Jain",
		date: "a month ago",
	},
	{
		id: 2,
		content:
			"I followed Madhavi Ji's 3 month diet plan which helped me in controlling my diabetes very well and I also lost weight. Her plans are flexible and provide ample options to choose from and fit into family routine. Thank You for your personal guidance of making me feel good about my health and lifestyle.",
		rating: 5,
		name: "Suman Saboo",
		date: "3 months ago",
	},
	{
		id: 3,
		content:
			"I'm super happy that I was able to connect with Madhavi Mam. She really is an amazing person who genuinely cares and her guidance regarding my diet was super helpful. I truly wish her all the best in everything she does!",
		rating: 5,
		name: "Veni U",
		date: "2 months ago",
	},
	{
		id: 4,
		content:
			"I cannot recommend Dr. Madhavi enough. She's not just a nutritionist; she's a life changer. Her approach to gut health and overall wellness is incredibly thorough and effective. She takes time to understand your specific health concerns...",
		rating: 5,
		name: "Sonal Srivastava",
		date: "2 months ago",
	},
	{
		id: 5,
		content:
			"Dr Madhavi is a fantastic functional nutritionist. She provides evidence based lifestyle and nutrition guidance. She is extremely knowledgeable, patient and supportive throughout the healing journey...",
		rating: 5,
		name: "Shruti Sharma",
		date: "a year ago",
	},
	{
		id: 6,
		content:
			"Dr Madhavi helped me a lot with my gut issues. She is very knowledgeable and understood my concerns very well. She explained me the root cause of my problems and how to address them...",
		rating: 5,
		name: "Meenakshi Negi",
		date: "2 months ago",
	},
];

const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((word) => word[0])
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
	const index = name.length % colors.length;
	return colors[index];
};

const Avatar = ({ name }: { name: string }) => {
	const initials = getInitials(name);
	const bgColor = getRandomColor(name);

	return (
		<div
			className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor} text-white font-semibold text-lg`}
		>
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
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full relative"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
						>
							<X size={20} />
						</button>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const Testimonials = () => {
	const [selectedTestimonial, setSelectedTestimonial] =
		useState<typeof realTestimonials[0] | null>(null);

	// Ensure page opens at top when this route mounts
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, []);

	const truncateText = (text: string, maxLength: number = 150) => {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength) + "...";
	};

	return (
		<div className="min-h-screen py-8">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-8"
				>
					<h1
						style={{ fontFamily: 'Inter, sans-serif', fontWeight: "bold", color: "#444444" }}
						className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight"
					>
						Client Testimonials
					</h1>
					<p className="text-xl text-muted-foreground max-w-4xl mx-auto">
						Real stories from Real people who transformed their Health through
						Functional Nutrition
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{realTestimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="p-6 h-full hover:shadow-xl transition-shadow">
								{/* Rating */}
								<div className="flex mb-4">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<Star
											key={i}
											size={18}
											className="fill-primary text-primary"
										/>
									))}
								</div>

								{/* Content */}
								<p className="text-muted-foreground mb-2 italic">
									"{truncateText(testimonial.content)}"
									{testimonial.content.length > 150 && (
										<button
											onClick={() => setSelectedTestimonial(testimonial)}
											className="text-primary hover:underline ml-1 not-italic cursor-pointer"
										>
											Read more
										</button>
									)}
								</p>

								{/* Date */}
								<p className="text-sm text-muted-foreground mb-6">
									{testimonial.date}
								</p>

								{/* Author */}
								<div className="flex items-center pt-6 border-t">
									<Avatar name={testimonial.name} />
									<div className="ml-4">
										<p className="font-semibold">{testimonial.name}</p>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Modal for full review */}
				<Modal
					isOpen={!!selectedTestimonial}
					onClose={() => setSelectedTestimonial(null)}
				>
					{selectedTestimonial && (
						<div className="space-y-4">
							<div className="flex items-center gap-4 mb-6">
								<Avatar name={selectedTestimonial.name} />
								<div>
									<h3 className="font-semibold text-lg">
										{selectedTestimonial.name}
									</h3>
									<p className="text-sm text-muted-foreground">
										{selectedTestimonial.date}
									</p>
								</div>
							</div>
							<div className="flex mb-4">
								{Array.from({ length: selectedTestimonial.rating }).map(
									(_, i) => (
										<Star
											key={i}
											size={18}
											className="fill-primary text-primary"
										/>
									)
								)}
							</div>
							<p className="text-lg italic text-muted-foreground">
								"{selectedTestimonial.content}"
							</p>
						</div>
					)}
				</Modal>

				{/* Read More Reviews Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex justify-center mb-16"
				>
					<a
						href="https://www.google.com/maps/place/Informed+Health/@28.537549,77.246406,17z/data=!4m18!1m9!3m8!1s0x390ce3a43a325245:0x11ca783ce946bc7a!2sInformed+Health!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b!3m7!1s0x390ce3a43a325245:0x11ca783ce946bc7a!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						<div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 shadow hover:scale-105 hover:shadow-lg transition-all border border-secondary/20">
							<span className="font-heading font-semibold text-lg text-secondary">
								More 5 Star Reviews on Google
							</span>
							<svg
								className="w-6 h-6 text-secondary group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</div>
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="my-20"
					>
					<div className="text-center mb-12">
						<h2 className="fontFamily: 'Inter, sans-serif' text-4xl md:text-5xl text-[#444444] mb-4" style={{fontWeight: "bold"}}>
						Watch Their Transformation Stories
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Real clients sharing how functional nutrition changed their health and life
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
						{[
						{
							id: "O3vD0fP9AQ0?si=d9DSOOZbKT8iHT8K",
							name: "Gunasekran",
						},
						{
							id: "cL9HspTQe2k?si=y6rqgTdORe5dogzk",
							name: "Chaaya",
						},
						{
							id: "MlaZHopHOl8?si=vSbrGRVR0dLW-GVb",
							name: "Dhananjay",
						},
						{
							id: "zDude14s-NQ?si=fC-2AFoVDJYrxD2K",
							name: "She Reversed her Diabetes",
						},
						{
							id: "V061YKewouE?si=CFpp-rJjf2fAW4GE",
							name: "Bani Biswas",
						},
						{
							id: "KFRHW56BVgo?si=Sv6_nwtZ_uJzXpsK",
							name: "Client Reversed her Diabetes"
						},
						].map((video, index) => (
						<motion.div
							key={video.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2, duration: 0.6 }}
							className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
						>
							<div className="aspect-video relative bg-black">
							<iframe
								className="w-full h-full rounded-2xl scale-100 group-hover:scale-[1.03] transition-transform duration-500"
								src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=0`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
							></iframe>

							{/* Gradient Overlay + Play Icon on Hover */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
								<p className="text-sm opacity-90">— {video.name}</p>
								</div>
							</div>
							</div>
						</motion.div>
						))}
					</div>

					<div className="text-center mt-10">
						<a
						href="https://www.youtube.com/@informedhealth"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-xl font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all"
						>
						Watch more success stories on YouTube
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
						</a>
					</div>
					</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-12 text-center"
				>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div>
							<p className="font-heading font-bold text-5xl mb-2">7500+</p>
							<p className="opacity-90">Happy Clients</p>
						</div>
						<div>
							<p className="font-heading font-bold text-5xl mb-2">20+</p>
							<p className="opacity-90">Years Experience</p>
						</div>
						<div>
							<p className="font-heading font-bold text-5xl mb-2">5/5</p>
							<p className="opacity-90">Star Rating</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
