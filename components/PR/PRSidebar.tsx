
import {   ExternalLink, Link, Linkedin } from 'lucide-react';
export default function PRSidebar({isMenuOpen,setOpen,darkMode}:{isMenuOpen:boolean,setOpen:()=>void,darkMode:boolean}) {
  
    const linkedin="https://www.linkedin.com/in/kipyegonline"
  return (
  
    <div className={`fixed lg:static w-80   ${darkMode ? 'bg-gray-900 text-white':'bg-white text-gray-900'}  shadow-lg min-h-screen transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-all duration-300 ease-in-out z-30`}>
        <div className="flex flex-col h-full p-6">
          <div className="text-center mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-blue-600 mb-4 overflow-hidden">
              <img 
                src="/vince_profile.jpg"
                alt="Profile" 
                className={`w-full h-full object-cover ${darkMode ? 'grayscale':'grayscale-0'}`}
              />
            </div>
            <h2 className="text-xl font-bold">Vincent Kipyegon Koech</h2>
            <p className={`${darkMode ? 'text-white':"text-gray-600"}  mt-2`}>PR & Communications Pro</p>
            <p className={`${darkMode ? 'text-white':"text-gray-600"} text-sm`}>Photographer & Print Journalist</p>
            <p className={`${darkMode ? 'text-white':"text-gray-600"} text-sm cursor-pointer mt-4`}><button onClick={()=>{window.open(location.origin)}} className='text-blue-600 '>Web developer <ExternalLink className='inline ml-2 ' size={20}/></button></p>
          </div>

          <div className="space-y-4">
            
            <div className="flex space-x-4 justify-center mt-4">
              <Link className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
              <Linkedin className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600"  onClick={()=>window.open(linkedin)} />
            </div>
         
            
            <hr/>
          </div>
          <div className='flex flex-col items-end mt-4'>
          <button className='bg-blue-800 p-2 w-full rounded-md text-white' onClick={()=>setOpen()}>Contact me</button>
          </div>
        </div>
    
      </div>
      
  )
}
