'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import React Confetti with SSR disabled
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function ErnestosWeekChecker() {
  const [isErnestosWeek, setIsErnestosWeek] = useState<boolean | null>(null);
  const [windowSize, setWindowSize] = useState<{width: number, height: number}>({
    width: 0,
    height: 0
  });
  const [confettiComplete, setConfettiComplete] = useState(false);

  useEffect(() => {
    // Set window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Add resize listener
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // The reference date - May 16, 2025 (a day we know is in Ernesto's week)
    const referenceDate = new Date(2025, 4, 16); // Month is 0-indexed, so 4 = May
    
    // Get the Monday of the reference week
    const dayOfWeek = referenceDate.getDay(); // 0 = Sunday, 1 = Monday, ...
    const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const referenceMonday = new Date(referenceDate);
    referenceMonday.setDate(referenceDate.getDate() - daysFromMonday);
    
    // Get current date
    const today = new Date();
    
    // Get the Monday of the current week
    const todayDayOfWeek = today.getDay();
    const todayDaysFromMonday = todayDayOfWeek === 0 ? 6 : todayDayOfWeek - 1;
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - todayDaysFromMonday);
    
    // Calculate the number of weeks between the reference Monday and current Monday
    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksDifference = Math.round((currentMonday.getTime() - referenceMonday.getTime()) / msInWeek);
    
    // If the difference is even, it's Ernesto's week
    setIsErnestosWeek(weeksDifference % 2 === 0);
  }, []);

  return (
    <>
      {/* Confetti effect when it's Ernesto's week */}
      {isErnestosWeek && !confettiComplete && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          onConfettiComplete={() => setConfettiComplete(true)}
        />
      )}
      
      <p className="text-7xl sm:text-9xl font-bold mt-8 h-[1.25em]">
        {isErnestosWeek === null ? (
          <span className="opacity-0">Yes!</span> // Invisible placeholder of same size
        ) : isErnestosWeek ? (
          <span className="text-green-500">Yes!</span>
        ) : (
          <span className="text-red-500">No.</span>
        )}
      </p>
    </>
  );
} 