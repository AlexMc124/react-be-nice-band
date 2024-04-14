import React from "react";
import { useEffect } from "react"

const Merch = () => {
  
  useEffect(() => {
    document.title = "Be Nice! - Merch"
  }
  , [])
  return (
    <div>
      <h1>Merch</h1>
    </div>
  );
};

export default Merch;
