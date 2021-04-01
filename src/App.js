import React, { useState, UseEffect, useRef, useEffect } from "react";
import './App.css';

export default function App() {
  const ws = useRef(null);

  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")
    let pairs = [];

    const apiCall = async () => {
      await fetch(url + "/products")
      .then((res) => res.json())
      .then((data) => (pairs = data));

      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          console.log(pair)
          return pair;
        }
      });
        

    };
    apiCall();

  }, [])
  return (
    <div className="App">
      
    </div>
  );
}


