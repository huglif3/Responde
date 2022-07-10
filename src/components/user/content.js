import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import coverImage from "../../images/background.png";
import Header from "./header";
import { Link } from "react-router-dom";
import RSVPModal from "./rsvpModal";
import { loadStdlib } from "@reach-sh/stdlib";
import wallet from '../../images/wallet-glyph-black-icon-vector.png'
import logo from "../../images/logo.png";
import { login } from "../../api/login";
import CreateEventModal from "../admin/modal/createEventModal";
const stdlib = loadStdlib("ALGO");

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100vh",
    backgroundSize: "contain",
    backgroundImage: `url(${coverImage})`,
  },
  container: {
    position: "absolute",
    top: "30%",
    left: "5%",
    height: "100vh",
  },
  title: {
    fontSize: "96px",
    fontWeight: "bold",
    color: "green",
    "@media (max-width: 575px)": {
      fontSize: "64px",
    },
  },
  description: {
    fontSize: "24px",
    textAlign: "center",
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
  rsvpBtn: {
    width: "200px",
    backgroundColor: "white",
    color: "green",
    padding: "8px",
    borderColor: "white",
    fontWeight: "bold",
    "@media (max-width: 575px)": {
      width: "150px",
    },
  },
  adminBtn: {
    width: "200px",
    backgroundColor: "green",
    color: "white",
    padding: "8px",
    fontWeight: "bold",
    borderColor: "green",
    margin: "10px",
    "@media (max-width: 575px)": {
      width: "150px",
    },
  },
  organizeBtn: {
    display: "none",
    "@media (max-width: 575px)": {
      width: "100%",
      display: "block",
      backgroundColor: "green",
      color: "white",
      padding: "8px",
      fontWeight: "bold",
      borderColor: "green",
      margin: "auto",
    },
  },
  adminItem: {
    textDecoration: "none",
    color: "white",
  },
});

export default function Content() {
  const [rsvp, setRSVP] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  //  const tokenBal = async () => {
  //   const acc = await stdlib.getDefaultAccount();
  //   const bal = await stdlib.balanceOf("JO7SIKSCJDZBLNUME7OS7SRQC3JCNWZB6BSH7MYK2HEPC4S3PC7MN2COR4",  88045105)
  //   console.log(`${bal}`)
  //   // const address = acc.getAddress()
  //   const address = acc.networkAccount.addr
  //   console.log(address)
  // }
  // useEffect(() =>{
  //   tokenBal()
  // }, [])

  return (
    <div className={css(styles.wrapper)}>
      <Header />
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>Responde</h1>
        <p className={css(styles.description)}>
          DAO Event Registration... <br />
          ... to Incentivize Participation
        </p>
        <div className={css(styles.btnContainer)}>
          <Button
            className={css(styles.adminBtn)}
            onClick={() => setModalShow(!modalShow)}
          >
            CREATE EVENT
          </Button>
          <Button className={css(styles.adminBtn)}>
            <a className={css(styles.adminBtn)} href="#events">
              SEARCH EVENTS
            </a>
          </Button>
          <Button className={css(styles.adminBtn)}>
            <Link className={css(styles.adminItem)} to="/admin">
              ADMIN
            </Link>
          </Button>
          <CreateEventModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <RSVPModal show={rsvp} onHide={() => setRSVP(false)} />
        </div>
      </div>
    </div>
  );
}
