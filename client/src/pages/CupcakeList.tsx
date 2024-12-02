import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

interface CupcakeDetailsProps {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
  id: number;
}
type CupcakeArray = CupcakeDetailsProps[];
type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const cupcakes = useLoaderData() as CupcakeArray;
  console.info(useLoaderData() as CupcakeArray);

  // Step 3: get all accessories
  const [cupcakesAccessories, setCupcakesAccessories] =
    useState<AccessoryArray>([]);

  useEffect(() => {
    fetch(" http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setCupcakesAccessories(data))
      .catch((error) => console.error(error));
  }, []);
  // Step 5: create filter state
  const [currentFilter, setCurrentFilter] = useState("");

  const handleClick = (value: string) => setCurrentFilter(value);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            onChange={(event) => handleClick(event.target.value)}
            id="cupcake-select"
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {cupcakesAccessories.map((cupcakeAccessory) => (
              <option value={cupcakeAccessory.slug} key={cupcakeAccessory.id}>
                {cupcakeAccessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes
          .filter((a) => a.accessory.includes(currentFilter))
          .map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Link to={`/cupcakes/${cupcake.id}`}>
                <Cupcake data={cupcake} />
              </Link>
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
