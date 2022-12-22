import React, { useEffect, useState } from "react";
import bg from './assets/bg.jpeg';
import './App.css';
import axios from "axios";
//import Movie from "./Components/Movie";

function App() {

  const [user, setUser] = useState([]);


//console.log(user.Search);

//const [searchField, setSearchField] = useState("");
const [query, setQuery] = useState("");
const [searchParam] = useState(["Title", "Type"]);

  // const filteredPersons = user.Search?.filter(
  //   movie => {
  //     return (
  //       movie
  //       .Title
  //       .toLowerCase()
  //       .includes(searchField.toLowerCase()) 
  //     );
  //   }
  // );
  // const handleChange = e => {
  //   setSearchField(e.target.value);
  // };

async function fetchData() {
  try {
    const response = await axios.get("http://www.omdbapi.com/?s=movie&apikey=1228982e")
    setUser(response.data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  fetchData();
},[])
function search(items) {
  return items?.filter((item) => {
      return searchParam.some((newItem) => {
          return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(query.toLowerCase()) > -1
          );
      });
  });
}

  return (
    <>
    <div className="App">
      <div className="appName"><h4 className="appNameText"> <span className="spanT">MyTestApp</span></h4></div>
      <img src={bg} width="100%" alt=""/>
      <p className="bgText" >Watching something incredible.</p>
    
    <form className="formInput">
      <input type = "search" 
          placeholder = "Search Movie" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
           className="searchD"
          />
    </form><br/>
    <div>
      <p className="category">Category Movie</p>
      <img src={bg} width="30" height="30" alt=""/>
      
      {/* {user.map((data,id)=>(
        <li>{data}</li>
      ))} */}
      <h2 className="Testing">{search(user.Search)?.map(data => 
      <>
      <img className="MovieImage" key={data.imdbID} src={data.Poster} width="150" alt=""/>
      
      </>
      )}</h2>
      {/* <Movie/> */}

    </div>
    <div>
    <p className="category">Category Series</p>
    {/* {user.map((data,id)=>(
        <li>{data}</li>
      ))} */}
      <h2 className="Testing">{search(user.Search)?.map(data => 
      <>
      <img className="MovieImage" key={data.imdbID} src={data.Poster} width="150" alt=""/>
      
      </>
      )}</h2>
      {/* <Movie/> */}

    </div>
    </div></>
  );
}

export default App;
