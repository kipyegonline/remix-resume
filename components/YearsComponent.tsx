

type StringOrNumber="all"|number
type Props={years:number[], setSelectedYear:(a:StringOrNumber)=>void, selectedYear:StringOrNumber,darkMode:boolean}
export default function YearsComponent({years,selectedYear,setSelectedYear,darkMode}:Props) {
  return (
    <section className="mb-8">
    <div className="flex gap-2 overflow-x-auto pb-4">
      <button
        onClick={() => setSelectedYear('all')}
        className={`px-4 py-2 rounded-full ${
          selectedYear === 'all' 
            ? 'bg-red-500 text-white' 
            : darkMode 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {years.map(year => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-4 py-2 rounded-full ${
            selectedYear === year 
              ? 'bg-red-500 text-white' 
              : darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  </section>
  )
}
