import React, { use, useState } from 'react';
import type { Itechnology } from '../types/technologytype';
import AllTechnology from './AllTechnology';

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>;
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    // console.log(technologyPromise);
    const technology = use(technologyPromise);
    
    const [stack, setStack] = useState<Itechnology[]>([])

    const handleAddToStack = (tech: Itechnology) => {
        if(stack.some((item) => item.id === tech.id)) {
            // alert( `${tech.name} is already in your stack!`)
            
            return;
        }
        setStack([...stack, tech]);
    };

    const handleRemoveFromStack = (id: Itechnology['id']) => {
        setStack(stack.filter((tech)=> tech.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <div>


            <div className="mt-20 mb-10 px-16">
                <h2 className="font-bold text-4xl">Explore the
                    <span className=" bg-gradient-to-r from-pink-500 to-pink-700 
                 bg-clip-text text-transparent"> Technologies</span></h2>
                <p className="text-[#475569] pt-3">Pick one technology per category to build your ideal stack.</p>
            </div>



            <AllTechnology
            technology={technology}
            handleAddToStack={handleAddToStack}
            stack={stack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
            />


        </div>
    );
};

export default Technology;