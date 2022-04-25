import React, {useState, useEffect, MouseEvent, KeyboardEvent} from 'react'
import axios from "axios";
import Definitions from "../Definitions/Definitions"
import Button from "../Button/Button"

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [explanation, setExplanation] = useState([]);

  let stringRequest = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  


  const axios = require('axios').default;


  const getDictionary = async () => {
    try {
      const request = await axios.get(stringRequest);
      console.log(request.data);
      setExplanation(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      /* setSearchTerm((e.target as HTMLInputElement).value); */
      getDictionary();
    }
  }

  const handleChange = (text: string) => { 
    /* setCategory(e.target.value); */
    setSearchTerm(text);
  };
  
  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    getDictionary();
  }

  /* console.log(explanation); */

  useEffect(() => {
    getDictionary();
  }, [searchTerm, explanation])
  

  return (
    <div className="container">
      <div className ="input-container">
        <div className="title-container">
          <h3>Simple Dictionary</h3>
        </div>
        <div className="input-wrapper">
          <input type="text" onKeyDown={handleKeyDown} onChange = {e => handleChange(e.target.value)} ></input>
        </div>
        <div className="button-container">
          <Button onSubmit={onSubmit}  />
        </div>
      </div>
      <div className ="definition-container">
        {explanation && (<Definitions search={searchTerm} meanings={explanation}/>)}
      </div>
    </div>
    
  )
}

export default Input