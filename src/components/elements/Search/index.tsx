import { FC } from "react";
import SvgSearch from "@assets/svg/sidebar/Search";

interface SearchProps {
  onInputChange: (value: string) => void;
}

const Search: FC<SearchProps> = ({ onInputChange }) => {
  return (
    <div className="flex justify-between items-center my-3 pr-2 py-4  w-full h-6 border-b-[1px] border-gray-200 focus:border-gray-400">
      <SvgSearch className=" w-4 h-4 " />
      <input
        className="w-full h-full py-4 px-2 text-gray-500 text-14a font-medium outline-none "
        type="text"
        placeholder="Search"
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
