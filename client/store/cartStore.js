// /store/cartStore.js
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const exists = get().items.find((i) => i.id === product.id);
        if (exists) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...product, qty: 1 }],
          }));
        }
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // clave en localStorage
    }
  )
);
