import React, { useState } from 'react';
import { Loader,XCircle as x, XCircle, GitBranch} from 'lucide-react';
import { projects } from './projects';
import SideBar from './SideBar';
import Header from './Header';
import YearsComponent from './YearsComponent';
import ContactModal from './ContactModal';

const ProfileApp = () => {

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [_projects,setProjects]=React.useState(projects)
  const [technologies,setTechnologies]=React.useState<string[]>([])
  
  const getYears=()=>{
    const years=[]
    const startYear=2019,currentYear=new Date().getFullYear();
    for(let i=startYear;i<=currentYear;i++){
      
years.push(i)
    }
    return years
  }
  const years = getYears()
  // filter technologies based on year clicked or all
  const filterTechnologies=()=>{
    if(selectedYear==="all")
        return [...new Set(projects.flatMap(p => [ ...p.frameworks]))];
    else{
       return [... new Set(projects.filter(project=>project.year===selectedYear).flatMap(p => [ ...p.frameworks]))]
    }
  }
  
// react when year is clicked
  React.useEffect(()=>{
    setSelectedTech(null)
    setTechnologies(filterTechnologies())
    const selectedprojects=selectedYear==="all" ? projects:projects.filter(project=>project.year===selectedYear)
    setProjects(selectedprojects)
  },[selectedYear])

  // when technology is clicked fetch projects under that year or all
  React.useEffect(()=>{
    if(selectedTech){
        if(selectedYear==="all")
            setProjects(projects.filter((project)=> project.frameworks.includes(selectedTech)))
            else
        setProjects(projects.filter(project=>project.year===selectedYear && project.frameworks.includes(selectedTech)))
    }
    

  },[selectedTech])
  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Sidebar */}
    <SideBar setModal={()=>setIsModalOpen(true)} darkMode={darkMode}/>

      {/* Main Content */}
      <main className="ml-4 md:ml-80 flex-0 md:flex-1 min-h-screen w-full relative">
      <Header setMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
        <div className="p-6">
          {/* Year Filter */}
         <YearsComponent years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} darkMode={darkMode}/>

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
            {_projects.map(project => (
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
                    {project.link.length>0 ?
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Live Demo 
                  </a>:null}
                  {project.repo && (
                    <a 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      Repository <GitBranch className='ml-2 inline-block' size={18}/>
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


 