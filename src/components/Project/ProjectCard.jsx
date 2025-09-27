import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import projects from "../../data/projects.json";

const ProjectCard = ({ projects }) => {
	return (
		<div>
			<Swiper
				navigation={{
					nextEl: ".swiper-button-next-custom",
					prevEl: ".swiper-button-prev-custom",
				}}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				modules={[Navigation]}
				className="testimonials-swiper md:mb-8"
			>
				{projects.map((project, index) => (
					<SwiperSlide key={index} className="h-full md:py-6 py-2 ">
						<motion.div
							variants={fadeIn("up", 0.3 * (index + 1))}
							className="text-center blue-bg p-4 rounded-lg shadow-md h-full flex flex-col"
						>
							<motion.h3
								variants={textVariant(0.3)}
								className="text-xl font-semibold mb-3 text-[#170027]"
							>
								{project.title}
							</motion.h3>
							<motion.p
								variants={fadeIn("up", 0.6 * (index + 1))}
								className="text-gray-200"
							>
								{project.description}
							</motion.p>
							<motion.ul
								className="w-full flex flex-wrap justify-center list-none gap-2 mt-4"
								variants={fadeIn("up", 0.7 * (index + 1))}
							>
								{project.tools.map((tool, index) => {
									return (
										<li
											key={index}
											className="bg-gray-400  rounded-4xl py-1 px-3 font-medium"
										>
											{tool}
										</li>
									);
								})}
							</motion.ul>
							<motion.div
								className="w-full mt-4 flex gap-2 justify-center"
								variants={fadeIn("up", 0.8 * (index + 1))}
							>
								<a
									href={project.demo}
									className="bg-blue-400 rounded-4xl py-1 px-3 font-medium text-white"
								>
									Live Demo
								</a>
								<a
									href={project.source}
									className="bg-blue-400 rounded-4xl py-1 px-3 font-medium text-white"
								>
									Source Code
								</a>
							</motion.div>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProjectCard;
