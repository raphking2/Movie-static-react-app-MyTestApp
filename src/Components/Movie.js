// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FetchData from "./FetchData";

// function Movie(){
//     const [user, setUser] = useState();
// //console.log(user.Search);
// async function fetchData() {
//     try {
//       const response = await axios.get("http://www.omdbapi.com/?s=movie&apikey=1228982e")
//       setUser(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   useEffect(() => {
//     fetchData();
//   },[])
//  const {data} = FetchData()
//   console.log(data);
//     return(
//         <div className="MovieCard">
//             {/* {user?.Search?.map(te => 
//             <>
//             <img key={te.imdbID} src={te.Poster} className="MovieImage" />
            
//             </>
//             )} */}
//         </div>
//     )
// }
// export default Movie;