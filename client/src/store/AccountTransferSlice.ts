import { StateCreator } from "zustand";

export interface AccountTransferSlice {
  isModalAccountTransfer: boolean;
  setIsModalAccountTransfer: () => void;
}

const createAccountTransferSlice: StateCreator<
  AccountTransferSlice,
  [],
  [],
  AccountTransferSlice
> = (set) => ({
  isModalAccountTransfer: false,
  setIsModalAccountTransfer: () =>
    set((state) => ({ isModalAccountTransfer: !state.isModalAccountTransfer })),
});

export default createAccountTransferSlice;
