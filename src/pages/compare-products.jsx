import React, { useState } from "react"
import { useCompareStore } from "../lib/store"
import Button from "../components/Button"
import ProductModal from "../components/ProductsModal"
import { RxCross1 } from "react-icons/rx"

const CompareProducts = () => {
  const [open, setOpen] = useState(false)
  const products = useCompareStore((state) => state.products)
  const removeProduct = useCompareStore((state) => state.removeProduct)

  return (
    <div>
      {open && <ProductModal open={open} setOpen={setOpen} />}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Products Comparison
        </h1>
        <p className="text-lg text-gray-600">
          Compare your favorite products side by side
        </p>
        <div className="mt-4">
          {products.length > 0 && (
            <Button onClick={() => setOpen(true)} title={"Add more Products"} />
          )}
        </div>
      </div>

      {products.length > 0 ? (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600 w-40">
                    Features
                  </th>
                  {products.map((product) => (
                    <th key={product.id} className="py-4 px-6 text-left">
                      <div className="space-y-4">
                        <div className="rounded-lg bg-gray-100 w-32 h-32 relative ">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="absolute -top-2 -right-2 p-1 cursor-pointer hover:bg-gray-200/40 bg-gray-200 rounded-full w-5 h-5 flex justify-center items-center"
                          >
                            {" "}
                            <RxCross1 />{" "}
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Category
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                        {product.category}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Name
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      {product.title}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Brand
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      {product?.brand || "N/A"}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Regular Price
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      ${product.price}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Discount
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      <span className="text-green-600 font-medium">
                        {product.discountPercentage}% off
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    Final Price
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="py-4 px-6 text-sm text-gray-500"
                    >
                      $
                      {(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-3">
          <p className="text-muted-foreground">
            No products selected for comparison
          </p>
          <Button onClick={() => setOpen(true)} title={"Add Products"} />
        </div>
      )}
    </div>
  )
}

export default CompareProducts
