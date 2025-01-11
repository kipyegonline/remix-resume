import { GitBranch } from "lucide-react"
import { Project as ProjectProp} from "./projects"

type Props={_projects: ProjectProp[],darkMode:boolean}
 function ProjectsComponent({_projects,darkMode}:Props) {
  return _projects.map(project=><Project key={project.id} project={project} darkMode={darkMode}/>)
}
export default ProjectsComponent
type Props_={project: ProjectProp,darkMode:boolean}

const Project =({project,darkMode}:Props_)=>{

  return(<div 
   
    className={`p-6 rounded-lg ${
      darkMode ? 'bg-gray-800' : 'bg-gray-100'
    } hover:shadow-lg transition-shadow duration-200`}
  >
    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
    <p className="text-sm mb-4">{project.long_des}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {[...project.languages, ...project.frameworks].map((tech,i) => (
        <span 
          key={i}
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
  </div>)
}