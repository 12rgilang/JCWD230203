import React, {useState} from "react";
import { RiFilterOffLine } from "react-icons/ri";
import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineHolidayVillage,
} from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Filter from "../filter/Filter";
import { Link } from "react-router-dom";
import Location from "components/navbar/location";
import axios from "axios";

const Type = (props) => {

  const [form, setForm] = useState({
    propertyName: '',
    lowerPrice: '',
    higherPrice: '',
    ascending: false,
    descending: false
  })

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    const _form = {
      ...form,
      [name]: type === 'checkbox' ? checked : value
    }
    setForm(_form)
  }


  const handleClick = async(index, event) => {

    let res = await axios.get(`http://localhost:5000/properties/search-rooms?property_name=surabaya&price_min=100&price_max=700000&sort_order=asc&page=2`)
    props.handleType(index);

  };
  

  const sorting = [
    // { title: "All Property", icon: <GiBrickWall /> },
    { title: "Apartments", icon: <MdOutlineApartment /> },
    { title: "Guest Houses", icon: <MdHouseSiding /> },
    { title: "Hotels", icon: <FaHotel /> },
    { title: "Villas", icon: <MdOutlineHolidayVillage /> },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center gap-3 sm:gap-4 h-8 my-4">
        {sorting.map((obj, index) => (
          <Link to={`/category/${index + 1}`} key={index}>
            <Filter
              title={obj.title}
              icon={obj.icon}
              onClick={() => handleClick(index)}
            />
          </Link>
        ))}
        <span className="flex items-center text-white bg-[#c9403e] hover:bg-white hover:text-[#c9403e] duration-200 ease-out gap-2 px-5 sm:mx-0 md:mx-1 lg:mx-1 rounded-full text-[14px] sm:text-[16px] mb-2 pointer">
          <RiFilterOffLine
            className="flex lg:hidden"
            data-te-offcanvas-toggle
            data-te-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            data-te-ripple-init
            data-te-ripple-color="light"
          />
          <button
            className="hidden lg:flex"
            data-te-offcanvas-toggle
            data-te-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Filter by
          </button>
        </span>

        <div
          class="invisible fixed bottom-0 top-0 left-0 right-0 z-[1045] flex h-1/3 max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
          data-te-offcanvas-init
        >
          <div class="flex items-center justify-between p-4">
            <h5
              class="mb-0 font-semibold leading-normal"
              id="offcanvasTopLabel"
            >
              Choose Your Requirement
            </h5>
            <button
              type="button"
              class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-offcanvas-dismiss
            >
              <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* FIlter By: */}
          <div className="flex flex-wrap justify-center lg:text-left md:mt-10">
            <div className="mb-6 md:mb-0">
              <div className="md:flex flex-row items-center">
                <div className="mb-10 lg:mb-0 mr-0 lg:mr-3 ">
                  <h2 className="text-3xl font-bold">
                    Filter by:
                    <br />
                  </h2>
                </div>

                <div className="mb-6 md:mb-0">
                  <div className="md:flex flex-row">
                    {/* property Name */}
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Where You want to stay ?"
                      onChange={handleChange}
                      value={form.propertyName}
                      name='propertyName'
                    />
                  </div>
                </div>
                <div className="mb-10 lg:mb-0 mr-0 lg:mr-3 ">
                    <div className="text-3xl font-bold">
                      Price :
                      <br />
                    </div>
                  </div>
                <div className="mb-6 md:mb-0">
                  <div className="md:flex flex-row">
                    {/* property Name */}
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Lowest price"
                      onChange={handleChange}
                      value={form.lowerPrice}
                      name='lowerPrice'
                    />
                  </div>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className="md:flex flex-row">
                    {/* property Name */}
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Higher Price"
                      onChange={handleChange}
                      value={form.higherPrice}
                      name='higherPrice'
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="asc-desc flex flex-row justify-center items-center">
                  {/* ascending */}
                  <div className="mb-6 md:mb-0">
                    <div className="md:flex flex-row">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="ascending"
                        onChange={handleChange}
                        checked={form.ascending}
                        value={'true'}
                        name='ascending'
                      />
                      <label
                        className="form-check-label inline-block text-white"
                        for="ascending"
                      >
                        Asc
                      </label>

                      {/* descending */}
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 ml-2 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="descending"
                        onChange={handleChange}
                        checked={form.descending}
                        value={'true'}
                        name='descending'
                      />
                      <label
                        className="form-check-label inline-block text-white"
                        for="descending"
                      >
                        Desc
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:text-left">
              <div className="mb-6 ml-4 md:mb-0">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 my-bg-main text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
