// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const InputField = ({ label, placeholder }) => {
  console.log(label, placeholder);
  return (
    <div className={css(styles.inputFieldContainer)}>
      <div>{label}</div>
      <input
        className={css(styles.input)}
        placeholder={placeholder}
        readOnly={placeholder === "" ? false : true}
      />
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
