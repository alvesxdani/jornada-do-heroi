'use client'
import { useCallback, useEffect, useState } from 'react'
import CardHeroes from '../components/CardHeroes'
import { useDataStore } from '../store/useDataStore'
import TextField from '@mui/material/TextField'
import { IHero } from '../interfaces/interfaces'

export default function Home() {
  const { heroes, isLoading, error, fetchData } = useDataStore()
  const [input, setInput] = useState('')
  const [filteredHeroes, setFilteredHeroes] = useState<IHero[]>([])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleInputChange = ({ target }: any) => {
    setInput(target.value)
  }

  const filterHeroes = useCallback(() => {
    if (heroes) {
      const filtered = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(input.toLowerCase()),
      )
      setFilteredHeroes(filtered)
    }
  }, [input, heroes])

  useEffect(() => {
    filterHeroes()
  }, [filterHeroes])

  if (error) return <p>Houve um erro.</p>
  if (heroes)
    return (
      <>
        <main className="container w-[90%] m-auto mt-5">
          <div className="m-2 mb-10">
            <TextField
              id="outlined-basic"
              label="Busque um herói"
              variant="outlined"
              className="w-[100%]"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              filteredHeroes.map((item) => {
                let total = 0
                if (
                  item.powerstats['intelligence'] !== undefined &&
                  !isNaN(item.powerstats['intelligence'])
                ) {
                  total += item.powerstats['intelligence']
                }
                if (
                  item.powerstats['power'] !== undefined &&
                  !isNaN(item.powerstats['power'])
                ) {
                  total += item.powerstats['power']
                }
                if (
                  item.powerstats['speed'] !== undefined &&
                  !isNaN(item.powerstats['speed'])
                ) {
                  total += item.powerstats['speed']
                }
                if (
                  item.powerstats['strength'] !== undefined &&
                  !isNaN(item.powerstats['strength'])
                ) {
                  total += item.powerstats['strength']
                }
                if (
                  item.powerstats['combat'] !== undefined &&
                  !isNaN(item.powerstats['combat'])
                ) {
                  total += item.powerstats['combat']
                }
                return (
                  <CardHeroes
                    key={item.id}
                    title={item.name}
                    subtitle={total}
                    url={item.images.sm}
                  />
                )
              })
            )}
          </div>
        </main>
      </>
    )
  return null
}
