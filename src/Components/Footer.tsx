

const Footer = () => {
    return (


        <div className="">
            <div className="px-16 pt-25 pb-15 flex gap-50">

                {/* c1 */}
                <div>

                    <div className="pb-4">
                        <img src="/src/assets/logo-text.png" alt=""
                            className="" />
                    </div>

                    <div className="pb-4">
                        <p className="text-[#64748b]">Curated tools, technologies,
                            and resources for developers building modern software.</p>
                    </div>

                    <div>

                        <ul className="flex gap-4 text-[#475569] ">
                            <li><a href="">Github</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>

                    </div>


                </div>


                {/* c2 */}

                <div>

                    <h3 className="font-bold pb-3">PRODUCT</h3>

                    <ul className="text-[#64748b]">
                        <li className="pb-2"><a href="">Home</a></li>
                        <li className="pb-2"><a href="">Technologies</a></li>
                        <li className="pb-2"><a href="">Projects</a></li>
                    </ul>


                </div>


                {/* c3 */}

                <div className="px-30">

                    <h3 className="font-bold pb-3">COMPANY</h3>

                    <ul className="text-[#64748b]">
                        <li className="pb-2"><a href="">About</a></li>
                        <li className="pb-2"><a href="">Contact</a></li>
                        <li className="pb-2"><a href="">Careers</a></li>
                    </ul>


                </div>



                {/* c4 */}

                <div className="px-25">

                    <h3 className="font-bold pb-3">LEGAL</h3>

                    <ul className="text-[#64748b]">
                        <li className="pb-2"><a href="">Privacy Policy</a></li>
                        <li className="pb-2"><a href="">Terms of Services</a></li>
                    </ul>

                </div>

            </div>


            {/* bottom */}

            <div className="px-16 pb-8">
                <div className="pt-10 flex justify-between text-[#94a3b8]
            border border-[#f1f5f9]">

                    <div>
                        <p>
                            © 2026 Dev Stack. All rights reserved.</p>
                    </div>

                    <div>
                        <ul className="flex gap-6">
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms</a></li>
                        </ul>
                    </div>

                </div>
            </div>



        </div>


    );
};

export default Footer;