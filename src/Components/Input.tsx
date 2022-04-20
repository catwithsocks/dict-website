import React, {useState, MouseEvent} from 'react'
import axios from "axios";

const Input = () => {
  const [searchWord, setSearchWord] = useState("");
  console.log(searchWord);

  function searchForWord(event: MouseEvent) {
    let stringRequest = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord;


  }

  return (
    <div className="container">
      <h3>Simple Dictionary</h3>
      <input type="text" onChange={e => setSearchWord(e.target.value)}></input>
      <button type="button" onClick={e => searchForWord(e)}>Search</button>
    </div>
  )
}

export default Input