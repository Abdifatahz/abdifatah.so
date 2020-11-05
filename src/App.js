import React from "react";
import "./assets/main.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App bg-blue-100 h-64">
      <Home />
      <p className="mt-2 text-blue-700 text-center font-bold">
        Build With React and Tailwing by Abdifatah Abdilahi
      </p>
    </div>
  );
}

export default App;
