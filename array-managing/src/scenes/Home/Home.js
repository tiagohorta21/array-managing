// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Globals
import translations from "./../../config/translations";
// Components
import CardContainer from "./components/CardContainer";

export const Home = () => {
    return (
        <div className={css(styles.mainDiv)}>
            <div className={css(styles.title)}>{translations.appTitle}</div>
            <CardContainer />
        </div>
    );
};

const styles = StyleSheet.create({
    mainDiv: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    title: {
        fontSize: 42
    }
});
