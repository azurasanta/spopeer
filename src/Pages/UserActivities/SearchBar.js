import * as React from "react";

function SearchBar() {
    return (
        <div className="flex gap-5 justify-between text-xs font-light leading-5 text-black max-md:flex-wrap my-3">
            <div className="flex flex-col justify-center py-1 bg-white rounded shadow-lg px-3 lg:px-6">
                <div className="flex gap-4 pr-5">
                    <input type="checkbox" className="shrink-0 my-auto rounded bg-zinc-300 h-[15px] w-[15px]" />
                    <div>Select all</div>
                </div>
            </div>
            <div className="flex gap-1">
                <div className="flex flex-col justify-center items-start px-6 py-1 bg-white rounded shadow-lg max-md:px-5">
                    <div className="flex gap-0">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/473b559a5574f94d3e1fa3b9598000d70ba03f30ba0877e34128adee73b04f3b?"
                            className="shrink-0 self-start w-5 aspect-square"
                        />
                        <div>Search user</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center py-1 whitespace-nowrap bg-white rounded shadow-lg">
                    <div className="flex gap-3.5 pr-5">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b47c0448e6a87efb49e5167f026d23a81ffe2168fa76bae5fe6eeaabc5f095?"
                            className="shrink-0 self-start w-5 aspect-square"
                        />
                        <div>Filters</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar


