import { Modal } from "antd"
import useFetch from "../hooks/useFetch"
import { useCompareStore } from "../lib/store"
import { STATUS } from "../constants"
import Button from "./Button"
import toast from "react-hot-toast"

const ProductsModal = ({ open, setOpen }) => {
  const { products, status } = useFetch()
  const compareProducts = useCompareStore((state) => state.products)
  const addProduct = useCompareStore((state) => state.addProduct)

  const handleAddProduct = (product) => {
    if (compareProducts.length >= 4) {
      toast.error("You can only compare up to 4 products")
      return
    }
    addProduct(product)
    toast.success("Product added to comparison")
    setOpen(false)
  }

  return (
    <div>
      <Modal
        title={<p> Add Products to Compare </p>}
        loading={status === STATUS.PENDING}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="grid gap-4 h-full max-h-72 overflow-y-scroll">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.brand} • ${product.price}
                </p>
              </div>
              <Button
                title="Add to compare"
                onClick={() => handleAddProduct(product)}
                disabled={compareProducts.some((p) => p.id === product.id)}
              />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default ProductsModal
