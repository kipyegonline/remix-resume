import type { MetaFunction } from "@remix-run/node";
import ProfileApp from "components/profile";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" min-h-screen mx-auto">
    <ProfileApp/>
    </div>
  );
}


