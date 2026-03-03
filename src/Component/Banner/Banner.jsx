import React from 'react';
import Banner1 from "../../assets/vector1.png"

const Banner = () => {
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    // className='#422AD5'
                    src={Banner1}
                    alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;