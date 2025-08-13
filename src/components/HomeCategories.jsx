import React from 'react';

const sections = [
  {
    title: 'Home and outdoor',
    subtitle: 'Source now',
    image: '/images/home/l1.png',
    categories: [
      { name: 'Soft chairs', price: 'USD 19', img: '/images/home/l11.png' },
      { name: 'Sofa & chair', price: 'USD 19', img: '/images/home/l12.png' },
      { name: 'Kitchen dishes', price: 'USD 19', img: '/images/home/l13.png' },
      { name: 'Smart watches', price: 'USD 19', img: '/images/home/l14.png' },
      { name: 'Kitchen mixer', price: 'USD 100', img: '/images/home/l15.png' },
      { name: 'Blenders', price: 'USD 39', img: '/images/home/l16.png' },
      { name: 'Home appliance', price: 'USD 19', img: '/images/home/l17.png' },
      { name: 'Coffee maker', price: 'USD 30', img: '/images/home/l18.png' },
    ],
  },
  {
    title: 'Consumer electronics and gadgets',
    subtitle: 'Source now',
    image: '/images/home/l2.png',
    categories: [
      { name: 'Smart watches', price: 'USD 19', img: '/images/home/11.png' },
      { name: 'Cameras', price: 'USD 89', img: '/images/home/13.png' },
      { name: 'Headphones', price: 'USD 10', img: '/images/home/9.png' },
      { name: 'Smart watches', price: 'USD 80', img: '/images/home/11.png' },
      { name: 'Gaming set', price: 'USD 35', img: '/images/home/14.png' },
      { name: 'Laptops & PC', price: 'USD 340', img: '/images/home/12.png' },
      { name: 'Smartphones', price: 'USD 19', img: '/images/home/15.png' },
      { name: 'Electric kettle', price: 'USD 240', img: '/images/home/10.png' },
    ],
  },
];

const HomeCategories = () => {
  return (
    <div className="max-w-[1210px] mx-auto mt-8 space-y-10 ">
      {/* Category Sections */}
      {sections.map((section, index) => (
        <div key={index} className="grid grid-cols-5 bg-white rounded-sm shadow overflow-hidden">
          {/* Left Section */}
          <div className="col-span-1 relative flex flex-col justify-between p-4 group overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/0" />
            <div className="relative z-10">
              <h2 className="text-lg font-semibold text-black">{section.title}</h2>
              <button className="mt-4 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition duration-200">
                {section.subtitle}
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-4 grid grid-cols-4 gap-2">
            {section.categories.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border border-gray-200 rounded-sm p-3 bg-white hover:shadow transition duration-200"
              >
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">From {item.price}</p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-20 object-contain ml-2 transform transition duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
       {/* Inquiry Section */}
      <div
        className="relative bg-cover bg-center rounded-md overflow-hidden"
        style={{ backgroundImage: "url('/images/home/cbanner.png')" }}
      >
        <div className="bg-blue-900/60 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 flex items-center justify-between px-6 py-10 text-white">
          {/* Left Side Text */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-2">
              An easy way to send <br /> requests to all suppliers
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Form Box aligned to right */}
          <div className="bg-white text-gray-700 rounded-md p-4 w-full max-w-md shadow-md">
            <h3 className="text-sm font-semibold mb-4">Send quote to suppliers</h3>
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-3"
            />
            <textarea
              rows="3"
              placeholder="Type more details"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-3 resize-none"
            />
            <div className="flex gap-3 mb-4">
              <input
                type="number"
                placeholder="Quantity"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Box</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 text-sm font-medium transition duration-200">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

     

export default HomeCategories;
