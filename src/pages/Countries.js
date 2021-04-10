import React, {useState, useEffect} from 'react';
import axios from "axios";
import Pagination from "../components/Pagination";
import CountryCard from "../components/CountryCard";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import {withRouter} from 'react-router-dom'

const Countries = ({history}) => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const filteredCountries = countries.filter(el => el.name.includes(search))
    const [currentPage, setCurrentPage] = useState(1)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        axios('https://restcountries.eu/rest/v2/all')
            .then(res => setCountries(res.data))
            .catch(() => {
                setIsError(true)
                setSearch(false)
            })
    }, [])
    const pagesCount = Math.ceil(countries.length / 40)
    const viewCountries = filteredCountries.slice((currentPage - 1) * 40, currentPage * 40)

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            history.push(`/countries/${search}`)
        }
    }

    if (isError) {
        return (
            <Layout>
                <Alert/>
            </Layout>
        )
    }

    return (
        <Layout>
            <section className='hero bg-gradient-to-r from-green-400 to-blue-900 pb-20'>
                <div className='container mx-auto '>
                    <div className="relative">
                        <input type="search" className="bg-white shadow rounded border-0 p-3 w-full mt-10 "
                               placeholder="Search by country..." onChange={(e) => setSearch(e.target.value)}
                               onKeyPress={handleSearch}
                        />
                        <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter  right-12 top-1/2 ">
                            <svg version="1.1" className="h-4 text-yellow-800"
                                 viewBox="0 0 52.966 52.966">
                                <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"/>
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-wrap  -mx-10  my-2 flex  justify-center'>
                        {
                            viewCountries.map(country => (
                                <CountryCard country={country}/>
                            ))
                        }

                    </div>
                    <Pagination setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
                </div>
            </section>
        </Layout>
    );
};

export default withRouter(Countries);
