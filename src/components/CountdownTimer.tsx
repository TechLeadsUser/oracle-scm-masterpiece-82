import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to next Monday at 2:30 PM
    const getNextMonday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const daysUntilMonday = (1 + 7 - dayOfWeek) % 7 || 7;
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(14, 30, 0, 0);
      return nextMonday;
    };

    const targetDate = getNextMonday();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-success animate-pulse" />
        <span className="text-foreground font-medium">Next Demo Starts In:</span>
      </div>
      <div className="flex items-center gap-2">
        {timeLeft.days > 0 && (
          <div className="bg-success text-success-foreground px-3 py-2 rounded-lg font-bold text-sm min-w-[50px] text-center animate-pulse">
            {timeLeft.days}d
          </div>
        )}
        <div className="bg-success text-success-foreground px-3 py-2 rounded-lg font-bold text-sm min-w-[50px] text-center animate-pulse">
          {String(timeLeft.hours).padStart(2, '0')}h
        </div>
        <div className="bg-success text-success-foreground px-3 py-2 rounded-lg font-bold text-sm min-w-[50px] text-center animate-pulse">
          {String(timeLeft.minutes).padStart(2, '0')}m
        </div>
        <div className="bg-success text-success-foreground px-3 py-2 rounded-lg font-bold text-sm min-w-[50px] text-center animate-pulse">
          {String(timeLeft.seconds).padStart(2, '0')}s
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;