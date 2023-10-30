import { SetStateAction } from "react"

export interface IHero {
    id: number
    name: string
    powerstats: {
        intelligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number,
    }
    appearance: [
        gender: string
    ]
    images: {
        sm: string
        md: string
    }
}

export interface IDataStore {
    heroes: IHero[]
    isLoading: boolean
    error: string | unknown | null
    fetchData: Function
}

export interface ICardHeroes {
    title: string;
    subtitle: number;
    url: string;
}

export interface ITitle {
    children: string
    type: 'h1' | 'h2' | 'h3'
}