const Loader = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-7 py-2">
          <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>{" "}
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
          <div className="w-28 h-3 rounded-md bg-gray-200"></div>
        </div>
      ))}
    </div>
  )
}

export default Loader
