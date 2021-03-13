import React from 'react'
import PropTypes from 'prop-types'

const MessageButton = ({ count }) => {
  return (
    <button className="flex items-center relative shadow bg-teal-500 pt-2 pb-2 pl-4 pr-4 text-white hover:bg-teal-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M22 2H2.01L2 22l4-4h16V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>{' '}
      Messages
      <span className="absolute right-0 top-0 -mt-2 -mr-2 rounded-full bg-red-500 p-1 text-xs shadow w-6 h-6">
        {count}
      </span>
    </button>
  )
}

MessageButton.propTypes = {
  count: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

MessageButton.defaultProops = {
  count: 12,
}

export default MessageButton
