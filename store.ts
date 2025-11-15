import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./sanity.types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (product: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubtotalPrice: () => number;
  getItemCount: (Product: string) => number;
  getGroupedItm: () => CartItem[];
}

// const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       addItem: (product) =>
//         set((state) => {
//           const existingItem = state.items.find(
//             (item) => item.product._id === product._id
//           );
//           if (existingItem) {
//             return {
//               items: state.items.map((item) =>
//                 item.product._id === product._id
//                   ? { ...item, quantity: item.quantity + 1 }
//                   : item
//               ),
//             };
//           } else {
//             return { items: [...state.items, { product, quantity: 1 }] };
//           }
//         }),
//           removeItem: (prodcutId) => set((state) => ({
//               items: state.items.reduce((acc, item) => {
//                   if (item.product._id === prodcutId) {
                      
//                   } else {
//                       acc.push(item)
//                   }
//               })
//           }))
//     }),
//     { name: "cart-store" }
//   )
// );
