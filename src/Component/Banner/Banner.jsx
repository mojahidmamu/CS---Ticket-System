import React from 'react';
import Banner1 from "../../assets/vector1.png"

const Banner = () => {
    return (
         <div className="flex flex-col sm:flex-row gap-4 p-4">
            {/* In-Progress Card */}
            <div
                className="flex-1 rounded-xl text-white p-6 flex flex-col justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${Banner1})` }}
            >
                <h2 className="text-lg font-semibold mb-2">In-Progress</h2>
                <p className="text-4xl font-bold">0</p>
            </div>

            {/* Resolved Card */}
            <div
                className="flex-1 rounded-xl text-white p-6 flex flex-col justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${Banner1})` }}
            >
                <h2 className="text-lg font-semibold mb-2">Resolved</h2>
                <p className="text-4xl font-bold">0</p>
            </div>
    </div>
    );
};

export default Banner;