import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface CupcakeDetailsProps {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
  id: number;
}

export default function CupcakeDetails() {
  const { id } = useParams<{ id: string }>();
  const [cupcake, setCupcake] = useState<CupcakeDetailsProps | null>(null);

  useEffect(() => {
    const fetchCupcake = async () => {
      const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
      if (!response.ok) {
        throw new Error("C'est nul");
      }
      const data = (await response.json()) as CupcakeDetailsProps;
      setCupcake(data);
    };
    fetchCupcake();
  }, [id]);

  if (!cupcake) {
    return <div>C'est nul...</div>;
  }

  return (
    <div className="cupcake-container">
      <div className="cupcake">
        <div className={`accessory ${cupcake.accessory}`} />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: cupcake.color1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: cupcake.color2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: cupcake.color3,
            }}
          />
        </div>
        <div className="bottom">
          <div className="bottom-in">
            <div className="face">
              <div className="eyes">
                <div className="left-eye" />
                <div className="right-eye" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>

      <div className="cupcake-name">{cupcake.name}</div>
    </div>
  );
}
