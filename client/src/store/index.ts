import { create } from "zustand";
import createAccountTransferSlice, {
  AccountTransferSlice,
} from "./AccountTransferSlice";
import createListSeeMoreSlice, { ListSeeMoreSlice } from "./ListSeeMoreSlice";

const useBoundStore = create<ListSeeMoreSlice & AccountTransferSlice>()(
  (...a) => ({
    ...createListSeeMoreSlice(...a),
    ...createAccountTransferSlice(...a),
  })
);

export default useBoundStore;
