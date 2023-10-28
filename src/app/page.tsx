"use client";

import "./globals.css";
import { useDataStore } from "./store/useDataStore";
import { useEffect } from "react";

export default function Home() {
  const { heroes, powerType, isLoading, error, fetchData, togglePower } =
    useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) <p>Loading...</p>;

  if (heroes)
    return (
      <>
        {heroes.map((item) => (
          <ul key={item.id} className="border mb-5">
            <li>{item.id}</li>
            <li>{item.name}</li>
          </ul>
        ))}
      </>
    );
}
