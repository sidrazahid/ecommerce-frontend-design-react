import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


const Dropdown = ({ options, selected, setSelected, isFlag }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm hover:text-gray-700 focus:outline-none"
      >
        {isFlag ? (
          <span className="flex items-center gap-1">
            <img
              src={selected.image}
              alt={selected.label}
              className="w-5 h-4 object-cover"
            />
            {selected.label}
          </span>
        ) : (
          selected
        )}
        <IoIosArrowDown />
      </button>

      {open && (
        <div className="absolute top-full left-0 bg-white border rounded shadow-md mt-1 min-w-[160px] z-50">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer flex items-center gap-2"
            >
              {isFlag ? (
                <>
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-5 h-4 object-cover"
                  />
                  {option.label}
                </>
              ) : (
                option
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const [selectedLanguage, setSelectedLanguage] = useState('English, USD');
  const [selectedCountry, setSelectedCountry] = useState({
    label: 'Ship to',
    image: '/images/Flags/us.png',
  });
  const [selectedGift, setSelectedGift] = useState('Gift boxes');
  const [selectedHelp, setSelectedHelp] = useState('Help');

  
  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Books'];
  const languages = ['English, USD', 'German, EUR'];
  const countries = [
    { label: 'Germany', image: '/images/Flags/gr.png' },
    { label: 'Pak', image: '/images/Flags/pk.png' },
    { label: 'French', image: '/images/Flags/fr.png' },
  ];
  const giftOptions = ['Birthday', 'Anniversary', 'Special Occasion'];
  const helpOptions = ['FAQ', 'Contact Us', 'Support'];

  return (
    <nav className="w-full border-t border-b border-gray-200 bg-white text-sm">
      <div className="px-6 py-2 flex justify-between items-center max-w-[1210px] mx-auto">
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaBars />
            <Dropdown
              options={categories}
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </div>
          <span className="cursor-pointer hover:text-gray-700">Hot offers</span>
          <Dropdown
            options={giftOptions}
            selected={selectedGift}
            setSelected={setSelectedGift}
          />
          <span className="cursor-pointer hover:text-gray-700">Projects</span>
          <span className="cursor-pointer hover:text-gray-700">Menu item</span>
          <Dropdown
            options={helpOptions}
            selected={selectedHelp}
            setSelected={setSelectedHelp}
          />
        </div>

       
        <div className="flex items-center gap-6">
          <Dropdown
            options={languages}
            selected={selectedLanguage}
            setSelected={setSelectedLanguage}
          />
          <Dropdown
            options={countries}
            selected={selectedCountry}
            setSelected={setSelectedCountry}
            isFlag={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
