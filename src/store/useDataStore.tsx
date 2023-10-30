// Imports
import { create } from 'zustand'
import axios from 'axios'
import { IDataStore } from '../interfaces/interfaces'

const api = 'https://homologacao3.azapfy.com.br/api/ps/metahumans'

export const useDataStore = create<IDataStore>((set) => ({
  heroes: [],
  isLoading: false,
  error: null,

  fetchData: async () => {
    try {
      set({ isLoading: true })
      const response = await axios.get(api)
      set({
        heroes: response.data,
        isLoading: true,
      })
    } catch (error) {
      set({ error })
    } finally {
      set({ isLoading: false })
    }
  },
}))
