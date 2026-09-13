

const Hero = () => {
    return (
        <section className="mt-16 px-12 md:px-10 lg:px-16 pt-6 ">

            <div className="flex justify-between ">

                <div>

                    <div className="pb-4">
                        <h1 className="font-bold text-4xl">Build Your Ideal</h1>
                        <h1 className="font-bold text-4xl
                        brand-gradient-text">Development Stack</h1>
                        {/* <h1 className="font-bold text-4xl
                        bg-gradient-to-r
                        from-orange-500 to-purple-700 bg-clip-text
                        text-transparent">Development Stack</h1> */}
                    </div>

                    <p className="text-[#475569] ">Explore frontend, backend, database, and tooling options,<br />
                        compare them side by side, and put together the stack that fits your <br />
                        next project.</p>

                    <div className="pt-6 flex gap-3">
                        <button className="brand-gradient
                        text-[white] px-3 py-2 rounded-lg hover:opacity-90 cursor-pointer">
                            Explore Technologies</button>
                        <button  className="border border-gray-300 text-[black] 
                        px-10 py-2 rounded-lg hover:opacity-60 cursor-pointer ">
                            Learn More</button>
                    </div>

                </div>

                <div className="">
                    <img src="/src/assets/banner-stack.png" alt="" 
                    className="-mt-15 w-[350px] h-[350px] " />
                </div>

            </div>

        </section>
    );
};

export default Hero;