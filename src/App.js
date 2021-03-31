import React, { useState, UseEffect, useRef, useEffect } from "react";
import './App.css';

export default function App() {
  const ws = useRef(null);

  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")

    const apiCall = async () => {
      await fetch(url + "/products")
      .then((res) => res.json())
      .then((data) => console.log(data))
    };
    apiCall();

  }, [])
  return (
    <div className="App">
      
    </div>
  );
}


