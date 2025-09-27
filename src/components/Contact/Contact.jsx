import React from "react";
import { FaFacebook, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { image } from "framer-motion/client";
import email from "../../../public/contact/emailIcon.png";
import github from "../../../public/contact/githubIcon.png";
import linkedin from "../../../public/contact/linkedinIcon.png";
import whatsapp from "../../../public/contact/whatsappIcon.png";

const Footer = () => {
	const links = [
		{ name: "Email", href: "mailto:chinonsonwora@gmail.com", image: email },
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/chinonso-nwora",
			image: linkedin,
		},
		{ name: "GitHub", href: "https://github.com/nonso1123", image: github },
		{ name: "Whatsapp", href: "https://wa.me/2349040120400", image: whatsapp },
	];
	return (
		<motion.footer
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView="show"
			className="bg-[#020c1a] "
			id="contact"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-12 py-8 flex justify-center">
				<motion.div variants={fadeIn("up", 0.3)} className="">
					<div className="text-white text-center">
						<h1
							variants={textVariant(0.3)}
							className="text-3xl font-bold md:text-4xl mb-2 text-gray-200"
						>
							Contact Me
						</h1>
						<motion.p
							variants={fadeIn("up", 0.4)}
							className="my-4 md:my-8 md:text-lg"
						>
							Feel free to reach out!
						</motion.p>
					</div>
					<motion.ul
						variants={fadeIn("up", 0.5)}
						className="space-y-3 flex gap-8 justify-center"
					>
						{links.map((link, index) => (
							<motion.a
								key={index}
								variants={fadeIn("up", 0.1 * (index + 1))}
								className="cursor-pointer flex flex-col items-center justify-center"
								href={link.href}
							>
								<img src={link.image} alt="" />
								<motion.p whileHover={{ x: 5 }} className="text-gray-400">
									{link.name}
								</motion.p>
							</motion.a>
						))}
					</motion.ul>
					<motion.div
						variants={fadeIn("up", 0.6)}
						className="text-center font-semibold text-gray-400 mt-8 md:mt-12"
					>
						<motion.p variants={fadeIn("right", 0.7)}>
							Copyright © {new Date().getFullYear()}{" "}
						</motion.p>
					</motion.div>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
