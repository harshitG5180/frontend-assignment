import React from 'react';
import person from "../assests/hero-section.jpg";
import play from "../assests/play1.png";
import man from "../assests/man.png";

const HeroSection = () => {
    return (
        <section className="bg-customRed text-white p-10 ml-10 mr-10 mt-5 mb-10 rounded-3xl ">
            <div className=''>
                <img src={play} alt="illustration" className=" h-24 absolute top-20 right-5" />
            </div>
            <div className=''>
                <img src={man} alt="illustration" className=" h-72 absolute top-20 left-5" />
            </div>

            <div className="container mx-auto flex flex-col items-center md:flex-row pr-32 pl-32">

                <div className="md:w-1/2 text-right mr-16">
                    <div className="text-white font-bold text-4xl mb-8 mt-32">witt.</div>
                    <h1 className="text-8xl font-bold mb-4">your second brain</h1>
                    <p className="text-lg mb-4  ">a personal assistant to <br /> organize, track and <br />document your work</p>

                    <button className="bg-black  text-white  py-4 px-6  rounded-full ">Download for Free</button>
                </div>

                <div className="md:w-1/2">
                    <img src={person} alt="illustration" className="w-full h-full" />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
