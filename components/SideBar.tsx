
import { Github, Linkedin, Twitter } from 'lucide-react';
type Props={setModal:()=>void,darkMode:boolean}
export default function SideBar({setModal,darkMode}:Props) {
    
  return (
    <aside className={`w-full md:w-80 relative md:fixed h-auto md:h-full overflow-y-auto p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
    <div className="flex flex-col items-center">
      <img 
        src="/vince_profile.jpg"
        alt="Profile"
        className={`w-60  h-60 rounded-full mb-4 ${darkMode ? "grayscale":"grayscale-0"} `}
      />
      <h2 className="text-xl font-bold mb-2">Web developer based in Nairobi, Kenya</h2>
      <p className="text-sm mb-4">Technical writer at <a href="https://dev.to/kipyegonline" target="_blank" rel="noreferrer">Dev.to</a></p>
      <p className="text-sm mb-4">Freelance Journalist</p>
      
      <MySocials/>
    </div>
<hr className='mb-2 z-50'/>
   <KeySkilss/>
   <hr className='mb-2'/>

   <OtherSkills/>

  
    <div className="mt-6">
      <button
        onClick={setModal}
        className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Contact Me
      </button>
    </div>
  </aside>
  )
}

const MySocials=()=>{
    const size=32
    return (<div className="flex gap-4 mb-6">
        <a href="https://github.com/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
          <Github size={size} />
        </a>
        <a href="https://x.com/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
          <Twitter size={size} />
        </a>
        <a href="https://www.linkedin.com/in/kipyegonline" target='_blank' rel="noreferrer" className="hover:text-blue-600">
          <Linkedin size={size} />
        </a>
      </div>)
}

const KeySkilss=()=>{
    return( <div className="mb-6">
        <h3 className="font-semibold mb-2">Key Skills</h3>
        <ul className="space-y-2 text-sm">
          <li>Front-end development (HTML, CSS, JavaScript, TypeScript)</li>
          <li>Building REST APIs (Laravel, Express.js)</li>
          <li>React, Angular, Svelte frameworks</li>
          <li>PHP & MySQL</li>
          <li>AWS Cloud Practitioner</li>
          <li>Agile project management</li>
          
        </ul>
      </div>)
}
const OtherSkills=()=>{
    return( <div className="mb-6">
        <h3 className="font-semibold mb-2">Other Skills</h3>
        <ul className="space-y-2 text-sm">
          <li>Public relations</li>
          <li>Freelance journalism</li>
          <li>Photography</li>
        </ul>
      </div>)
}