import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Twitter,Loader,XCircle as x, XCircle} from 'lucide-react';
import { projects } from './projects';

const ProfileApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const years = [2019, 2020, 2021, 2022, 2023, 2024];
  const technologies = [...new Set(projects.flatMap(p => [...p.languages, ...p.frameworks]))];

  const filteredProjects = projects.filter(project => {
    const yearMatch = selectedYear === 'all' || project.year === selectedYear;
    const techMatch = !selectedTech || 
      project.languages.includes(selectedTech) || 
      project.frameworks.includes(selectedTech);
    return yearMatch && techMatch;
  });

  return (
    <div className={`min-h-screen flex transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Sidebar */}
      <aside className={`w-80 fixed h-full overflow-y-auto p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex flex-col items-center">
          <img 
            src=""
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Web developer based in Nairobi, Kenya</h2>
          <p className="text-sm mb-4">Technical writer at Dev.to</p>
          <p className="text-sm mb-4">Freelance Journalist</p>
          
          <div className="flex gap-4 mb-6">
            <a href="https://github.com/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Key Skills</h3>
          <ul className="space-y-2 text-sm">
            <li>Front-end development (HTML, CSS, JavaScript, TypeScript)</li>
            <li>Building REST APIs (Laravel, Express.js)</li>
            <li>React, Angular, Svelte frameworks</li>
            <li>PHP & MySQL</li>
            <li>AWS Cloud Practitioner</li>
            <li>Agile project management</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Other Skills</h3>
          <ul className="space-y-2 text-sm">
            <li>Public relations</li>
            <li>Freelance journalism</li>
            <li>Photography</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">vince.kipyegon11@gmail.com</p>
          <p className="text-sm">+254-790-377-730</p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Contact Me
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80 flex-1 min-h-screen">
        <header className="p-6 flex justify-between items-center bg-blue-800 text-white">
          <h1 className="text-2xl font-bold">Vincent Kipyegon Koech</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-blue-700"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        <div className="p-6">
          {/* Year Filter */}
          <section className="mb-8">
            <div className="flex gap-2 overflow-x-auto pb-4">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-4 py-2 rounded-full ${
                  selectedYear === 'all' 
                    ? 'bg-red-500 text-white' 
                    : darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full ${
                    selectedYear === year 
                      ? 'bg-red-500 text-white' 
                      : darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </section>

          {/* Technologies Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-4 py-2 rounded-full ${
                    selectedTech === tech 
                      ? 'bg-red-500 text-white' 
                      : darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } hover:shadow-lg transition-shadow duration-200`}
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.long_des}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...project.languages, ...project.frameworks].map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Live Demo
                  </a>
                  {project.repo && (
                    <a 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProfileApp;

// Add interfaces
interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  // Contact Form Modal Component
  const ContactModal = ({ isOpen, onClose }: ModalProps) => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Close modal after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <XCircle size={24} />
          </button>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
          
          {isSuccess ? (
            <div className="text-green-600 text-center py-8">
              Message sent successfully! Thank you for reaching out.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor='name'>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                  Message *
                </label>
                <textarea
                  required
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <Loader className="animate-spin" size={20} />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };