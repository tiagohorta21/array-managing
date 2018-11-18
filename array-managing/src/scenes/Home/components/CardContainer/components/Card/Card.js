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
      arrowClick,
      cardIndex,
      deleteCard,
      getValue,
      icons,
      idade,
      isLast,
      morada,
      nome,
      sortCards
    } = this.props;
    const { isBeingEdited } = this.state;
    return (
      <div className={css(styles.cardContainer)}>
        <InputField
          arrowClick={arrowClick}
          arrowDown={icons.arrow_down}
          arrowUp={icons.arrow_up}
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          isLast={isLast}
          label={"Nome"}
          type="text"
          value={nome}
        />
        <InputField
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          label={"Morada"}
          type="text"
          value={morada}
        />
        <InputField
          cardIndex={cardIndex}
          getValue={getValue}
          isBeingEdited={isBeingEdited}
          isLast={isLast}
          label={"Idade"}
          sortCards={sortCards}
          sortIcon={icons.sort}
          type="number"
          value={idade}
        />
        <div className={css(styles.iconContainer)}>
          <div className={css(styles.icon)}>
            <div
              className={isBeingEdited ? icons.save : icons.edit}
              onClick={this.handleEditClick}
            />
          </div>
          {isLast === cardIndex ? (
            <div className={css(styles.icon)}>
              <div className={icons.add} onClick={addCard} />
            </div>
          ) : (
            <div className={css(styles.icon)}>
              <div className={icons.delete} onClick={deleteCard(cardIndex)} />
            </div>
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
  icon: {
    cursor: "pointer"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
