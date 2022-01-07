import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions"
import { Container, Switch } from "@material-ui/core"
import { grey } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([])
  const [language, setLanguage] = useState("en")
  const [lightMode, setLightMode] = useState(false)

  const Themer = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#757575",
      '&:hover': {
        backgroundColor: alpha("#757575", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#757575",
    },
  }));

  const dictAPI = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
      console.log(data)
      setMeanings(data.data)
    }
    catch (error) {
      console.log(error)
      setMeanings([])
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictAPI();
  }, [word, language])

  return (
    <div className="App" style={{ height: "100vh", backgroundColor: lightMode ? "white": "#1c1c1c", color: lightMode? "#303f9f": "#1976d2", transition:"all 0.5s linear"}}>
      <Container maxWidth="md" style={{ height: "100vh", display: "flex", flexDirection: "column"}}>
        
        <div style={{position:"absolute", top:0, right:15, paddingTop: 30}}><Themer checked={lightMode} onChange={() => setLightMode(!lightMode)}/></div>
        
        <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord} lightMode={lightMode}/>
        {meanings.length > 0 && <Definitions word={word} meanings={meanings} language={language} mode={lightMode}/>}
      </Container>
    </div>
  );
}

export default App;


//"#282c34"