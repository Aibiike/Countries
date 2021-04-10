import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "./Layout";


const CountryDetails = () => {
    const {population} = useParams()
    const [country,setCountry]= useState({})

    useEffect(()=>{
        axios('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountry(res.data.find(el => el?.population.toString() === population))

            })
    },[])


    return (
        <Layout>


        <section className=" text-gray-700 body-font overflow-hidden bg-white about flex items-center">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <div className='box h-full flex flex-col align-middle bg-green-600 bg-opacity-70 rounded p-3 text-white border border-gray-500 shadow-lg'>
                  <img alt="ecommerce"
                       className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-5"
                       src={country?.flag}/>
                  {console.log(country)}
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-10">
                      <h2 className="text-sm title-font text-white tracking-widest text-white mt-10 ">Country</h2>
                      <h1 className="text-white text-3xl title-font font-medium mb-1 text-white">{country?.name}</h1>
                      <p className="leading-relaxed text-white">Region: {country?.region}</p>
                      <p className="leading-relaxed text-white">Capital: {country?.capital}</p>
                      <p className="leading-relaxed text-white">Population: {country?.population}</p>
                      <p className="leading-relaxed text-white">Timezones: {country?.timezones}</p>
                  </div>
              </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default CountryDetails;