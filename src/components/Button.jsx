import React from "react"

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-gray-200 cursor-pointer hover:bg-gray-200/50 px-4 py-2 rounded-md font-semibold disabled:bg-gray-100 text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  )
}

export default Button
