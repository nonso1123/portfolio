import React from "react";
import css from "../../../public/skills/css.png";
import html from "../../../public/skills/html.png";
import react from "../../../public/skills/react.png";
import node from "../../../public/skills/node.png";
import prisma from "../../../public/skills/Prisma.png";
import mongodb from "../../../public/skills/mongodb.png";
import github from "../../../public/skills/Github.png";
import express from "../../../public/skills/Express.png";
import tailwind from "../../../public/skills/Tailwind.png";
import nextjs from "../../../public/skills/Nextjs.png";

const Skills = () => {
	const logos = [
		css,
		html,
		react,
		node,
		prisma,
		mongodb,
		github,
		express,
		tailwind,
		nextjs,
	];
	return (
		<div
			className="w-full container mx-auto py-10 overflow-hidden flex flex-col sm:flex-row items-center gap-8"
			id="skills"
		>
			<div className="w-[200px] shrink-0 px-5 text-blue-100 border-l-4 border-blue-500  py-2 z-10 text-base md:text-2xl font-semibold text-center bg-[#304974]">
				Skills
			</div>
			<div className=" whitespace-nowrap animate-marquee flex ">
				{logos.map((logo, index) => (
					<img
						key={index}
						src={logo}
						alt="company logo"
						className="mx-12 h-8 object-contain w-36"
					/>
				))}
				{logos.map((logo, index) => (
					<img
						key={`duplicate-${index}`}
						src={logo}
						alt="company logo"
						className="mx-12 h-8 object-contain w-36"
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
