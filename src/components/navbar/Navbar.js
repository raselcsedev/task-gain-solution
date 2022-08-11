import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

<div class="navbar bg-[#0095A0]">
  <div class="flex-1 mx-20">
    <a class="btn btn-ghost normal-case text-white text-xl">LOGO</a>
    <Link to='/' class="btn btn-ghost normal-case text-white text-xl">Home</Link>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control ">
    <body class="p-2">
    <form>
        <label class="relative block">
            <input
                class="w-full bg-[#0095A0] text-white placeholder: border border-white drop-shadow-md py-3 pl-3 pr-10 focus:outline-none"
                placeholder="Search by Title or Brand" type="text" />

            <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span>
        </label>
    </form>
</body>
    </div>
    <div>
    <Link  to='addProduct'><button class="btn mr-20 bg-white rounded-none text-[#0095A0] ">Add Product</button></Link>
    
    </div>
  </div>
</div>
            
        </>
    );
};

export default Navbar;