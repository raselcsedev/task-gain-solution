import React from 'react';

const AddProduct = () => {
  return (
    <>
      {/* <div class="navbar bg-[#0095A0]">
        <div class="flex-1 mx-20">
          <a class="btn btn-ghost normal-case text-white text-xl">Add Product</a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control ">
            <body class="p-2">
            </body>
          </div>
          <div>
            <Link to='addProduct'><button class="btn btn-ghost mr-20 rounded-none text-white ">x</button></Link>

          </div>
        </div>
      </div> */}

      <div>
        <form className='mx-20'>
          <div class="form-control my-2 w-full ">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input type="text" placeholder="Enter your product name" class="input input-bordered rounded-xs w-full " />
          </div>

          <div className='grid grid-cols-2 gap-4 my-2'>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Brand</span>
              </label>
              <input type="text" placeholder="Enter brand name" class="input input-bordered rounded-xs w-full " />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Ram/Rom</span>
              </label>
              <input type="text" placeholder="Zip code" class="input input-bordered rounded-xs w-full " />
            </div>
          </div>

          <div class="form-control w-full my-2">
            <label class="label">
              <span class="label-text">Tags</span>
            </label>
            <select class="select select-bordered w-full">
              <option disabled selected>Search and Select</option>
              <option>Best Value</option>
              <option>Best Performance</option>
              <option>Best Camera</option>
            </select>
          </div>

          <div class="form-control w-full my-2">
            <label class="label">
              <span class="label-text">Price Name</span>
            </label>
            <input type="text" placeholder="Enter your price name" class="input input-bordered rounded-xs w-full " />

          </div>

          <div className='flex gap-4  mx-end '>
            <button class="btn btn-active btn-danger">Cancel</button>
            <button class="btn btn-active btn-primary">Publish  </button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default AddProduct;