import ErnestosWeekChecker from "../components/ErnestosWeekChecker";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Empty space to push content to center */}
      <div className="flex-grow" />
      
      {/* Main content */}
      <main className="flex flex-col items-center text-center px-8">
        <h1 className="text-4xl sm:text-5xl font-bold">Is it Ernesto&apos;s week?</h1>
        
        <ErnestosWeekChecker />
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
