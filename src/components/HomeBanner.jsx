import { Button } from '@mui/material';
import {
  FaCar, FaTshirt, FaHome, FaLaptop, FaTools,
  FaFootballBall, FaDog, FaCog, FaEllipsisH, FaUserCircle
} from 'react-icons/fa';

const categories = [
  { name: 'Automobiles', icon: <FaCar /> },
  { name: 'Clothes and wear', icon: <FaTshirt /> },
  { name: 'Home interiors', icon: <FaHome /> },
  { name: 'Computer and tech', icon: <FaLaptop /> },
  { name: 'Tools, equipments', icon: <FaTools /> },
  { name: 'Sports and outdoor', icon: <FaFootballBall /> },
  { name: 'Animal and pets', icon: <FaDog /> },
  { name: 'Machinery tools', icon: <FaCog /> },
  { name: 'More category', icon: <FaEllipsisH /> },
];

const bannerTexts = {
  'Automobiles': {
    title: 'Automobile items',
    subtitle: 'Latest trending',
    img: '/images/home/banner.png',
  },
  'Clothes and wear': {
    title: 'Clothes and wear',
    subtitle: 'Trending styles',
    img: '/images/home/banner.png',
  },
  'Home interiors': {
    title: 'Home interiors',
    subtitle: 'New collections',
    img: '/images/home/banner.png',
  },
  'Computer and tech': {
    title: 'Computer and tech items',
    subtitle: 'Latest gadgets',
    img: '/images/home/banner.png',
  },
};

const HomeBanner=({ selectedCategory, setSelectedCategory }) =>{
  const banner = bannerTexts[selectedCategory] || bannerTexts['Automobiles'];

  return (
    <div className="bg-white rounded shadow p-4 flex gap-4 max-w-[1440px] mx-auto">
      {/* lft */}
      <div className="w-1/5">
        <ul className="bg-gray-50 border rounded p-2 space-y-1">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 p-2 cursor-pointer rounded hover:bg-blue-100 transition ${
                selectedCategory === cat.name ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              <span className="text-blue-600 text-lg">{cat.icon}</span>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* BImage */}
      <div className="w-3/5 flex justify-center">
        <div className="relative border border-gray-300 rounded overflow-hidden max-w-[1180px] h-[400px] w-full">
          <img
            src={banner.img}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center px-8 text-white z-10">
            <p className="text-sm">{banner.subtitle}</p>
            <h2 className="text-3xl font-bold mb-4">{banner.title}</h2>
            <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded w-fit hover:bg-gray-100 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* rt rt rt */}
      <div className="w-1/5 space-y-4">
        <div className="bg-white border p-4 shadow rounded text-center">
          <div className="flex flex-col items-center mb-2">
            <FaUserCircle className="text-4xl text-blue-600 mb-1" />
            <p className="text-sm text-gray-600">Hi, user</p>
            <p className="text-sm">Let’s get started</p>
          </div>
          <Button variant="contained" fullWidth className="mb-2">
            JOIN NOW
          </Button>
          <Button variant="outlined" fullWidth>
            LOG IN
          </Button>
        </div>

        <div className="bg-orange-500 hover:bg-orange-700 text-white py-8 px-4 rounded shadow text-center text-sm font-medium min-h-[100px] flex items-center justify-center">
          Get US $10 off with a new supplier
        </div>
        <div className="bg-cyan-500 hover:bg-cyan-700 text-white py-8 px-4 rounded shadow text-center text-sm font-medium min-h-[100px] flex items-center justify-center">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
}

export default HomeBanner
