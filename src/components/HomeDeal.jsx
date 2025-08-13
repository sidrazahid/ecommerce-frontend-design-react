import React, { useState, useEffect } from 'react';

const deals = [
  { name: 'Smart watches', img: '/images/home/11.png', discount: 25 },
  { name: 'Laptops', img: '/images/home/12.png', discount: 15 },
  { name: 'GoPro cameras', img: '/images/home/13.png', discount: 40 },
  { name: 'Headphones', img: '/images/home/14.png', discount: 25 },
  { name: 'Canon cameras', img: '/images/home/15.png', discount: 25 },
];

const CountdownTimer = ({ targetDate }) => {
  const getTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gray-200 rounded shadow p-4 w-[180px] h-[250px] flex flex-col items-center justify-center text-center">
      <p className="font-semibold text-sm mb-1">Deals and offers</p>
      <p className="text-gray-500 text-xs mb-4">Hygiene equipments</p>
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-500">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-500">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-500">Mins</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-500">Secs</span>
        </div>
      </div>
    </div>
  );
};

const HomeDeal = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  return (
    <div className="max-w-[1210px] mx-auto mt-8 bg-white rounded shadow p-6">
      <div className="flex items-start gap-4">
        <CountdownTimer targetDate={targetDate} />

        <div className="flex-1">
          <div className="grid grid-cols-5 gap-4">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className="text-center border border-gray-200 rounded p-4 h-[250px] flex flex-col justify-between items-center transition duration-200 hover:shadow-lg group"
              >
                <img
                  src={deal.img}
                  alt={deal.name}
                  className="w-28 h-28 object-contain mx-auto mb-2 transition-transform group-hover:scale-110"
                />
                <div className="text-sm font-medium">{deal.name}</div>
                
                 <div className="mt-2">
                      <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition">
                         -{deal.discount}%
                      </span>
                 </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDeal;
