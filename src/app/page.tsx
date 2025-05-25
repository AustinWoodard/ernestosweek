export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Empty space to push content to center */}
      <div className="flex-grow" />
      
      {/* Main content */}
      <main className="flex flex-col items-center text-center px-8">
        <h1 className="text-4xl sm:text-5xl font-bold">Is it Ernesto&apos;s week?</h1>
        
        <p className="text-7xl sm:text-9xl font-bold mt-8 h-[1.25em]">
          <span className="text-red-500">No.</span>
        </p>
        
        <p className="text-red-500 text-lg mt-4 mb-6">
          Based on what we know, &quot;Ernesto&apos;s&quot; no longer belongs to Ernesto.
          <br />
          If this means you want to choose another Mexican Restaurant, here are some options in Greenwood:
        </p>
        
        <div className="text-center space-y-2">
          <p><a href="https://g.co/kgs/BsD7Qjt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Alicia&apos;s</a></p>
          <p><a href="https://g.co/kgs/8AoVYQM" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Campano&apos;s Fresh Mex</a></p>
          <p><a href="https://g.co/kgs/F6jFZRc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">El Centenario</a></p>
          <p><a href="https://g.co/kgs/3CN4xmT" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">La Hacienda</a></p>
          <p><a href="https://g.co/kgs/RVMc3fa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lovo&apos;s</a></p>
          <p><a href="https://g.co/kgs/Q7474iA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Santa Fe Mexican Grill</a></p>
          <p><i>and many more...</i></p>
        </div>
      </main>
      
      {/* Empty space to push content to center */}
      <div className="flex-grow" />
      
      {/* Footer */}
      <footer className="p-8 text-xs text-gray-400 text-center">
        <p>This site is not affiliated with Ernesto&apos;s restaurant in Greenwood, SC.</p>
      </footer>
    </div>
  );
}
