import React from "react"
import useFetch from "../hooks/useFetch"
import Button from "./Button"
import { useCompareStore } from "../lib/store"
import { useNavigate } from "react-router"
import { STATUS } from "../constants"
import { FaSort } from "react-icons/fa6"
import toast from "react-hot-toast"
import Loader from "./Loader"

const ProductsTable = () => {
  const {
    products,
    status,
    handleSortByDiscount,
    handleSortByBrand,
    handleSortByPrice,
    handleSortByCategory,
  } = useFetch()
  const compareProducts = useCompareStore((state) => state.products)
  const addProduct = useCompareStore((state) => state.addProduct)
  const navigate = useNavigate()

  const handleCompare = (product) => {
    if (compareProducts.length >= 4) {
      toast.error("You can only compare up to 4 products")
      return
    }
    addProduct(product)
    toast.success("Product added to comparison")
    navigate("/compare-products")
  }

  if (status === STATUS.PENDING) {
    return <Loader />
  }

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-zinc-500 border-b border-black/10">
          <tr>
            <th scope="col" className="py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              <button
                onClick={handleSortByBrand}
                className="flex items-center cursor-pointer space-x-2"
              >
                <span>Brand</span>
                <FaSort size={10} />
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button
                onClick={handleSortByCategory}
                className="flex items-center cursor-pointer space-x-2"
              >
                <span>Category</span>
                <FaSort size={10} />
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button
                onClick={handleSortByPrice}
                className="flex items-center cursor-pointer space-x-2"
              >
                <span>Price</span>
                <FaSort size={10} />
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button
                onClick={handleSortByDiscount}
                className="flex items-center cursor-pointer space-x-2"
              >
                <span>Discount</span>
                <FaSort size={10} />
              </button>
            </th>
            <th scope="col" className="pl-6 py-3">
              <div className="text-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const {
              title,
              thumbnail,
              price,
              brand,
              discountPercentage,
              category,
            } = product
            return (
              <tr key={product.id} className="text-xs border-b border-black/10">
                <th
                  scope="row"
                  className="py-2 font-medium whitespace-nowrap text-white"
                >
                  <img
                    src={thumbnail}
                    alt={title}
                    width={60}
                    height={60}
                    className="object-cover bg-gray-100 rounded-lg"
                  />
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  {title}
                </th>
                <td className="px-6 py-2"> {brand || "N/A"} </td>
                <td className="px-6 py-2 capitalize"> {category} </td>
                <td className="px-6 py-2"> ${price} </td>
                <td className="px-6 py-2"> {discountPercentage}%</td>
                <td className="pl-2 py-2 text-right">
                  <Button
                    onClick={() => handleCompare(product)}
                    title={"Compare"}
                    disabled={compareProducts.some((p) => p.id === product.id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
