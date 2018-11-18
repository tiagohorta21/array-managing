// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import InputField from "./components/InputField";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isBeingEdited: false };
  }

  handleEditClick = () => {
    this.setState(prevState => ({
      isBeingEdited: !prevState.isBeingEdited
    }));
  };

  render() {
    const {
      addCard,
      cardIndex,
      deleteCard,
      getValue,
      icons,
      idade,
      isLast,
      morada,
      nome
    } = this.props;
    const { isBeingEdited } = this.state;
    return (
      <div className={css(styles.cardContainer)}>
        <InputField
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          label={"Nome"}
          placeholder={nome}
          type="text"
        />
        <InputField
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          label={"Morada"}
          placeholder={morada}
          type="text"
        />
        <InputField
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          label={"Idade"}
          placeholder={idade}
          type="number"
        />
        <div className={css(styles.iconContainer)}>
          <div
            className={isBeingEdited ? icons.save : icons.edit}
            onClick={this.handleEditClick}
          />
          {isLast === cardIndex ? (
            <div className={icons.add} onClick={addCard} />
          ) : (
            <div className={icons.delete} onClick={deleteCard(cardIndex)} />
          )}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    border: "1px solid black",
    borderRadius: 4,
    height: 150,
    marginBottom: 24,
    padding: 24
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
