'use client'
import CardHeroes from '@/components/CardHeroes'
import { IHero } from '@/interfaces/interfaces'
import { useDataStore } from '@/store/useDataStore'
import { MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import { ReactNode, useEffect, useState } from 'react'

export default function Batalha() {
  const { heroes, isLoading, error, fetchData } = useDataStore()
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [playerOne, setPlayerOne] = useState<IHero[]>([])
  const [playerTwo, setPlayerTwo] = useState<IHero[]>([])
  let totalPlayerOne: number | null = null
  let totalPlayerTwo: number | null = null

  useEffect(() => {
    fetchData()
  }, [fetchData])

  function handleInputPlayerOne({ target }: any) {
    setInput(target.value)
    const filterPlayerOne = () =>
      heroes.filter((hero) => target.value === hero.name)
    setPlayerOne(filterPlayerOne())
    calcTotalPlayer()
  }

  function handleInputPlayerTwo({ target }: any) {
    setInput2(target.value)
    const filterPlayerTwo = () =>
      heroes.filter((hero) => target.value === hero.name)
    setPlayerTwo(filterPlayerTwo())
    calcTotalPlayer()
  }

  function calcTotalPlayer():ReactNode {
    let result = ''
    if(totalPlayerOne !== null && totalPlayerTwo !== null) {
      if(totalPlayerOne > totalPlayerTwo) {
        result = 'Ganhador: Player 1'
      } else {
        result = 'Ganhador: Player 2'
      }}
      return result
  }

  if (error) <p>Houve um erro.</p>
  if (isLoading) <p>Carregando...</p>
  if (heroes)
    return (
      <>
        <main className="container w-[50%] m-auto mt-5">
          <div className="m-2 mb-10">
            <div className="m-4 text-center">
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <TextField
                  id="player-one"
                  className="w-[100%]"
                  select
                  label="Selecione"
                  defaultValue=""
                  helperText="Selecione o player 1"
                  onChange={handleInputPlayerOne}
                  value={input}
                >
                  {heroes.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <div className="m-5">
                  {playerOne.map((item) => {
                    let total = 0
                    let powers = ''
                    if (
                      item.powerstats['intelligence'] !== undefined &&
                      !isNaN(item.powerstats['intelligence'])
                    ) {
                      total += item.powerstats['intelligence']
                      powers += `Inteligência: ${item.powerstats['intelligence']} / `
                    }
                    if (
                      item.powerstats['power'] !== undefined &&
                      !isNaN(item.powerstats['power'])
                    ) {
                      total += item.powerstats['power']
                      powers += `Poder: ${item.powerstats['power']}  / `
                    }
                    if (
                      item.powerstats['speed'] !== undefined &&
                      !isNaN(item.powerstats['speed'])
                    ) {
                      total += item.powerstats['speed']
                      powers += `Velocidade: ${item.powerstats['speed']} / `
                    }
                    if (
                      item.powerstats['strength'] !== undefined &&
                      !isNaN(item.powerstats['strength'])
                    ) {
                      total += item.powerstats['strength']
                      powers += `Força: ${item.powerstats['strength']} / `
                    }
                    if (
                      item.powerstats['combat'] !== undefined &&
                      !isNaN(item.powerstats['combat'])
                    ) {
                      total += item.powerstats['combat']
                      powers += `Combate: ${item.powerstats['combat']} / `
                    }
                    totalPlayerOne = total
                    return (
                      <CardHeroes
                        title={item.name}
                        subtitle={total}
                        url={item.images.sm}
                        key={item.id}
                        description={powers}
                      />
                    )
                  })}
                </div>
              </div>

              <div>
                <TextField
                  id="player-two"
                  className="w-[100%]"
                  select
                  label="Selecione"
                  defaultValue=""
                  helperText="Selecione o player 2"
                  onChange={handleInputPlayerTwo}
                  value={input2}
                >
                  {heroes.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <div className="m-5">
                  {playerTwo.map((item) => {
                    let total = 0
                    let powers = ''
                    if (
                      item.powerstats['intelligence'] !== undefined &&
                      !isNaN(item.powerstats['intelligence'])
                    ) {
                      total += item.powerstats['intelligence']
                      powers += `Inteligência: ${item.powerstats['intelligence']} / `
                    }
                    if (
                      item.powerstats['power'] !== undefined &&
                      !isNaN(item.powerstats['power'])
                    ) {
                      total += item.powerstats['power']
                      powers += `Poder: ${item.powerstats['power']}  / `
                    }
                    if (
                      item.powerstats['speed'] !== undefined &&
                      !isNaN(item.powerstats['speed'])
                    ) {
                      total += item.powerstats['speed']
                      powers += `Velocidade: ${item.powerstats['speed']} / `
                    }
                    if (
                      item.powerstats['strength'] !== undefined &&
                      !isNaN(item.powerstats['strength'])
                    ) {
                      total += item.powerstats['strength']
                      powers += `Força: ${item.powerstats['strength']} / `
                    }
                    if (
                      item.powerstats['combat'] !== undefined &&
                      !isNaN(item.powerstats['combat'])
                    ) {
                      total += item.powerstats['combat']
                      powers += `Combate: ${item.powerstats['combat']} / `
                    }
                    totalPlayerTwo = total
                    return (
                      <CardHeroes
                        title={item.name}
                        subtitle={total}
                        url={item.images.sm}
                        key={item.id}
                        description={powers}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  return null
}
