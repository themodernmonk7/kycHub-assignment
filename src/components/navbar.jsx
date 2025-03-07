import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-900">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <NavLink to="" className="flex ms-2 md:me-24">
              <img src="/logo.svg" className="h-8 me-3" alt="Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                Pickly
              </span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full"
              src="/john.jpg"
              alt="user photo"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
