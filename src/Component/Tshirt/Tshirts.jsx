import React from 'react';
import './Tshirt.css';

const Tshirts = ({tshirt}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='tshirt'>
            <img className='tshirt-img' src={picture} alt="" />
            <h3>{name}</h3>
            <button>Details</button>
        </div>
    );
};

export default Tshirts;