import React, { useEffect, useRef, useState } from "react";
import { CategoryList } from "@/constants/category";

interface CategoryFilterType {
    category: string;
    setCategory: React.Dispatch<string>;
}

const CategoryFilter = ({category, setCategory}: CategoryFilterType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => document.removeEventListener('click', handleClickOutSide);
  }, []);

  const handleClickOutSide = (e: any) => {
    if (dropDownRef && dropDownRef.current) {
      const ref: any = dropDownRef.current;
      if (!ref.contains(e.target)) {
        setIsOpen(false);
      }
    }
  };

  const handleCategory = (e: React.MouseEvent) => {
    setCategory(e.currentTarget.innerHTML);
    setIsOpen(!isOpen);
  };

  return <>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
    font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700
    dark:focus:ring-blue-800" data-dropdown-toggle="dropdown" id="dropdownDefaultButton" onClick={() => setIsOpen(!isOpen)} ref={dropDownRef}
    type="button">{category}<svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round"
          strokeLinejoin="round" strokeWidth="2"></path></svg></button>

    {isOpen &&
        (<div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 cursor-pointer" id="dropdown">
          <ul aria-labelledby="dropdownDefaultButton" className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {CategoryList.map((categoryToShow, index) => (
              <li key={`selectCategory_${index}`}>
                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCategory}>{categoryToShow}</p>
              </li>
            ))}
          </ul>
        </div>
        )
    }
  </>;
};

export default CategoryFilter;