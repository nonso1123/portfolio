// import styles from "./App.module.css";
// import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Project/Projects";

function App() {
	return (
		<div className="bg-[#04152d] w-full h-full overflow-hidden">
			<Navbar />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
