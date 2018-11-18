// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const Card = () => {
  return <div className={css(styles.cardContainer)} />;
};

const styles = StyleSheet.create({
  cardContainer: {
    border: "1px solid black",
    borderRadius: 4,
    height: 150,
    marginBottom: 24
  }
});
