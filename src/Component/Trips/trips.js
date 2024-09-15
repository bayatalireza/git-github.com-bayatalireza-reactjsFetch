import { useState } from "react";
import "./trips.css";
import useFetch from "../Hooks/useFetch";


function Trips() {
  const [url, setUrl] = useState("http://localhost:3000/trips21");
    const{data: trips, isLoading, error} = useFetch(url)

  return (
    <>
      <h1 className="trips">Trips List</h1>
      {isLoading &&
      <div>
        <h2>Is Loading...</h2>
      </div>
      }
      {error &&
      <div>
        <h2>{error}</h2>
      </div>
      }
      <ul>
        {trips && trips.map((trip) => (
          <li key={trip.id} className="li">
            <h3>
              <span>{trip.id}</span> - {trip.title}
            </h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="button">
        <button onClick={() => setUrl("http://localhost:3000/trips3?loc=iran")}>
          Trips in Iran
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips3")}>
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips3?loc=turkey")}
        >
          turkey Trips
        </button>
      </div>
    </>
  );
}

export default Trips;
