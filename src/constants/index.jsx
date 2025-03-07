export const API_URL = "https://dummyjson.com/products"
import { HiShoppingBag, HiViewGrid, HiUser } from "react-icons/hi"
export const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  REJECTED: "rejected",
}

export const sidebarLinks = [
  {
    id: 1,
    title: "Product details",
    url: "/",
    icon: <HiShoppingBag className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Compare Products",
    url: "/compare-products",
    icon: <HiViewGrid className="h-6 w-6" />,
  },
]
