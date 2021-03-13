import React from 'react'

const Popup = () => {
  return (
    <div className="rounded h-full flex justify-center items-center">
      <div className="rounded bg-white shadow-md h-48 w-48 p-6 flex flex-col justify-around">
        <div>
          <p className="text-base text-gray-600">Revenue</p>
        </div>
        <div>
          <p className="text-2xl text-gray-700 font-bold">$56,734</p>
        </div>
        <div className="text-sm">
          <p className="text-green-500 mb-1 flex item-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 14l5-5 5 5z" />
            </svg>{' '}
            5.77%
          </p>
          <p className="text-gray-600">Since last month</p>
        </div>
      </div>
    </div>
  )
}

export default Popup
