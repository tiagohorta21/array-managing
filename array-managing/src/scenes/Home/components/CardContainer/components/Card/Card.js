// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import InputField from "./components/InputField";

export const Card = ({
  addCard,
  cardIndex,
  deleteCard,
  getValue,
  icons,
  idade,
  isLast,
  morada,
  nome
}) => {
  return (
    <div className={css(styles.cardContainer)}>
      <InputField
        cardIndex={cardIndex}
        getValue={getValue}
        label={"Nome"}
        placeholder={nome}
      />
      <InputField
        cardIndex={cardIndex}
        getValue={getValue}
        label={"Morada"}
        placeholder={morada}
      />
      <InputField
        cardIndex={cardIndex}
        getValue={getValue}
        label={"Idade"}
        placeholder={idade}
      />
      <div className={css(styles.iconContainer)}>
        {isLast === cardIndex ? (
          <div className={icons.add} onClick={addCard} />
        ) : (
          <div className={icons.delete} onClick={deleteCard} />
        )}
      </div>
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
  },
  iconContainer: {
    textAlign: "right"
  }
});
