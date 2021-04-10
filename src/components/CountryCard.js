import React from 'react';
import {Link} from "react-router-dom";
const CountryCard = ({country}) => {

    return (
        <div key={country.alpha2Code}
             className="backdrop w-10/12 md:w-1/4  mt-20 mx-10">
            <Link to={`/countries/${country.population}`}>
                <div className='box h-full flex flex-col align-middle bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg cards '>
                    <img className="w-100 h-60 " src={country.flag} alt="flags"/>
                    <div className="text-center">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl  text-4xl mb-3">{country.name}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;