import React from 'react';
import type { Itechnology } from '../types/technologytype';

const AllTechnology = ({ technology }: { technology: Itechnology[] }) => {
    console.log(technology, "all technology")
    return (

        <div className="flex gap-6">

            {/* Technology cards */}
            <div className="grid grid-cols-3 gap-6 flex-1">

                {technology.map((tech: Itechnology) => {
                    return (
                        <div
                            key={tech.id}
                            className="border border-gray-200 rounded-xl p-5 bg-white h-80"
                        >
                            <div className="flex justify-between items-start">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10"
                                />

                                <span className="text-xs text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                                    Popular
                                </span>
                            </div>

                            <h2 className="text-xl font-semibold mt-5">
                                {tech.name}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2 max-w-[250px]">
                                {tech.description}
                            </p>

                            <div className="flex justify-between items-center mt-5 text-xs">
                                <span className="bg-gray-50 px-2 py-1">
                                    {tech.category}
                                </span>

                                <span>
                                    {tech.difficulty}
                                </span>

                                <span className="text-yellow-500">
                                    ⭐ {tech.rating}
                                </span>
                            </div>

                            <button className="w-full bg-[#0d1728] text-white py-2.5 rounded-lg mt-8">
                                Add to Stack
                            </button>
                        </div>
                    )
                })}

            </div>


            {/* Your Stack */}
            <div className="w-[220px] h-fit border border-gray-200 rounded-xl p-4 bg-white">

                <h2 className="text-sm font-semibold text-gray-900">
                    Your Stack
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                    No technologies selected yet.
                </p>

                <div className="border border-dashed border-gray-200 rounded-lg mt-3 h-14 flex items-center justify-center">
                    <p className="text-xs text-gray-400">
                        Your stack is empty.
                    </p>
                </div>

            </div>

        </div>

    );
};

export default AllTechnology;
