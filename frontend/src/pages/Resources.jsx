import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resources.css"
import Masonry from "react-masonry-css";

function Resources() {
  const [pins, setPins] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5001/pins");
    //   console.log(response.data);
      setPins(response.data);
    }
    fetchData();
  }, []);

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredPins = pins.filter(pin =>
    pin.title.toLowerCase().includes(filter.toLowerCase())
  );

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  return (
    <>
    <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter..." />
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {filteredPins.map((pin) => (
          <div key={pin.id}>
            <img src={pin.image} alt={pin.title} />
            <p>{pin.title}</p>
          </div>
        ))}
      </Masonry>
      </>
  );
}
export default Resources;