// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const InputField = ({ label, placeholder }) => {
  return (
    <div className={css(styles.inputFieldContainer)}>
      <div>{label}</div>
      <input placeholder={placeholder} className={css(styles.input)} />
    </div>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 400
  },
  inputFieldContainer: {
    marginBottom: 12
  }
});
