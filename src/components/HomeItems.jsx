import React from 'react';
import { FaSearch, FaToolbox, FaPlane, FaMapMarkerAlt } from 'react-icons/fa';

const recommendedItems = [
  {
    name: 'T-shirts with multiple colors, for men',
    price: '$10.30',
    img: '/images/home/r6.png',
  },
  {
    name: 'Jeans shorts for men blue color',
    price: '$10.30',
    img: '/images/home/r1.png',
  },
  {
    name: 'Brown winter coat medium size',
    price: '$12.50',
    img: '/images/home/r5.png',
  },
  {
    name: 'Jeans bag for travel for men',
    price: '$34.00',
    img: '/images/home/r2.png',
  },
  {
    name: 'Leather wallet',
    price: '$99.00',
    img: '/images/home/r3.png',
  },
  {
    name: 'Canon camera black, 100x zoom',
    price: '$9.99',
    img: '/images/home/13.png',
  },
  {
    name: 'Headset for gaming with mic',
    price: '$8.99',
    img: '/images/home/9.png',
  },
  {
    name: 'Smartwatch silver color modern',
    price: '$10.30',
    img: '/images/home/11.png',
  },
  {
    name: 'Blue wallet for men leather metarial',
    price: '$10.30',
    img: '/images/home/r3.png',
  },
  {
    name: 'Jeans bag for travel for men',
    price: '$80.95',
    img: '/images/home/r2.png',
  },
];

const extraServices = [
  {
    title: 'Source from Industry Hubs',
    img: '/images/home/m1.png',
    icon: <FaSearch />,
  },
  {
    title: 'Customize Your Products',
    img: '/images/home/m2.png',
    icon: <FaToolbox />,
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    img: '/images/home/m3.png',
    icon: <FaPlane />,
  },
  {
    title: 'Product monitoring and inspection',
    img: '/images/home/m4.png',
    icon: <FaMapMarkerAlt />,
  },
];

const regions = [
  { country: 'Arabic Emirates', url: 'shopname.ae', flag: '/images/Flags/f3.png' },
  { country: 'Australia', url: 'shopname.au', flag: '/images/Flags/f9.png' },
  { country: 'United States', url: 'shopname.us', flag: '/images/Flags/f8.png' },
  { country: 'Russia', url: 'shopname.ru', flag: '/images/Flags/f4.png' },
  { country: 'Italy', url: 'shopname.it', flag: '/images/Flags/f6.png' },
  { country: 'Denmark', url: 'denmark.com.dk', flag: '/images/Flags/f5.png' },
  { country: 'France', url: 'shopname.com.fr', flag: '/images/Flags/f7.png' },
  { country: 'Arabic Emirates', url: 'shopname.ae', flag: '/images/Flags/f3.png' },
  { country: 'China', url: 'shopname.cn', flag: '/images/Flags/f2.png' },
  { country: 'Great Britain', url: 'shopname.uk', flag: '/images/Flags/f1.png' },
  
];

const HomeItems = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10 space-y-12">
      {/* Recommended Items */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recommended items</h2>
        <div className="grid grid-cols-5 gap-5">
          {recommendedItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition group"
            >
              <div className="overflow-hidden rounded">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-contain mb-3 transform transition duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-semibold mb-1">{item.price}</p>
              <p className="text-xs text-gray-500">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Services Section */}
      {/* Extra Services Section */}
<div>
  <h2 className="text-lg font-semibold mb-4">Our extra services</h2>
  <div className="grid grid-cols-4 gap-5">
    {extraServices.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-md overflow-hidden border border-gray-300 hover:shadow-md transition group relative"
      >
       
        <div className="relative">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute -bottom-5 right-4 bg-[#E5F1FF] w-10 h-10 flex items-center justify-center rounded-full text-lg shadow-md">
            {service.icon}
          </div>
        </div>

       
        <div className="pt-7 px-3 pb-3">
          <p className="text-sm font-medium">{service.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Suppliers by Region */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Suppliers by region</h2>
        <div className="flex flex-wrap gap-5">
          {regions.map((region, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 border border-gray-200 px-4 py-2 rounded hover:shadow-md transition cursor-pointer w-60"
            >
              <img
                src={region.flag}
                alt={region.country}
                className="w-6 h-4 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{region.country}</p>
                <p className="text-xs text-blue-600 hover:underline">{region.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeItems;
