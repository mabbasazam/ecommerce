'use client';

import React from 'react';
import AddressCard from './AddressCard';

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipcode: e.target.zipcode.value,
      phonenumber: e.target.phonenumber.value,
    };
    console.log(formData);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Address Card - Left Side */}
        <div className="lg:w-1/3 p-6 shadow-lg border border-gray-200 rounded-lg bg-white">
          <AddressCard />
        </div>

        {/* New Address Form - Right Side */}
        <div className="lg:w-2/3 p-6 shadow-lg border border-gray-200 rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter First Name"
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Last Name"
                  type="text"
                  id="lastname"
                  name="lastname"
                  required
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address *
                </label>
                <textarea
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-24 resize-y"
                  placeholder="Enter Full Address"
                  id="address"
                  name="address"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter City"
                  type="text"
                  id="city"
                  name="city"
                />
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter State"
                  type="text"
                  id="state"
                  name="state"
                />
              </div>

              {/* Zip/Postal Code */}
              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                  Zip/Postal Code *
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Zip/Postal Code"
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="">
                <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  className="mt-1 py-2 px-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Phone Number"
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="uppercase mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Deliver Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;