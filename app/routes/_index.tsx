import type { MetaFunction } from "@remix-run/node";
import ProfileApp from "components/profile";

export const meta: MetaFunction = () => {
  return [
    { title: "Vincent Kipyegon | Resume" },
    { name: "description", content: "Working resume of vincent Kipyegon, software developer specialised in fronted web development and mobile development" },
  ];
};

export default function Index() {
  return (
    <div className=" min-h-screen mx-auto">
    <ProfileApp/>
    </div>
  );
}


