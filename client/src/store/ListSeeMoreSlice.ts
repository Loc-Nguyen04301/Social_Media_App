import { StateCreator } from "zustand";

export interface ListSeeMoreSlice {
  listSeeMore: boolean;
  setListSeeMore: () => void;
}

const createListSeeMoreSlice: StateCreator<
  ListSeeMoreSlice,
  [],
  [],
  ListSeeMoreSlice
> = (set) => ({
  listSeeMore: false,
  setListSeeMore: () => set((state) => ({ listSeeMore: !state.listSeeMore })),
});

export default createListSeeMoreSlice;
