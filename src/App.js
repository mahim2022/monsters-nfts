import "./App.css";
import React, { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { Search } from "./components/Search-Component/search.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ monsters: data });
  }
  render() {
    const { monsters, searchFeild } = this.state;

    const filteredResults = monsters.filter((e) =>
      e.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="titleFont">Monsters NFTS</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchFeild: e.target.value })}
        ></Search>
        <Cardlist monsters={filteredResults}></Cardlist>
      </div>
    );
  }
}

export default App;
