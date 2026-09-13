import React, { use, useState } from 'react';
import type { Itechnology } from '../types/technologytype';
import AllTechnology from './AllTechnology';
import { Bounce, ToastContainer, toast } from 'react-toastify';

interface TechnologyProps {
    technologyPromise: Promise<Itechnology[]>;
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    // console.log(technologyPromise);
    const technology = use(technologyPromise);

    const [stack, setStack] = useState<Itechnology[]>([])

    const handleAddToStack = (tech: Itechnology) => {
        if (stack.some((item) => item.id === tech.id)) {
            // alert( `${tech.name} is already in your stack!`)
            return;
        }

        setStack([...stack, tech]);

        toast.success(`${tech.name} added to your stack!`)

    };

    const handleRemoveFromStack = (id: Itechnology['id']) => {
        setStack(stack.filter((tech) => tech.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <div>


            <div className="mt-20 mb-10 px-16">
                <h2 className="font-bold text-4xl">Explore the
                    <span className="brand-gradient-text "> Technologies</span></h2>
                <p className="text-[#475569] pt-3">
                    Pick one technology per category to build your ideal stack.</p>
            </div>



            <AllTechnology
                technology={technology}
                handleAddToStack={handleAddToStack}
                stack={stack}
                handleRemoveFromStack={handleRemoveFromStack}
                handleRemoveAll={handleRemoveAll}
            />


            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />


        </div>
    );
};

export default Technology;