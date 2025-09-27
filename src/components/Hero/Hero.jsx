import React from "react";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Hero = () => {
	return (
		<section
			id="home"
			className=" container mx-auto pt-30 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center "
		>
			<div className="w-full md:w-1/2 space-y-8 ">
				<motion.h1
					variants={textVariant(0.3)}
					initial="hidden"
					whileInView="show"
					className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-400"
				>
					Hi, I'm{" "}
					<span className="text-blue-600 relative inline-block">
						Chinonso Nwora
					</span>
				</motion.h1>
				<motion.p
					variants={fadeIn("up", 0.4)}
					initial="hidden"
					whileInView="show"
					className="text-gray-200 text-lg md:text-xl max-w-xl"
				>
					I'm a full-stack developer with a passion for using React and NodeJS
					to build scalable real-world, problem solving web applications. Reach
					out if you'd like to learn more!
				</motion.p>
			</div>
			<motion.div
				variants={fadeIn("left", 0.5)}
				initial="hidden"
				whileInView="show"
				className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
			>
				<div className="relative flex justify-center">
					<motion.img
						src={"hero/nonso.png"}
						alt="hero image"
						animate={{
							y: [-60, 60, -60],
						}}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: "linear",
						}}
						className=" relative z-10 hover:scale-[1.02] transition-transform duration-300 rounded-full blue-gradient md:h-[400px] md:w-[400px] h-[300px] w-[300px]"
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
