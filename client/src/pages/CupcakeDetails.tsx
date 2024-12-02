import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import "../components/Cupcake.css";

interface CupcakeProps {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export default function CupcakeDetails() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<CupcakeProps | null>(null);

  useEffect(() => {
    const fetchCupcake = async (id: string) => {
      const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
      const data = await response.json();
      setData(data);
    };

    fetchCupcake(id ? id : "");
  }, [id]);

  return (
    <div className="cupcake-details">
      {data ? <Cupcake data={data} /> : null}
    </div>
  );
}
