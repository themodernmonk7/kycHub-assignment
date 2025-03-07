import { create } from "zustand"

export const useCompareStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      if (state.products.length >= 4) return state
      if (state.products.some((p) => p.id === product.id)) return state
      return { products: [...state.products, product] }
    }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  clearProducts: () => set({ products: [] }),
}))
