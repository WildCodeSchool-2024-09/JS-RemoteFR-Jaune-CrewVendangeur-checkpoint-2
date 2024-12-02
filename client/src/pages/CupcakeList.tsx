import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const [cupcakes, setCupcakes] = useState<CupcakeArray>([]);
  console.info(useLoaderData() as CupcakeArray);

  useEffect(() => {
    try {
      const fetchCupcakes = async () => {
        const response = await fetch("http://localhost:3310/api/cupcakes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCupcakes(data);
      };
      fetchCupcakes();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<CupcakeArray>([]);
  useEffect(() => {
    try {
      const fetchAccessories = async () => {
        const response = await fetch("http://localhost:3310/api/accessories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setAccessories(data);
      };
      fetchAccessories();
    } catch (error) {
      console.error(error);
    }
  }, []);
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            {accessories.length > 0 &&
              accessories?.map((accessory) => (
                <option value={accessory.name} key={accessory.id}>
                  {accessory.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {cupcakes.map((cupcake) => (
            <Cupcake data={cupcake} key={cupcake.id} />
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
