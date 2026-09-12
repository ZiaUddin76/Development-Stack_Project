import React, { use } from 'react';
import type { Itechnology } from '../types/technologytype';
import AllTechnology from './AllTechnology';

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>;
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    // console.log(technologyPromise);
    const technology = use(technologyPromise);

    return (
        <div>


            <div className="mt-20 mb-10">
                <h2 className="font-bold text-4xl">Explore the
                    <span className=" bg-gradient-to-r from-pink-500 to-pink-700 
                 bg-clip-text text-transparent"> Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>



            <AllTechnology technology={technology} />


        </div>
    );
};

export default Technology;