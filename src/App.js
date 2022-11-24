
import { useEffect } from 'react';
import { useState } from 'react';
import Tours from './Tours';
import './App.css';
import Loding from './Loding';
// const url = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100"
const url = "https://course-api.com/react-tours-project"
// const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
// const url = "https://github.com/bbachi/react-nodejs-example.git"
// const url = "https://pokeapi.co/api/v2/pokemon?limit=500"
// const url ="https://pokeapi.co/api/v2/pokemon/pikachu"
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>tour.id !== id);
    setTours(newTour)
    // console.log(newTour)
  }
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response =await fetch(url);
      const tours = await response.json()
      setLoading(false)
      setTours(tours)  
      console.log(tours)
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
  }
  useEffect(() => {fetchTours()},[])
  if (loading){
    return <main> <Loding /></main>
  }
  if (tours.length === 0){
    return (
      <div>
        <h1>No More Toure</h1>
        <button onClick={fetchTours} >refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <main><Tours tours={tours} removeTour={removeTour} /></main>
    </div>
  );
}

export default App;
