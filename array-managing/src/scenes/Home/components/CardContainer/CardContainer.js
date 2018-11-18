// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import Card from "./components/Card";

export default class CardContainer extends Component {
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
  render() {
    const arrayOfData = this.arrayOfData();
    return (
      <div className={css(styles.containerDiv)}>
        {arrayOfData.map((data, index) => {
          return (
            <Card
              idade={data.Idade}
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
