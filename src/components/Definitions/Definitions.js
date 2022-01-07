import React from 'react'
import "./Definitions.css"
import { grey } from '@mui/material/colors';

const Definitions = ({word,meanings,language, mode}) => {

    console.log(`DEFINITIONS: ${meanings[0].phonetics[0].audio}`)


    return (
        <div className="defExp">
            {
                meanings[0] && language==='en' && (
                    <audio
                    style={{ backgroundColor: mode? 'transparent':"#fff", width: "100%", borderRadius: 10, marginBottom: 20 ,marginTop: 20}}
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                  >
                    Your browser does not support the audio element.
                  </audio>
                )
            }

            {
                meanings.map((mean) => mean.meanings.map((item) => (
                    item.definitions.map((def) => (
                        <div className='singleMean' style={{backgroundColor: mode? "#e0e0e0":"white", color: "black"}}>
                            <div  style={{fontSize: "1.5rem"}}><b>{def.definition}</b></div>
                            {
                                def.example && (
                                    <div>
                                        <hr style={{backgroundColor: "black", width: "100%"}}></hr>
                                        <span>
                                            <b>Example: </b> {def.example}
                                        </span>
                                    </div>
                                )
                            }
                            {
                                def.synonym && (
                                    <span>
                                        <b>Synonym: </b> {def.synonym}
                                    </span>
                                )
                            }
                        </div>
                    ))
                )))
            }
        </div>
    )
}

export default Definitions