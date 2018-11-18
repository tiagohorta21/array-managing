// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import Card from "./components/Card";

export const CardContainer = () => {
  return (
    <div className={css(styles.containerDiv)}>
      <Card />
    </div>
  );
};

const styles = StyleSheet.create({
  containerDiv: {
    padding: 24,
    width: 500
  }
});
