import React from 'react';
import BG1 from "../../assets/vector1.png";
import BG2 from "../../assets/vector2.png";

const Banner = ({inProgressCount , resolvedCount}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4">
            {/* In-Progress Card */}
            <div
                className="flex-1 rounded-xl text-white p-6 flex flex-col justify-center items-center"
                style={{ 
                    background: `url(${BG1}),  linear-gradient(135deg, #422AD5 0%,  #422AD5 100%)`,
                    backgroundSize: "150px, cover"
                }}
            >
                <h2 className="text-lg font-semibold mb-2">In-Progress</h2>
                <p className="text-4xl font-bold">{inProgressCount}</p>
            </div>

            {/* Resolved Card */}
            <div
                className="flex-1 rounded-xl text-white p-6 flex flex-col justify-center items-center"
                style={{ 
                    background: `url(${BG1}),  linear-gradient(135deg, #54CF68 0%, #00827A 100%)`,
                    backgroundSize: "150px, cover"
                }}
            >
                <h2 className="text-lg font-semibold mb-2">Resolved</h2>
                <p className="text-4xl font-bold">{resolvedCount}</p>
            </div>
        </div>
    );
};

export default Banner;