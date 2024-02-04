'use client'
import React from 'react';

interface CardSectionProps {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
}

const CardSection = (props: CardSectionProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-wrap font-mono bg-slate-50 dark:bg-slate-900">
            <img
                src={props.image}
                alt={props.name}
                className="w-full h-auto max-h-[384px]" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-red-500">
                    {props.name}
                </div>
                <p className="text-black dark:text-white">
                    Status: {props.status}
                </p>
                <p className="text-black dark:text-white">
                    Species: {props.species}
                </p>
                <p className="text-black dark:text-white">
                    Gender: {props.gender}
                </p>
                <p className="text-black dark:text-white">
                    Origin:   {props.origin}
                </p>
                <br></br>
            </div>
        </div>
    );
};

export default CardSection;
