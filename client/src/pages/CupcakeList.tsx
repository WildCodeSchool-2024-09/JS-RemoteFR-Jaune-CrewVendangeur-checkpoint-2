import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
/* ************************************************************************* */
type CupcakeData = {
  id: number;
  name: string;
  color1: string;
  color2: string;
  color3: string;
  accessory: string;
};

type CupcakeArray = CupcakeData[];

type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  console.info(useLoaderData() as CupcakeArray);
  const cupcakes = useLoaderData() as CupcakeArray;
  console.info(cupcakes);

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      if (!response.ok) {
        throw new Error("Failed to fetch accessories");
      }
      const data = (await response.json()) as AccessoryArray;
      setAccessories(data);
      console.info(data);
    };

    fetchAccessories();
  }, []);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory)
    : cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
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
