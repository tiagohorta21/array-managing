// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
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
        Nome: "João Coelho",
        Morada: "Avenida Rogério Rosa nº3 4Esq",
        Idade: 32
      },
      {
        Nome: "Rita Serra",
        Morada: "Rua Madalena Flor lote 20 1Drto",
        Idade: 26
      },
      {
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
    arrayCopy.push({ Nome: "", Morada: "", Idade: "" });
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
              icons={icons}
              idade={data.Idade}
              isLast={arrayOfData.length - 1}
              key={index}
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
