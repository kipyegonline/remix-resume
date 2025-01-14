import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useParams, useSearchParams } from "@remix-run/react";
import Portfolio from "components/PR/index";
import ProfileApp from "components/profile";
import { Loader } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Vincent Kipyegon | Resume" },
    { name: "description", content: "Working resume of vincent Kipyegon, software developer specialised in fronted web development and mobile development" },
  ];
};

export default function Index() {
  const [isLoaded,setLoaded]=React.useState(false);
  const isPr=globalThis?.window?.location?.search.includes('pr');

 
  React.useEffect(()=>{
    setTimeout(()=>{
      setLoaded(true)
    },2000)
  },[])
  
  // we wait abit before loading the page
  if(!isLoaded){
    return <Preloader/>
  }
  // if the url has pr we load the portfolio page
  if(isPr){
    return <Portfolio/>
  }
// otherwise we load the profile page
  return (
    <div className=" min-h-screen mx-auto">
      {/*  <ProfileApp/>*/}
      <ProfileApp />
    </div>
  );
}


const Preloader=()=>{
   return <div className="flex flex-col items-center justify-center p-24 min-h-screen bg-gray-100">
    <Loader size={64} color="blue" className="mx-auto mt-32 animate-spin"/>
    <p className="mt-4">Opening page...</p></div>
  }