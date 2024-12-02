import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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

type AccessoryArray = {
  id: number;
  name: string;
  slug: string;
}[];

function CupcakeList() {
  const cupcakes = useLoaderData() as CupcakeArray;

  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAcessory] = useState("");

  useEffect(() => {
    const getAccessories = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      setAccessories(await response.json());
    };

    getAccessories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAcessory(e.target.value);
  };

  const filteredCupcakes = cupcakes.filter((cupcake) => {
    if (selectedAccessory === "") {
      return cupcakes;
    }
    return cupcake.accessory === selectedAccessory;
  });

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <Link to={`/cupcakes/${cupcake.id}`} key={cupcake.id}>
            <li className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
