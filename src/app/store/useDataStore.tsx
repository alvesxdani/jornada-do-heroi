import { create } from "zustand";

interface IDataStore {
    data: Object[]
}

export const useDataStore = create<IDataStore>((set) => {
    return {
        data: [],
    }
})