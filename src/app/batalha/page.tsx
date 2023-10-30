"use client"
import { useDataStore } from '@/store/useDataStore';
import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Batalha() {
  const { heroes, isLoading, error, fetchData } = useDataStore()
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')

  function handleInputPlayerOne({target}: any) {
    setInput(target.value)
  }

  return (
    <main className="container w-[90%] m-auto mt-5">
      <div className="m-2 mb-10">
        <div className="grid grid-cols-2 gap-2">
          <div className="border">
          <TextField
          id="player-one"
          className='w-[100%]'
          select
          label="Selecione"
          defaultValue=""
          helperText="Selecione o player 1"
          onChange={handleInputPlayerOne}
        >
          {heroes.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
          </div>
          <div className="border">
            2
          </div>
        </div>
      </div>
    </main>
  )
}
