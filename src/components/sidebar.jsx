import React from "react"
import { sidebarLinks } from "../constants"
import { NavLink } from "react-router"

const Sidebar = () => {
  return (
    <aside className="fixed top-12 left-0 z-40 w-48 h-screen ">
      <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-900">
        <ul className="space-y-2 font-medium text-sm">
          {sidebarLinks.map((link) => (
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg text-white hover:bg-zinc-800 space-x-2 group ${
                    isActive ? "bg-zinc-800" : "text-black"
                  }`
                }
                key={link.id}
                to={link.url}
              >
                <span> {link.icon} </span>
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
