import { useEffect, useState } from "react"
import { API_URL, STATUS } from "../constants"
import toast from "react-hot-toast"

const useFetch = () => {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState(STATUS.IDLE)

  const fetchData = async (url) => {
    setStatus(STATUS.PENDING)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to fetch data, ${response.status}`)
      }
      const data = await response.json()
      setProducts(data.products)
      setStatus(STATUS.SUCCESS)
    } catch (error) {
      toast.error(error.message)
      setStatus(STATUS.REJECTED)
    }
  }

  useEffect(() => {
    fetchData(API_URL)
  }, [])

  const handleSortByBrand = () => {
    setProducts(
      [...products].sort((a, b) => {
        const brandA = a.brand || ""
        const brandB = b.brand || ""
        return brandA.localeCompare(brandB)
      })
    )
  }

  const handleSortByCategory = () => {
    setProducts(
      [...products].sort((a, b) => a.category.localeCompare(b.category))
    )
  }

  const handleSortByPrice = () => {
    setProducts([...products].sort((a, b) => a.price - b.price))
  }

  const handleSortByDiscount = () => {
    setProducts(
      [...products].sort((a, b) => b.discountPercentage - a.discountPercentage)
    )
  }

  return {
    products,
    status,
    handleSortByDiscount,
    handleSortByBrand,
    handleSortByPrice,
    handleSortByCategory,
  }
}

export default useFetch
