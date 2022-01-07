import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css"
import languages from '../../data/languages';
import { grey } from '@mui/material/colors';

const Header = ({setLanguage, language, word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            type: lightMode ? "light": "dark",
            primary: {
                main: lightMode?grey[600]:"#000"
            }
        }
    })

    const handleChange = (value) => {
        setLanguage(value);
        setWord("")
    }

    return (
        <div className='header'>
            <span className='title'>
                Dictionary
            </span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        className="search" 
                        value={word} 
                        onChange={(w) => setWord(w.target.value)} 
                        label="Standard" />

                    <TextField
                        className="select"
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={language}
                        onChange={(e) => handleChange(e.target.value)}
                        variant="standard"
                        >
                        {languages.map((lan) => (
                            <MenuItem key={lan.label} value={lan.label}>
                            {lan.value}
                            </MenuItem>
                        ))}
                    </TextField>

                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;