import React, { useState } from 'react';
import { useEffect } from 'react';


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))


    }, []);
    return (
        <>
            <div>
                <div className='grid grid-cols-2 ml-12 gap-4 '>
                    <div class="w-full ">
                        <h2 className='text-2xl font-bold my-2'>All Products</h2>

                    </div>
                    <div class="w-full flex ml-64">
                        <h2 className='m-2 py-2 font-semibold'>Sort by:</h2>
                        <select class="select select-bordered rounded-none my-2 w-s ">
                            <option disabled selected>All Products </option>
                            <option>All Products</option>
                            <option>Best Value</option>
                            <option>Best Performance</option>
                            <option>Best Camera</option>
                        </select>

                    </div>
                </div>
            </div>
            <div class="w-full ">
                <table className="table bg-white w-full px-12">
                    <thead className='bg-white'>
                        <tr>
                            <th className='pl-12'>Model</th>
                            <th>Ram/Rom</th>
                            <th>Tag</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {
                        products.slice(0, 3).map((product) => (

                            <>


                                <tbody>

                                    <tr>
                                        <td className='lg:pl-12'>
                                            <div class="flex lg:w-28">
                                                <div class="avatar">
                                                    <div class=" h-20">
                                                        <img src={product.img} />
                                                    </div>
                                                </div>
                                                <div className='lg:ml-4'>
                                                    <div class="font-bold">{product.name}</div>
                                                    <div class="text-sm opacity-50">{product.brand}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='lg:w-32'>
                                            {product.ramrom}
                                        </td>
                                        <td className='lg:w-96 mx-auto'>

                                            <div className=' grid grid-cols-2 w-96 '>
                                                <button class="btn lowercase m-1 bg-white rounded-sm text-[#0095A0] ">{product.speciality[0]}</button>
                                                <button class="btn lowercase m-1 bg-white rounded-sm text-[#0095A0] ">{product.speciality[1]}</button>
                                                
                                            </div>
                                        </td>
                                        <td>
                                            TK {product.price}
                                        </td>
                                    </tr>
                                </tbody>

                            </>

                        ))
                    }
                </table>
            </div>
        </>
    );
};

export default AllProducts;