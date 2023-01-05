import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Container from "react-bootstrap/Container";
import React from "react";

function App() {
  return (
    <Container className="text-center mt-4 p-4">
        <Header/>
        <Card/>
    </Container>
 
  );
}

export default App;
