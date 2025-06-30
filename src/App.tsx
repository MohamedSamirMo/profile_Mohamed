import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Star,
  Calendar,
  Award
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Android Developer",
      company: "Devabits Inc",
      period: "December 2024 – Present",
      type: "Remote",
      description: "Working on high-impact applications including 'Al-Muslim' and 'Azkar Al-Muslim'. Contributed to 'Salli Ala Al-Nabi' with over 1 million downloads.",
      achievements: [
        "Gained experience in MVI architecture and code review processes",
        "Implemented modifications and improvements in production apps",
        "Enhanced skills in clean code principles and MVVM architecture",
        "Collaborated with team to deliver high-quality projects on time"
      ]
    },
    {
      title: "Android Developer",
      company: "Instant Software Solutions",
      period: "March 2024 – October 2024",
      type: "Internship",
      description: "Developed multiple applications including Chat App, FlickBox, CleverQuest, and Hospital System.",
      achievements: [
        "Leveraged Java, Kotlin, and modern Android development practices",
        "Implemented MVVM, MVC, MVP architecture patterns",
        "Integrated Firebase and REST APIs using Retrofit",
        "Applied SOLID principles and design patterns"
      ]
    },
    {
      title: "Android Developer",
      company: "Orange Digital Center Egypt",
      period: "September 2024",
      type: "Scholarship",
      description: "Specialized in Jetpack Compose and modern Android development techniques.",
      achievements: [
        "Crafted dynamic UIs using Jetpack Compose",
        "Optimized performance with LazyRow and LazyColumn",
        "Implemented scalable architecture using MVVM/MVI",
        "Managed Android lifecycle, Coroutines, and Flows"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Kotlin", "JavaScript", "PHP"],
    "Android Development": ["Jetpack Compose", "XML", "Jetpack Components", "Navigation"],
    "Architecture Patterns": ["MVVM", "MVC", "MVP", "MVI", "Clean Architecture"],
    "Database & Storage": ["Room DB", "SQLite", "DataStore", "Firebase"],
    "Networking": ["Retrofit", "RESTful APIs", "OkHttp", "Postman"],
    "Dependency Injection": ["Dagger Hilt", "Koin"],
    "Reactive Programming": ["RxJava", "Kotlin Coroutines", "Flow", "LiveData"],
    "Testing": ["Unit Testing", "JUnit", "Espresso"],
    "Tools & Others": ["Git", "GitHub", "Android Profiler", "R8 & ProGuard"]
  };

  const projects = [
    {
      name: "AzanReminder",
      description: "Muslim Prayer Times app with live Qibla direction, current location tracking, prayer countdowns, and interactive Kaaba map. Features offline access and 12-hour format widget.",
      tech: ["Kotlin", "XML", "Jetpack Navigation", "Dagger Hilt", "Room DB", "Retrofit", "MVVM"],
      github: "https://github.com/MohamedSamir",
      playStore: "Amazon App Store",
      impact: "20% increase in user engagement"
    },
    {
      name: "SmartlyNews",
      description: "News app with personalized content, dark mode, and category search functionality.",
      tech: ["Kotlin", "XML", "Jetpack Navigation", "Dagger Hilt", "Room DB", "Retrofit", "WebView"],
      github: "https://github.com/MohamedSamir",
      playStore: "Amazon App Store",
      impact: "25% efficiency boost"
    },
    {
      name: "CloudScout",
      description: "Weather application providing real-time weather data with intuitive UI and smooth animations.",
      tech: ["Kotlin", "MVVM", "Retrofit", "Dagger Hilt", "Room DB", "Lottie Animation"],
      github: "https://github.com/MohamedSamir",
      playStore: "Amazon App Store",
      impact: "15% increase in user retention"
    },
    {
      name: "CleverQuest",
      description: "Interactive quiz application with responsive UI and robust backend integration.",
      tech: ["Java", "Data Binding", "Firebase", "Firebase Authentication", "SOLID Principles"],
      github: "https://github.com/MohamedSamir",
      adminGithub: "https://github.com/MohamedSamir",
      impact: "25% enhancement in user engagement"
    },
    {
      name: "GlobalTongue",
      description: "Real-time language translation app with dynamic UI and ML integration.",
      tech: ["Kotlin", "ML Translator", "API Integration", "Lottie Animation", "Unit Testing"],
      github: "https://github.com/MohamedSamir",
      playStore: "Amazon App Store"
    },
    {
      name: "MemoPad",
      description: "Note-taking application focused on seamless user experience with robust data handling.",
      tech: ["Kotlin", "XML", "Kotlin Coroutines", "Room DB", "Dagger Hilt", "MVVM"],
      github: "https://github.com/MohamedSamir",
      playStore: "Amazon App Store"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Mohamed Samir</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                    activeSection === section 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                <User className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Mohamed Samir Mohamed
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
                Android Developer
              </h2>
              <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(+20) 1012684496</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>mohamedm1samir@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tanta, Egypt</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Passionate and dedicated Android Developer with <span className="font-semibold text-blue-600">1.5 years of experience</span> in creating 
                high-performance mobile applications. Proficient in Java, Kotlin, and Android SDK, with a strong grasp of modern 
                mobile design principles and best practices. Focused on delivering intuitive, user-friendly solutions through 
                teamwork and innovative problem-solving.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://www.linkedin.com/in/mohamed-samir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/MohamedSamir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </button>
            </div>
            
            <button 
              onClick={() => scrollToSection('experience')}
              className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            </div>
            <p className="text-xl text-gray-600">My professional journey in Android development</p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                )}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-grow bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
            </div>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-900">Arabic</span>
                  <span className="text-blue-600 font-medium">Native</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-900">English</span>
                  <span className="text-blue-600 font-medium">Professional Proficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            </div>
            <p className="text-xl text-gray-600">Featured work and applications I've developed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.impact && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Award className="h-4 w-4 text-green-500" />
                      <span className="text-green-700 font-medium text-sm">{project.impact}</span>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.playStore && (
                      <a 
                        href="#"
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">{project.playStore}</span>
                      </a>
                    )}
                    {project.adminGithub && (
                      <a 
                        href={project.adminGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Admin</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>
            <p className="text-xl text-gray-600">Academic background and achievements</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bachelor of Science in Computer Science
                  </h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-4">
                    Faculty of Computer and Informatics, Tanta University
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">September 2019 – August 2023</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700">GPA: 2.91 (B-)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Graduation Project: A</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Graduation Project</h5>
                    <p className="text-gray-700">
                      <span className="font-medium">Supermarket Online</span> - Built a comprehensive e-commerce platform 
                      aimed at enhancing shopping efficiency, resulting in a 20% increase in completed transactions. 
                      Developed using HTML, CSS, JavaScript, jQuery, MySQL, PHP, and Laravel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl opacity-90">
              Ready to bring your Android app ideas to life? Let's connect and discuss your next project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <a 
              href="tel:+201012684496"
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
            >
              <Phone className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm opacity-90">(+20) 1012684496</p>
            </a>
            
            <a 
              href="mailto:mohamedm1samir@gmail.com"
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
            >
              <Mail className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm opacity-90">mohamedm1samir@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohamed-samir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
            >
              <Linkedin className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm opacity-90">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/MohamedSamir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
            >
              <Github className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm opacity-90">View my code</p>
            </a>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span>Tanta, Egypt</span>
            </div>
            <p className="opacity-90">
              Military Status: Exempted | Available for remote and on-site opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">Mohamed Samir Mohamed</span>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mohamed-samir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MohamedSamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mohamedm1samir@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mohamed Samir Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;