import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>This is Home</h2>
            {
                data.map(tshirt => <p> {tshirt._id} </p> )
            }
        </div>
    );
};

export default Home;