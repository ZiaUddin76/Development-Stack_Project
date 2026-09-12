import React from 'react';
import type { Itechnology } from '../types/technologytype';

interface AllTechnologyProps {
    technology: Itechnology[];
    stack: Itechnology[];
    handleAddToStack: (tech: Itechnology) => void;
    handleRemoveFromStack: (id: Itechnology['id']) => void
    handleRemoveAll: () => void;
}


const AllTechnology = ({
    technology,
    stack,
    handleAddToStack,
    handleRemoveFromStack,
    handleRemoveAll
}: AllTechnologyProps) => {
    console.log(technology, "all technology")
    return (

        <div className="flex gap-6 px-16">

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


                            <button
                                onClick={() => handleAddToStack(tech)}
                                disabled={stack.some((item) => item.id === tech.id)}
                                className= {`w-full bg-[#0d1728] text-white py-2.5 rounded-lg mt-8 ${
                                    stack.some((item) => item.id === tech.id) 
                                    ? "cursor-not-allowed" : "cursor-pointer"
                                }` }
                            >
                                {stack.some((item) => item.id === tech.id)
                                    ? "✓ Added to Stack" : "Add to Stack"}
                            </button>
                        </div>
                    )
                })}

            </div>


            {/* Your Stack */}
            <div className="w-[220px] h-fit border
             border-gray-200 rounded-xl p-4 bg-white">

                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="text-sm font-semibold text-gray-900">
                            Your Stack
                        </h2>

                        <p className="text-xs text-gray-400 mt-1">
                            {stack.length === 0
                                ? "" : `${stack.length} ${stack.length === 1
                                    ? "Technology" : "Technologies"} Selected `
                            }
                        </p>
                    </div>

                </div>

                {stack.length === 0 ? (
                    <>
                        <p className="text-xs text-gray-400 mt-1">
                            No technologies selected yet.
                        </p>

                        <div className="border border-dashed
                         border-gray-200 rounded-lg mt-3 h-14 flex
                          items-center justify-center">
                            <p className="text-xs text-gray-400">
                                Your stack is empty.
                            </p>

                        </div>

                    </>

                ) :


                    (
                        <div className="space-y-2">
                            {stack.map((tech) => {
                                return (
                                    <div key={tech.id}>
                                        <div
                                            className="flex items-center justify-between
                                        border border-gray-200 rounded-lg p-3">


                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-5 h-5"
                                                />


                                                <div>

                                                    <p className="text-sm font-medium
                                                text-gray-900">{tech.name}</p>
                                                    <p className="text-xs text-gray-400
                                                mt-0.5">{tech.category}</p>
                                                </div>

                                            </div>

                                            <button className="rounded-lg
                                             text-xs text-gray-400 hover:text-red-500 "
                                                onClick={() => handleRemoveFromStack(tech.id)}
                                            >
                                                X
                                            </button>


                                        </div>


                                    </div>

                                )
                            })}

                            <div>
                                {stack.length > 0 && (
                                    <button
                                        onClick={handleRemoveAll}
                                        className="w-full border border-gray-200 rounded-lg py-2 mt-3
                            text-xs text-gray-600"
                                    >

                                        Remove All

                                    </button>
                                )}
                            </div>


                        </div>
                    )





                }

            </div>

        </div>

    );
};

export default AllTechnology;
