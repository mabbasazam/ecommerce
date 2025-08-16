import React from "react";

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">Abbas</p>
        <p>Allama Iqbal Town Lahore</p>
        <div>
          <p className="font-semibold">Phone Number</p>
          <p>34567898765</p>
        </div>
        {/* <button
            type="submit"
            className="uppercase mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Deliver Here
          </button> */}
      </div>
    </div>
  );
};

export default AddressCard;
