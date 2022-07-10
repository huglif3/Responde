import { StyleSheet, css } from "aphrodite";
import Header from "./header";
import coverImage from "../../images/background.png";
import { Button } from "react-bootstrap";
import RSVPModal from "./rsvpModal";
import { useState } from "react";
import location from "../../images/location-icon.png";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100vh",
    backgroundSize: "contain",
    backgroundImage: `url(${coverImage})`,
  },
  address: {
    display: "flex",
    justifyContent: "space-between",
  },
  location: {
    width: "70px",
    height: "70px",
  },
  container: {
    position: "absolute",
    top: "30%",
    left: "5%",
    height: "100vh",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "green",
    "@media (max-width: 575px)": {
      fontSize: "64px",
    },
  },
  description: {
    fontSize: "24px",
    color: "green",
    marginLeft: "15px",
    "@media (max-width: 575px)": {
      fontSize: "16px",
    },
  },
  btnContainer: {
    margin: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function Participate() {
  const [rsvp, setRSVP] = useState(false);
  return (
    <div className={css(styles.wrapper)}>
      <Header />
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>MyDAO Event</h1>
        <p className={css(styles.description)}>Date: 22/11/2022</p>
        <p className={css(styles.description)}>MyFunDAO</p>
        <div className={css(styles.address)}>
          <img className={css(styles.location)} src={location} alt="location" />
          <p className={css(styles.description)}>
            Dao Street 203 <br /> Dao City, Spain <br /> 23233{" "}
          </p>
        </div>
        <p className={css(styles.description)}></p>
        <div className={css(styles.btnContainer)}>
          <RSVPModal show={rsvp} onHide={() => setRSVP(false)} />
        </div>
      </div>
    </div>
  );
}
