import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirt/Tshirts';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div style={{display : 'grid', gridTemplateColumns : '1fr 1fr 1fr'}}>
            
            {
                data.map(tshirt => <Tshirts key={tshirt._id} tshirt={tshirt}></Tshirts> )
            }
        </div>
    );
};

export default Home;