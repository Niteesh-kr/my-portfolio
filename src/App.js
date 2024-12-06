import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import "./styles.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="App">
            {/* Header Section */}
            <header>
                <div className="logo">
                    <h1>Niteesh Kumar</h1>
                    <p>Software Engineer</p>
                </div>
                <nav className={menuOpen ? "mobile-nav" : ""}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hi, I'm a passionate developer skilled in crafting efficient solutions in Java, HTML, and PowerShell.
                </p>
                <a href="#contact" className="cta">Get in Touch</a>
            </section>

            {/* About Me Section */}
            <section id="about" className="about">
                <h2>About Me</h2>
                <div className="about-details">
                <img 
                   src={`${process.env.PUBLIC_URL}/niteesh.jpg`} alt="Niteesh" className="profile-img" />                                    <div className="about-text">
                        <p>
                            I am a dedicated software developer with a strong background in web and system programming. My passion for
                            technology drives me to continuously learn and explore new skills to solve real-world problems. I enjoy working on innovative projects that challenge me to think outside the box.
                        </p>
                        <div className="education">
                            <h3>Education</h3>
                            <p><strong>BCA - Amity University</strong> (Current)</p>
                            <p><strong>Higher Secondary</strong> - MDI College, Daltonganj, Jharkhand (2021)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skill-list">
                    <div className="skill">
                        <h3>Java</h3>
                        <p>Proficient in object-oriented programming, building robust backend systems.</p>
                    </div>
                    <div className="skill">
                        <h3>HTML</h3>
                        <p>Experienced in creating semantic, accessible, and responsive web pages.</p>
                    </div>
                    <div className="skill">
                        <h3>PowerShell</h3>
                        <p>Expertise in scripting for automation and system management tasks.</p>
                    </div>
                    <div className="skill">
                        <h3>CSS</h3>
                        <p>Skilled in writing clean, modular CSS with advanced techniques like Flexbox and Grid.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>
                        A responsive personal portfolio website showcasing my skills and projects. Built with React and advanced CSS animations.
                    </p>
                </div>
                <div className="project-card">
                    <h3>Task Automation Script</h3>
                    <p>
                        Developed a PowerShell script to automate daily system backups and reduce manual work by 80%.
                    </p>
                </div>
                <div className="project-card">
                    <h3>Weather App</h3>
                    <p>
                        A simple weather application using JavaScript and a third-party API to fetch real-time weather data.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials">
                <h2>What People Say</h2>
                <Swiper spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                        <p>"Niteesh is a talented developer who consistently delivers high-quality work. Highly recommend!"</p>
                        <h4>- John Doe, Manager at XYZ</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>"Working with Niteesh has been an amazing experience. His dedication and skills are unmatched."</p>
                        <h4>- Jane Smith, Team Lead</h4>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Blog Section */}
            <section id="blog" className="blog">
                <h2>Latest Blog Posts</h2>
                <div className="blog-post">
                    <h3>Understanding JavaScript Closures</h3>
                    <p>A beginner-friendly guide to one of the most powerful concepts in JavaScript development.</p>
                    <a href="/blog/closures" className="read-more">Read More</a>
                </div>
                <div className="blog-post">
                    <h3>CSS Grid vs. Flexbox</h3>
                    <p>When to use CSS Grid and when to use Flexbox in modern web development.</p>
                    <a href="/blog/css-grid-vs-flexbox" className="read-more">Read More</a>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <h2>Experience</h2>
                <div className="experience-item">
                    <h3>Software Developer Intern</h3>
                    <p>XYZ Company | Jan 2023 - June 2023</p>
                    <ul>
                        <li>Developed a dashboard for tracking KPIs, increasing team efficiency by 25%.</li>
                        <li>Collaborated with a team of 5 developers on a full-stack web application.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h3>Freelance Developer</h3>
                    <p>Self-Employed | July 2023 - Present</p>
                    <ul>
                        <li>Created dynamic websites for small businesses using modern frameworks like React and TailwindCSS.</li>
                        <li>Automated processes for clients using PowerShell scripts.</li>
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>If you'd like to connect or learn more about my work, feel free to reach out!</p>
                <ul>
                    <li>Email: <a href="mailto:niteeshkr70@gmail.com">niteeshkr70@gmail.com</a></li>
                    <li>Phone: <a href="tel:+917004635791">+91 7004635791</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/niteesh-kumar-852b6627a" target="_blank" rel="noopener noreferrer">Niteesh Kumar</a></li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
