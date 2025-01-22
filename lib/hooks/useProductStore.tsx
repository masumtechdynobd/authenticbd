import { create } from 'zustand';

type StoreProps = {
  price: any;
  qty: any;
  combinationImage: any;
  setCombinationImage: (value: any) => void;
  combinationName: any;
  setPriceValue: (value: any) => void;
  setQty: (value: any) => void;
  setCombinationName: (value: any) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (data: boolean) => void;
  openCart: boolean;
  setOpenCart: (data: boolean) => void;
  reviewEvent: any,
  setReviewEvent: (value: number) => void;
  selectColoreVariant: any,
  setSelectColoreVariant: (value: any) => void;
  lookProduct: any,
  setLookProduct: (value: any) => void;
  lookProductLoading: boolean,
  setLookProductLoading: (value: boolean) => void;
};

export const productStore = create<StoreProps>((set, get) => ({
  price: 0,
  qty: 0,
  combinationImage: null,
  combinationName: null,
  setPriceValue: (value) => set({ price: value }),
  setCombinationImage: (value) => set({ combinationImage: value }),
  setQty: (value) => set({ qty: value }),
  setCombinationName: (value) => set({ combinationName: value }),
  isSidebarOpen: false,
  setSidebarOpen: (data) => set((state) => ({ isSidebarOpen: data })),
  openCart: false,
  setOpenCart: (data) => set((state) => ({ openCart: data })),
  reviewEvent: null,
  setReviewEvent: (value) => set({ reviewEvent: value }),
  selectColoreVariant: [],
  setSelectColoreVariant: (newVariant) => set((state) => {
    const existingIndex = state.selectColoreVariant.findIndex(
      (variant: any) => variant.id === newVariant.id
    );

    if (existingIndex !== -1) {
      // Replace the existing variant with the new one
      const updatedVariants = [...state.selectColoreVariant];
      updatedVariants[existingIndex] = newVariant;
      return { selectColoreVariant: updatedVariants };
    } else {
      // Add the new variant
      return { selectColoreVariant: [...state.selectColoreVariant, newVariant] };
    }
  }),
  lookProduct: [],
  setLookProduct: (value) => set({ lookProduct: value }),
  lookProductLoading: false,
  setLookProductLoading: (value) => set({ lookProductLoading: value }),


}));
