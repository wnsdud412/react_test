import React, { Component } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import BodyExample1 from "./example/bodyexample1";

class App extends Component{

  render() {
    return (
      <div className="App pt-5">
        <Header/>
        <BodyExample1/>
        <Footer/>
      </div>
    );
  }
}



export default App;
