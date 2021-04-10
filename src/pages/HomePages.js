import React from 'react';
import Layout from "../components/Layout";


const HomePages = () => {
    return (
        <Layout>
        <div className='hero flex items-end text-center'>
            <div className='bg-white rounded-t-full w-600 p-20 bg-opacity-70 '>
                <h1 className='hero__title text-blue-900 my-auto mt-8'>Welcome to <br/> our page</h1>
            </div>
        </div>
        </Layout>
    );
};

export default HomePages;