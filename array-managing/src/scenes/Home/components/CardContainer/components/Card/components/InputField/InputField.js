// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export default class InputField extends Component {
  onChangeValue = event => {
    const { cardIndex, getValue, label } = this.props;
    const value = event.target.value;
    getValue(cardIndex, label, value);
  };

  render() {
    const { label, placeholder } = this.props;
    return (
      <div className={css(styles.inputFieldContainer)}>
        <div>{label}</div>
        <input
          className={css(styles.input)}
          onChange={this.onChangeValue}
          placeholder={placeholder}
          // readOnly={placeholder === "" ? false : true}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 400
  },
  inputFieldContainer: {
    marginBottom: 12
  }
});
