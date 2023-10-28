"use client";

import Header from "./components/Header";
// Imports
import { useEffect } from "react";
import { useDataStore } from "./store/useDataStore";
import "./globals.css";

export default function Home() {
  const { heroes, powerType, isLoading, error, fetchData, togglePower } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) <p>Loading...</p>;

  if (heroes)
    return (
      <>
       <Header />
      </>
    );
}
