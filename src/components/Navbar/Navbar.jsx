import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOPen] = useState(false);
	const [activeLink, setActiveLink] = useState("");

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];
	return (
		<motion.nav
			variants={fadeIn("down", 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="w-full fixed top-0 left-0 blue-gradient backdrop-blur-sm z-50 border-b border-gray-500 shadow-sm text-white"
		>
			<div className=" container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
				<div className="flex items-center gap-1 cursor-pointer text-xl">
					Portfolio
				</div>
				<button
					onClick={() => setIsMenuOPen(!isMenuOpen)}
					className="md:hidden p-2 cursor-pointer"
				>
					{isMenuOpen ? (
						<HiX className="size-6" />
					) : (
						<HiMenu className="size-6" />
					)}
				</button>
				<div className="hidden md:flex items-center gap-10">
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							onClick={() => setActiveLink(link.href)}
							className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
								activeLink === link.href
									? "text-blue-600 after:w-full"
									: "text-white hover:text-gray-300"
							}`}
						>
							{link.label}
						</a>
					))}
				</div>
				<button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-sm hover:shadow-blue-300">
					<a href="https://wa.me/2349040120400">Get in touch</a>
				</button>
			</div>
			{isMenuOpen && (
				<div className="md:hidden blue-bg border-t border-gray-100 py-4">
					<div className="container mx-auto px-4">
						{navLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								onClick={() => setActiveLink(link.href)}
								className={`block text-sm font-medium py-2 cursor-pointer ${
									activeLink === link.href
										? "text-blue-500"
										: "text-gray-200 hover:text-gray-300"
								}`}
							>
								{link.label}
							</a>
						))}
						<button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
							<a href="https://wa.me/2349040120400">Get in touch</a>
						</button>
					</div>
				</div>
			)}
		</motion.nav>
	);
};

export default Navbar;
