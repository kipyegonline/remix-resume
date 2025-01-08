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
    <div className="flex h-screen items-center justify-center mx-auto">
    <ProfileApp/>
    </div>
  );
}


