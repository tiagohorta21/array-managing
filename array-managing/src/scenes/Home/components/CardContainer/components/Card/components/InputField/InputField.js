// React
import React, { Component } from "react";
import PropTypes from "prop-types";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export default class InputField extends Component {
  onChangeValue = event => {
    const { cardIndex, getValue, label } = this.props;
    const value = event.target.value;
    getValue(cardIndex, label, value);
  };

  render() {
    const {
      arrowClick,
      arrowDown,
      arrowUp,
      cardIndex,
      isBeingEdited,
      isLast,
      label,
      sortCards,
      sortIcon,
      type,
      value
    } = this.props;
    return (
      <div className={css(styles.inputFieldContainer)}>
        <div>
          <div>{label}</div>
          <input
            className={css(styles.input)}
            onChange={this.onChangeValue}
            readOnly={!isBeingEdited}
            type={type}
            value={value}
          />
        </div>
        <div className={css(styles.iconsContainer)}>
          {cardIndex === 0 && cardIndex !== isLast && (
            <React.Fragment>
              <div className={sortIcon} onClick={sortCards} />
              <div
                className={arrowDown}
                onClick={() => arrowClick(cardIndex, cardIndex + 1)}
              />
            </React.Fragment>
          )}
          {cardIndex > 0 && cardIndex < isLast && (
            <React.Fragment>
              <div
                className={arrowUp}
                onClick={() => arrowClick(cardIndex, cardIndex - 1)}
              />
              <div
                className={arrowDown}
                onClick={() => arrowClick(cardIndex, cardIndex + 1)}
              />
            </React.Fragment>
          )}
          {cardIndex === isLast && cardIndex !== 0 && (
            <div
              className={arrowUp}
              onClick={() => arrowClick(cardIndex, cardIndex - 1)}
            />
          )}
        </div>
      </div>
    );
  }
}

InputField.defaultProps = {
  arrowClick: () => {},
  arrowDown: "",
  arrowUp: "",
  isBeingEdited: false,
  isLast: 0,
  label: "",
  sortCards: () => {},
  sortIcon: "",
  type: "text",
  value: ""
};
InputField.propTypes = {
  arrowClick: PropTypes.func,
  arrowDown: PropTypes.string,
  arrowUp: PropTypes.string,
  cardIndex: PropTypes.number.isRequired,
  getValue: PropTypes.func.isRequired,
  isBeingEdited: PropTypes.bool,
  isLast: PropTypes.number,
  label: PropTypes.string,
  sortCards: PropTypes.func,
  sortIcon: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const styles = StyleSheet.create({
  iconsContainer: {
    alignItems: "center",
    alignSelf: "flex-end",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: 400
  },
  inputFieldContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12
  }
});
