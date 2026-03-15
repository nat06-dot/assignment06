'use client'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import DateReserve from '@/components/DateReserve'

export default function BookingPage() {
    const [venue, setVenue] = useState('')

    const sxWhite = {
        '& label': { color: 'rgba(255,255,255,0.7)' },
        '& label.Mui-focused': { color: 'white' },
        '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.5)' },
        '& .MuiInput-underline:after': { borderBottomColor: 'white' },
        '& .MuiInputBase-input': { color: 'white' },
        '& .MuiSelect-icon': { color: 'white' },
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            }}>
            <div className="w-full max-w-md rounded-2xl p-8 shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <h1 className="text-3xl font-bold text-white mb-8 text-center">Book a Venue</h1>
                <form className="flex flex-col gap-6">
                    <TextField
                        label="Name-Lastname"
                        name="Name-Lastname"
                        variant="standard"
                        fullWidth
                        sx={sxWhite}
                    />
                    <TextField
                        label="Contact-Number"
                        name="Contact-Number"
                        variant="standard"
                        fullWidth
                        sx={sxWhite}
                    />
                    <FormControl variant="standard" fullWidth sx={sxWhite}>
                        <InputLabel id="venue-label">Venue</InputLabel>
                        <Select
                            labelId="venue-label"
                            id="venue"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                        >
                            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                            <MenuItem value="Spark">Spark Space</MenuItem>
                            <MenuItem value="GrandTable">The Grand Table</MenuItem>
                        </Select>
                    </FormControl>
                    <DateReserve />
                    <button
                        type="submit"
                        name="Book Venue"
                        className="mt-2 w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all duration-200"
                    >
                        Book Venue
                    </button>
                </form>
            </div>
        </main>
    )
}