import React, { useState } from 'react';
import Logo from '../restaurant image/pngwing.com.png';
import Text1Logo from '../restaurant image/coollogo_com-24739785.png';
import FoodCityLogo from '../restaurant image/coollogo_com-13754828.png';
import Avatar from '../restaurant image/avatar.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { motion } from 'framer-motion';
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth= getAuth(app);
  const provider=new GoogleAuthProvider();

  const [{user,cartShow,cartItems},dispatch]=useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  

  const login = async() => {
    if(!user){
      const { user: { refreshToken, providerData }}= await signInWithPopup(firebaseAuth,provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      console.log("user : ", user);
      localStorage.setItem("user", JSON.stringify(providerData[0]));  
    }
    else{
    // if isMenu is true, when we click on profile login function will trigger then if user is available then setIsMenu will set the value false , when we click again then set the value true this process will happen again when we click 
    // if isMenu is false then it will make true ,if it is true then it will make it false 
      setIsMenu(!isMenu); 
    }
//   const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
  }
  const logout =()=>{
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type : actionType.SET_USER,
      user : null
    })
  }

  const showCart =()=>{
    dispatch({
      type : actionType.SET_CART_SHOW,
      cartShow : !cartShow,
    })
  }
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:py-2 md:px-16 bg-primary">
        {/* desketop and tablet */}
        <div className="hidden md:flex w-ull h-full items-center justify-between ">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} className="w-[70px] object-cover " alt="logo"/>
            <img src={Text1Logo} className="w-[65px] -mx-4 -my-12 object-cover " alt="logo"/>
            <img src={FoodCityLogo} className="-mx-6 w-[170px] object-cover " alt="logo"/>
            {/* <img src={FoodLogo} className="w-16 object-cover " alt="logo"/> */}
            {/* <img src={CityLogo} className="w-12 object-cover " alt="logo"/> */}

            {/* <p className="text-headingColor text-xl font-bold">Food City</p> */}
          </Link>
          <div className="flex items-center gap-8">
            <motion.ul 
              initial={{opacity:0, x:50}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x:50}}
              className="flex items-center gap-8 lg:gap-20"
            >
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </motion.ul>
            <div className="relative flex items-center justify-center" onClick={showCart}>
              <MdShoppingBasket  className="text-textColor text-3xl ml-8 cursor-pointer"/>

              {cartItems && cartItems.length > 0 && (
                  <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center"> 
                    <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                </div>
              )}
              
            </div>
            <div className="relative">
              <motion.img 
                onClick={login} 
                whileTap={{scale:0.9}}
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt='userProfile'
              />
              {
                isMenu && (
                  <motion.div
                    initial={{opacity:0,scale:0.6}}
                    animate={{opacity:1,scale:1}}
                    exit={{opacity:0,scale:0.6}}
                    className="w-36 h-auto shadow-xl rounded-lg bg-orange-300 flex flex-col absolute top-11 right-0"
                  >
                    { 
                      user && user.email === "vinayakkamble691@gmail.com" && (
                        <Link to={"/createItem"} onClick={()=>setIsMenu(false)}>
                          <p className="w-36 h-[48px] px-4 py-2 flex items-center gap-3 hover:border-t-2    hover:border-orange-500 text-lg font-semibold text-white cursor-pointer           hover:bg-slate-100 transition-all duration-200 ease-in-out hover:text-orange-600" >
                              Add Item <span className="text-2xl">+</span> 
                          </p>
                          <p className="h-[1px] w-36 bg-slate-100"></p>
                        </Link>

                    )}
                    <p className="box-border w-36 h-[48px] px-4 py-2 flex items-center gap-3 text-lg font-semibold hover:border-b-2 hover:border-orange-500 text-white cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out hover:text-orange-600 " onClick={logout}>
                      Log Out <MdLogout className="text-2xl"/> 
                    </p>
                  </motion.div>
                )
              }
            </div>
            
          </div>
          
        </div>


        {/* mobile view */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
          <div className="relative flex items-center justify-center" onClick={showCart}>
            <MdShoppingBasket  className="text-textColor text-3xl ml-8 cursor-pointer"/>
            {cartItems && cartItems.length > 0 && (
                  <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center"> 
                    <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                </div>
            )}
          </div>
          <Link to={"/"} className="flex items-center">
            <img src={Logo} className="w-[50px] object-cover " alt="logo"/>
            <img src={Text1Logo} className="w-[40px] -mx-2 -my-12 object-cover " alt="logo"/>
            <img src={FoodCityLogo} className="-mx-[11px] w-[90px] object-cover " alt="logo"/>
          </Link>
          <div className="relative">
            <motion.img 
              onClick={login} 
              whileTap={{scale:0.9}}
              src={user ? user.photoURL : Avatar} 
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl divide-y divide-gray-400 cursor-pointer rounded-full" alt='userProfile'
            />
            {
              isMenu && (
                <motion.div
                  initial={{opacity:0,scale:0.6}}
                  animate={{opacity:1,scale:1}}
                  exit={{opacity:0,scale:0.6}}
                  className="w-32 h-auto shadow-xl rounded-lg bg-orange-300 flex flex-col absolute top-11  right-0"
                >
                  { 
                    user && user.email === "vinayakkamble691@gmail.com" && (
                      <Link to={"/createItem"} onClick={()=>setIsMenu(false)}>
                        <p className="w-32 px-4 py-2 flex items-center gap-2 hover:border-t-2    hover:border-orange-500 font-bold text-white cursor-pointer           hover:bg-slate-100 transition-all duration-100 ease-in-out hover:text-orange-600" >
                            Add Item <span className="text-xl">+</span> 
                        </p>
                      </Link>

                  )}
                  <motion.ul 
                    className="flex flex-col items-center "
                  >
                    <li onClick={()=>setIsMenu(false)} className="w-32 px-4 py-2 flex items-center gap-2 hover:border-t-2    hover:border-orange-500 font-bold text-white cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out hover:text-orange-600">Home</li>
                    <li onClick={()=>setIsMenu(false)} className="w-32 px-4 py-2  flex items-center gap-2 hover:border-t-2 hover:border-orange-500 font-bold text-white cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out hover:text-orange-600">Menu</li>
                    <li onClick={()=>setIsMenu(false)} className="w-32 px-4 py-2  flex items-center  hover:border-t-2 hover:border-orange-500 font-bold text-white cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out hover:text-orange-600">About Us</li>
                    <li onClick={()=>setIsMenu(false)} className="w-32 px-4 py-2  flex items-center gap-2 hover:border-t-2    hover:border-orange-500 font-bold text-white cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out hover:text-orange-600">Service</li>
                  </motion.ul>
                  <p 
                    onClick={logout}
                    className="box-border m-1 py-2 flex justify-center items-center rounded-md gap-2 font-bold bg-orange-600 hover:border-orange-600 text-white cursor-pointer hover:bg-orange-400 transition-all duration-100 ease-in-out hover:text-slate-100"
                  >
                    Log Out <MdLogout className="text-xl"/> 
                  </p>
                </motion.div>
              )
            }
          </div>
        </div>
        
    </header>
  )
}
export default Header;