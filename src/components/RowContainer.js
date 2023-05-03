import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../restaurant image/NotFound.svg'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import CartItem from './CartItem'; 
const RowContainer = ({ flag,data,scrollValue }) => {

    const rowContainer = useRef();
    const [{cartItems},dispatch]=useStateValue();
    // console.log("cartItems : ", cartItems);
    const [items, setItems] = useState([]);
    const addToCart = () => {
        // console.log("item : ",item);
        dispatch({
            type : actionType.SET_CART_ITEMS,
            cartItems : items,
        });
        localStorage.setItem("cartItems",JSON.stringify(items));
    };

    useEffect( () => {
        addToCart();
    }, [items] );

    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
        // console.log("scroll value : ",scrollValue)
    },[scrollValue]);


    return (

    <div ref={rowContainer} className={`w-full flex items-center my-12 scroll-smooth gap-4 ${ flag ?  "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center" }`}>

        {data && data.length > 0 ? data.map((item) => (

            <div key={item.id} className="w-280 min-w-[280px] md:w-300 md:min-w-[300px] h-auto my-12 bg-cardOverlay roundedo-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
            <div className="w-full flex items-center justify-between">
                <motion.img whileHover={{ scale : 1.1 }} src={item?.imageURL}
                alt="" className="w-32 h-32 object-contain md:w-40 -mt-8 drop-shadow-2xl" 
                />
                <div className="flex flex-col items-end justify-between gap-4">
                    <motion.div whileTap={{ scale : 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md" onClick={()=>setItems([...cartItems,item])}>
                        <MdShoppingBasket className="text-white"/>
                    </motion.div>
                    <div>
                        <div className="flex items-center justify-end">
                            <p className="text-xl text-headingColor font-semibold">
                                <span className="text-xl text-red-600">₹ </span>{item?.price}
                            </p>
                        </div>
                        <p className="text-sm text-gray-500">
                            {item?.calories}  calories  
                        </p>
                    </div>
                </div>
            </div>
            <div className="ml-2 mt-2 w-full flex items-center  gap-2">
                <p className="text-textColor font-semibold text-xl md:text-xl whitespace-normal">
                    {item?.title} 
                </p>
               
            </div>
        </div>
        )) :(
            <div className="w-full flex flex-col items-center justify-center">
                <img src={NotFound} className="h-340" />
                <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
            </div>
        )}
        
    </div>
  )
}

export default RowContainer;