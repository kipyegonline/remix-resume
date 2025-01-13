import React, { useState } from 'react';
import { projects } from './projects';
import SideBar from './SideBar';
import Header from './Header';
import YearsComponent from './YearsComponent';
import ContactModal from './ContactModal';
import TechnologyComponent from './TechnologyComponent';
import ProjectsComponents from "./ProjectsComponent"
import Footer from './footer';
import { useAppContext } from './context';

const ProfileApp = () => {

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [darkMode, setDarkMode] = useState(false);
  const [_projects,setProjects]=React.useState(projects)
  const [technologies,setTechnologies]=React.useState<string[]>([])
  const {darkMode, setDarkMode}=useAppContext()
  
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
     
     <div className='block md:hidden'><Header setMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/></div> {/* Sidebar */}
    <SideBar setModal={()=>setIsModalOpen(true)} darkMode={darkMode}/>

      {/* Main Content */}
      <main className="ml-4 md:ml-80 flex-0 md:flex-1 min-h-screen w-full relative">
        <div className='hidden md:block'><Header setMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/></div>
      
        <div className="p-6 mb-8">
          {/* Year Filter */}
         <YearsComponent years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} darkMode={darkMode}/>

          {/* Technologies Filter */}
         <TechnologyComponent technologies={technologies} setSelectedTech={setSelectedTech} selectedTech={selectedTech} darkMode={darkMode}/>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <ProjectsComponents  _projects={_projects} darkMode={darkMode}/>
           
          
          </section>
          {selectedYear===2025 && <div className='flex flex-col   w-full my-2'><p>This app has been revamped and built on Remix js, react framework.</p></div>}
            
        </div>
        <div > <Footer/></div>
       
      </main>
      
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
     
    </div>
  );
};

export default ProfileApp;


 