import { Row, Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: "20px",
    backgroundColor: "green ",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  socials: {
    width: '30%',
  }
});

export default function Footer() {
  return (
    <div className={css(styles.wrapper)}>
      <p>
        RESPONDE <br /> Copyright (c) 2022. All rights reserved
      </p>
      <div className={css(styles.socials)}>
        <p>Discord</p>
        <p>Twitter</p>
      </div>
    </div>
  );
}
