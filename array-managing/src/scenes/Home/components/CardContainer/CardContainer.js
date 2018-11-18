// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Helpers
import { v1 as generateKey } from "uuid";
// Globals
import icons from "./../../../../config/icons";
// Components
import Card from "./components/Card";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { arrayOfData: this.arrayOfData() };
  }

  arrayOfData = () => {
    const arrayOfData = [
      {
        key: generateKey(),
        Nome: "João Coelho",
        Morada: "Avenida Rogério Rosa nº3 4Esq",
        Idade: 32
      },
      {
        key: generateKey(),
        Nome: "Rita Serra",
        Morada: "Rua Madalena Flor lote 20 1Drto",
        Idade: 26
      },
      {
        key: generateKey(),
        Nome: "Manuel Gouveia",
        Morada: "Rua João Magalhães nº 28",
        Idade: 40
      }
    ];
    return arrayOfData;
  };
  handleAddClick = () => {
    const { arrayOfData } = this.state;
    const arrayCopy = JSON.parse(JSON.stringify(arrayOfData));
    arrayCopy.push({ key: generateKey(), Nome: "", Morada: "", Idade: "" });
    this.setState({
      arrayOfData: arrayCopy
    });
  };
  handleDeleteClick = cardIndex => {
    const { arrayOfData } = this.state;
    const arrayCopy = JSON.parse(JSON.stringify(arrayOfData));
    arrayCopy.splice(cardIndex, 1);
    this.setState({
      arrayOfData: arrayCopy
    });
  };

  render() {
    const { arrayOfData } = this.state;
    return (
      <div className={css(styles.containerDiv)}>
        {arrayOfData.map((data, index) => {
          return (
            <Card
              addCard={this.handleAddClick}
              cardIndex={index}
              deleteCard={this.handleDeleteClick}
              icons={icons}
              idade={data.Idade}
              isLast={arrayOfData.length - 1}
              key={data.key}
              morada={data.Morada}
              nome={data.Nome}
            />
          );
        })}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  containerDiv: {
    padding: 24,
    width: 500
  }
});
