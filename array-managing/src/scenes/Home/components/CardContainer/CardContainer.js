// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

const CardContainer = () => {
  return <div className={css(styles.containerDiv)} />;
};

export default CardContainer;

const styles = StyleSheet.create({
  containerDiv: {
    width: 1000
  }
});
