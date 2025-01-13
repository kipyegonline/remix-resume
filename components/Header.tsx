
import { Sun, Moon} from "lucide-react"
type Props={darkMode:boolean,setMode:()=>void,show?:boolean}
export default function Header({setMode,darkMode,show=true}:Props) {
  
  return (
    <header className="px-6 py-10 flex justify-center items-center bg-blue-800 text-white static top-4">
    <h1 className=" text-2xl md:text-4xl font-bold">Vincent Kipyegon Koech</h1>
    
      
   {show ?   <ModeSwitcher darkMode={darkMode} setMode={setMode}/>:null}
   
  </header>

  )
}
export const ModeSwitcher=({darkMode,setMode}:{darkMode:boolean,setMode:()=>void})=>{
  return (
    <button 
      onClick={setMode}
      className="p-2 rounded-full hover:bg-blue-700 absolute right-4 top-2 cursor-pointer z-50"
    >
      {darkMode ? <Sun size={24} color="white" /> : <Moon size={24}  />}
    </button>
  )
}