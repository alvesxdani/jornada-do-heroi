interface IHero {
    id: number
    name: string
    powerstats: Object[]
}

export interface IDataStore {
    heroes: IHero[]
    powerType: string[]
    isLoading: boolean
    error: string | unknown | null
    fetchData: () => void
    togglePower: (power: string) => void
  }