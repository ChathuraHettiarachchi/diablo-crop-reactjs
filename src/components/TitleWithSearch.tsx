import { TitleSearchProps } from "@/types";
import React from "react";

import { BiSearchAlt } from "react-icons/bi";

const TitleWithSearch = (props: TitleSearchProps) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-between gap-4 p-4 md:flex-row"
      data-testid={props.dataTestId}
    >
      <p className="text-[20px] font-bold md:text-2xl ">{props.title}</p>
      <div className="flex w-full md:w-[300px]">
        <input
          data-testid="search-view"
          value=""
          onChange={props.onChange}
          className="h-8 w-full rounded-xl border-2 border-gray-200 bg-white pl-6 text-sm text-gray-600 placeholder-gray-400 outline-none sm:w-full md:w-[300px]"
          type="text"
          placeholder="Start your search"
        />
        <BiSearchAlt className="absolute mx-2 h-8 cursor-pointer rounded-full text-gray-400 md:inline-flex" />
      </div>
    </div>
  );
};

export default TitleWithSearch;
