// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import InputField from "./components/InputField";

export const Card = ({ nome, morada, idade }) => {
  return (
    <div className={css(styles.cardContainer)}>
      <InputField label={"Nome"} placeholder={nome} />
      <InputField label={"Morada"} placeholder={morada} />
      <InputField label={"Idade"} placeholder={idade} />
    </div>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    border: "1px solid black",
    borderRadius: 4,
    height: 150,
    marginBottom: 24,
    padding: 24
  }
});
