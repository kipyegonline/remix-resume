import  { useState } from 'react';
import { Menu } from 'lucide-react';
import PRSidebar from './PRSidebar';
import Header, { ModeSwitcher } from 'components/Header';
import Footer from 'components/footer';
import ContactModal from 'components/ContactModal';
import { useAppContext } from 'components/context';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen,setopen]=useState(false)

  const skills = [
    "Public Relations and communications",
    "Photography and print journalism",
    "Photography editing (Adobe Photoshop, Adobe Lightroom, Capture One)",
    "Web development and design",
    "Computer application packages"
  ];

  const experiences = [
    {
      company: "Biovision Africa Trust",
      role: "Journalist",
      period: "2021 - Present",
      duties: "Gathering information on best farming practices, organic farming in Kenya, farmer stories, and research on sustainable agriculture. Writing monthly articles published in The Organic Farmer magazine and web platform. Digital communication expert for young farmers in agribusiness."
    },
    {
      company: "New Kenya Creameries Cooperative Limited (New KCC)",
      role: "Photojournalist & Public Relations Practitioner",
      period: "Aug 2023 - Dec 2023",
      duties: "Event photography coverage, AI-powered messaging, social media content development, corporate communications management, and photo gallery creation."
    },
    {
      company: "Finwit Limited",
      role: "Digital Communications Expert",
      period: "June 2022 - August 2023",
      duties: "Brand management, website maintenance, financial literacy content creation, news monitoring, and AI-based content development for unbanked audiences."
    },
    {
      company: "Public Relations Society of Kenya",
      role: "Public Relations Assistant",
      period: "Jan 2018 - Feb 2020",
      duties: "Internal communications support, customer care, content writing for PR digest magazine, digital communications, and membership management."
    },
    {
      company: "New KCC",
      role: "Public Relations & Communications Intern",
      period: "June 2015 - September 2015",
      duties: "Brand management, event management, technical document writing, media monitoring and media relations."
    }
  ];
  const {darkMode,setDarkMode}=useAppContext()
const dmode=""
  return (
    <div className={`flex min-h-screen transition-colors ease-in-out duration-300  ${darkMode ? 'bg-gray-900 text-white ':''} `}>
      <ModeSwitcher darkMode={darkMode} setMode={()=>setDarkMode(!darkMode)}/>
      {/* Sidebar */}
     <PRSidebar isMenuOpen={isMenuOpen} setOpen={()=>setopen(true)} darkMode={darkMode}/>

      {/* Main Content */}
      <div className={`flex-1 px-8 pb-8 relative  `}>
        <button 
          className="lg:hidden fixed top-4 left-4 z-40"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <section className="max-w-3xl mx-auto relative mb-8">
          <div className='mb-4'> <Header show={false} darkMode={darkMode} setMode={()=>setDarkMode(!darkMode)}/></div>
         
          <div className={` ${darkMode ? 'bg-gray-900 text-white ':''} rounded-lg shadow-lg p-6 `}>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className={darkMode ? 'text-white':'text-gray-700'}>
              An experienced journalist with a deep passion for agricultural and environmental storytelling. Over the past 5 years, I have reported extensively on innovative farming practices, impactful stories and rural development initiatives in the Rift Valley region.
            </p>
          </div>

          <div className={` ${darkMode ? 'bg-gray-900 text-white ':''} rounded-lg shadow-lg p-6 mb-8`}>
            <h3 className="text-xl font-bold mb-4">Key Assessment Skills {darkMode ? "dark":"light"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-900 text-white ':''} rounded-lg shadow-lg p-6 `}>
            <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-bold">{exp.company}</h4>
                  <p className="text-blue-600">{exp.role}</p>
                  <p className={`text-sm  ${darkMode ? 'text-white':'text-gray-600'}`}>{exp.period}</p>
                  <p className={`mt-2  ${darkMode ? 'text-white':'text-gray-700'}`}>{exp.duties}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-8 pt-8 relative'>
          <Footer/>
          </div>
          <ContactModal isOpen={isOpen} onClose={()=>setopen(false)}/>
        </section>
       
      </div>
    </div>
  );
};

export default Portfolio;