import React from 'react'
import Delivery from "../restaurant image/delivery.png";
import HeroBg from "../restaurant image/heroBg.png";
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
       <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in {" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>
        <p className="text-base text-textColor text-center md:w-[80%] md:text-left ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-[650px]" alt='hero-bg'/>
        <div className="w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center py-4 lg:px-2 gap-4 lg:gap-10 ">
          { heroData && heroData.map((item)=>(
            <div key={item.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center shadow-2xl">
              <img src={item.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt='i1'/>
              <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{item.name}</p>
              <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3">{item.description}</p>
              <p className="text-sm font-semibold text-headingColor">
                  <span className="text-sm text-red-600 ">₹</span> {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer