import { useEffect, useState } from "react";

export const useApiRequest = ({ query }) => {
  const [loading, setloading] = useState(true);
  const [elementos, setelementos] = useState([]);

  const consulta = async () => {
    const peticion = await fetch(`https://fakestoreapi.com/${query}`);
    const resp = await peticion.json();
    setelementos(resp);
    setloading(false);
  };

  useEffect(() => {
    consulta();
  }, []);

  return {
    elementos,
    loading,
  };
};
