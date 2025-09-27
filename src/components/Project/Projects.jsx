import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

// const testimonials = [
// 	{
// 		id: 1,
// 		name: "Robin Ayala Doe",
// 		image: "https://randomuser.me/api/portraits/men/77.jpg",
// 		text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
// 	},
// 	{
// 		id: 2,
// 		name: "John De marli",
// 		image: "https://randomuser.me/api/portraits/women/90.jpg",
// 		text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
// 	},
// 	{
// 		id: 3,
// 		name: "Rowhan Smith",
// 		image: "https://randomuser.me/api/portraits/men/90.jpg",
// 		text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
// 	},
// 	{
// 		id: 4,
// 		name: "Sarah Johnson",
// 		image: "https://randomuser.me/api/portraits/women/45.jpg",
// 		text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
// 	},
// 	{
// 		id: 5,
// 		name: "Michael Chen",
// 		image: "https://randomuser.me/api/portraits/men/32.jpg",
// 		text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
// 	},
// 	{
// 		id: 6,
// 		name: "Emma Wilson",
// 		image: "https://randomuser.me/api/portraits/women/28.jpg",
// 		text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
// 	},
// ];
const Projects = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="show"
			className="py-6 px-4 max-w-7xl mx-auto"
			id="projects"
		>
			<motion.div variants={fadeIn("up", 0.3)} className="text-center mb-6">
				<motion.h2
					variants={textVariant(0.2)}
					className="text-3xl font-bold md:text-4xl mb-2 text-gray-200"
				>
					Projects
				</motion.h2>
			</motion.div>
			<motion.div variants={fadeIn("up", 0.5)} className="relative">
				<ProjectCard projects={projects} />
				<motion.div
					variants={fadeIn("up", 0.7)}
					className="flex justify-center gap-4 md:mt-8 mt-4"
				>
					<motion.button
						variants={fadeIn("right", 0.8)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-12 h-12 rounded-full border  border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer swiper-button-prev-custom"
					>
						<BsChevronLeft className="size-6 text-white" />
					</motion.button>
					<motion.button
						variants={fadeIn("right", 0.8)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="w-12 h-12 rounded-full border  border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer swiper-button-next-custom"
					>
						<BsChevronRight className="size-6 text-white" />
					</motion.button>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Projects;
