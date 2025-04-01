import { useState,useEffect } from "react"
export const useFetch = (apiPath,queryTerm="") => {
    // const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.TMDB_API_KEY}`
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=142a24f3d242125232f2242350915350&query=${queryTerm}`
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(url);
          const json=await response.json();
          setData(json.results)
        }
        fetchMovies();
      },[url])
  return { data}
}
