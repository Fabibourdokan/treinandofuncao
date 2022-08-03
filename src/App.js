import React, { Component } from "react";
export default class App extends Component {
  dados = () => {
    return <h1>Treinando Função</h1>;
  };

  add = () => 10 * 2;

  render() {
    return (
      <div>
        <h2>{this.dados()}</h2>
        <p>{this.add()}</p>
      </div>
    );
  }
}

// Função = () SEMPRE //
