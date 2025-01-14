import React from 'react'

interface AppContextType {darkMode:boolean,setDarkMode:(mode:boolean)=>void }
const AppContext = React.createContext({})
export const useAppContext = () => React.useContext(AppContext) as AppContextType

export default function AppProvider({children}:{children:React.ReactNode}) {
    const [darkMode, setDarkMode] = React.useState(false)
    React.useEffect(()=>{
        const isDark=matchMedia('(prefers-color-scheme: dark)').matches;
        if(isDark)setDarkMode(true)
    },[])
  return (
    <AppContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </AppContext.Provider>
  )
}
