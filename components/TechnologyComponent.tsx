

type StringOrnull=string|null;
type Props={technologies:string[],setSelectedTech:(a: StringOrnull)=>void,selectedTech: StringOrnull,darkMode:boolean}
export default function TechnologyComponent({technologies,setSelectedTech,selectedTech,darkMode}:Props) {
  return (
    <section className="mb-8">
    <div className="flex flex-wrap gap-2">
      {technologies.map(tech => (
        <button
          key={tech}
          onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
          className={`px-4 py-2 rounded-full ${
            selectedTech === tech 
              ? 'bg-red-500 text-white' 
              : darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  </section>
  )
}
