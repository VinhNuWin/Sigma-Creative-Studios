import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./Home";
import { ChakraProvider } from "@chakra-ui/react";

//Router
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";

function App() {
  return (
    <ChakraProvider>
      <div id="body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
