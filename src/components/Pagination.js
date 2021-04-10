import React from 'react';
const Pagination = ({setCurrentPage, pagesCount}) => {
        console.log(pagesCount)
    return (
        <div className="flex h-12 font-lg rounded-full xl:text-black bg-white mt-20 hover:text-black w-60">
                {
                        Array(pagesCount).fill(null).map((page, idx) =>
                                <div
                                    onClick={() => setCurrentPage(idx+1)}
                                    className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                                        {idx + 1}
                                </div>
                        )
                }
        </div>
    );
};

export default Pagination;