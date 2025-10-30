import { create } from "zustand";

interface OrderStore {
  orders: CREATEORDER.GetCreateOrderRes[];
  setOrders: (orders: CREATEORDER.GetCreateOrderRes[]) => void;
  addOrder: (order: CREATEORDER.GetCreateOrderRes) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));
