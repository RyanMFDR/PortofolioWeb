import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Briefcase,
  User,
  Star,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { projectsData } from "./data/projects";
import { skillsData } from "./data/skills";
import { achievementsData } from "./data/achievements";
import { workExperienceData, organizationData } from "./data/Experience";
import fotoDiri from "./assets/fotodiri.JPG";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-[#1A1A40]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-[#1A1A40]">
              RyanMFDR
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Achievement",
                "Connect",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-gray-600 transition-colors duration-300 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="block text-[#1A1A40]">HI</span>
                <span className="block bg-gradient-to-r from-[#1A1A40] via-gray-700 to-gray-700 bg-clip-text text-transparent">
                  I'M RYAN
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Data Scientist & Full Stack Developer
              </p>
              <p className="text-lg text-gray-500 max-w-lg">
                Passionate About AI & People Development, Undergraduate
                Informatics Engineering Student
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("connect")}
                className="px-8 py-3 border-2 border-gray-800 text-[#1A1A40] rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-[#1A1A40] to-blue-950 rounded-full shadow-2xl"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-inner">
                <img
                  src={fotoDiri}
                  alt="Ryan Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-t from-[#1A1A40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-gradient-to-t from-gray-100 to-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Get To Know Me!
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                A proactive Informatics Engineering student with a strong
                interest in Data Science, Full Stack, and Human Resource
                Development Intelligence. Experienced in organizational
                leadership, actively contributing to both academic competitions
                and student organizations. Passionate about integrating
                technology with people development to create innovative
                solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-600" size={20} />
                  <span className="text-gray-700">
                    Malang, East Java, Indonesia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-600" size={20} />
                  <span className="text-gray-700">ryanmfdr@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-800">12+</div>
                <div className="text-gray-500">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-800">3+</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-800">5+</div>
                <div className="text-gray-500">Competition</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-800">80+</div>
                <div className="text-gray-500">Work Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <Briefcase className="mr-3 text-gray-600" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {workExperienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-800">
                      {exp.title}
                    </h4>
                    <p className="text-gray-500">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="mt-2 text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <User className="mr-3 text-gray-600" />
                Organizations
              </h3>
              <div className="space-y-6">
                {organizationData.map((org, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-800">
                      {org.title}
                    </h4>
                    <p className="text-gray-500">
                      {org.organization} • {org.period}
                    </p>
                    <p className="mt-2 text-gray-600">{org.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
                        >
                          <Github size={16} className="text-gray-600" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
                        >
                          <ExternalLink size={16} className="text-gray-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div className="text-lg font-bold text-gray-800">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 shadow-md"
              >
                <Award className="mx-auto mb-4 text-gray-600" size={48} />
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {achievement.year}
                </p>
                <p className="text-gray-500">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://www.linkedin.com/in/ryanmfdr/"
              className="flex flex-col items-center space-y-2 hover:text-gray-600 transition-colors duration-300"
            >
              <div className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md">
                <Linkedin size={32} className="text-gray-700" />
              </div>
              <span className="text-gray-700 font-medium">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/ryanmfdr/"
              className="flex flex-col items-center space-y-2 hover:text-gray-600 transition-colors duration-300"
            >
              <div className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md">
                <Instagram size={32} className="text-gray-700" />
              </div>
              <span className="text-gray-700 font-medium">Instagram</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=ryanmfdr@gmail.com"
              className="flex flex-col items-center space-y-2 hover:text-gray-600 transition-colors duration-300"
            >
              <div className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md">
                <Mail size={32} className="text-gray-700" />
              </div>
              <span className="text-gray-700 font-medium">Email</span>
            </a>
          </div>

          {/* Current Status */}
          <div className="bg-gray-50 p-8 rounded-xl max-w-2xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center text-gray-800">
              <Calendar className="mr-3 text-green-500" />
              Current Status
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-semibold">
                Available for new opportunities
              </span>
            </div>
            <p className="text-gray-600">
              Currently looking for exciting data scientist, machine learning or
              full-stack developer positions. Open to both remote and hybrid
              work arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-center">
        <p className="text-gray-300">
          © 2025 Ryan. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
