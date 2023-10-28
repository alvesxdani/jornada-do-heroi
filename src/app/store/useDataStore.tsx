// Imports
import { create } from "zustand";
import axios from "axios";
import { IDataStore } from "../interfaces/interfaces";

const api = "http://homologacao3.azapfy.com.br/api/ps/metahumans";

export const useDataStore = create<IDataStore>((set) => ({
  heroes: [],
  powerType: [],
  isLoading: false,
  error: null,

  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get(api);
      set({
        heroes: response.data,
        isLoading: true,
      });
    } catch (error) {
      set({ error });
    } finally {
        set({ isLoading: false })
    }
  },

  // Function to filter heroes
  togglePower: (power: string) => {
    set((state) => ({
        powerType: state.powerType.includes(power) ?
            state.powerType.filter((item) => item !== power) :
                [...state.powerType, power]
    }))
  },
}));
