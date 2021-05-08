import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const getApi = async () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8a8015ab868c02ae5d0bf4a32b40c505`;
    const res = await (await fetch(api)).json();
    setCity(res.main);
  };
  const getCity = e => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getApi();
  }, [search]);
  return (
    <div className="app">
      <div className="center">
        <div className="content">
          <input
            type="search"
            value={search}
            placeholder="City"
            onChange={getCity}
          />
          {!city ? (
            <p>data not found</p>
          ) : (
            <div>
              <h3 className="location"> {search}</h3>
              <h5> {city.temp} °Cel </h5>
              <p className="min-max">
                {`Minimum : ${city.temp_min} °Cel | Maximum : ${city.temp_max} °Cel`}{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
