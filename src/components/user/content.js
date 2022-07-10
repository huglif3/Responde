import { useState,useEffect } from 'react'
import {Button} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import coverImage from '../../images/background.png'
import Header from './header'
import { Link } from 'react-router-dom'
import RSVPModal from './rsvpModal'
import { loadStdlib } from '@reach-sh/stdlib';
import { login } from '../../api/login'
import CreateEventModal from '../admin/modal/createEventModal'
const stdlib = loadStdlib('ALGO');

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'black'
    /* coverImage: `url(${coverImage})`,
    backgroundImage: `url(${coverImage})` */
  },
  container: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    height: '100vh'
  },
  title: {
    fontSize: '96px',
    fontWeight: 'bold',
    color: 'white',
    '@media (max-width: 575px)': {
      fontSize: '64px',
    }
  },
  description: {
    fontSize: '24px',
    color: 'white',
    marginLeft: '15px',
    '@media (max-width: 575px)': {
      fontSize: '16px',
    }
  },
  btnContainer: {
    margin: '15px'
  },
  rsvpBtn: {
    width: '200px',
    backgroundColor: 'white',
    color: '#A32896',
    padding: '8px',
    borderColor: 'white',
    fontWeight: 'bold',
    '@media (max-width: 575px)': {
      width: '150px',
    }
  },
  adminBtn: {
    width: '200px',
    backgroundColor: '#A32896',
    color: 'white',
    padding: '8px',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px',
    '@media (max-width: 575px)': {
      width: '150px',
    }
  },
  organizeBtn: {
    display: 'none',
    '@media (max-width: 575px)': {
      width: '100%',
      display: 'block',
      backgroundColor: '#A32896',
      color: 'white',
      padding: '8px',
      fontWeight: 'bold',
      borderColor: '#A32896',
      margin: 'auto',
    }
  },
  adminItem: {
    textDecoration: 'none',
    color: 'white'
  }
})

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
  
  return(
    <div className={css(styles.wrapper)}>
      <Header/>
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>DAO Event <br/>Registration</h1>
        <p className={css(styles.description)}>Incentivize DAO Participation</p>
        <div className={css(styles.btnContainer)}>
          <Button className={css(styles.adminBtn)} onClick= {() => setModalShow(!modalShow)}>CREATE EVENT</Button>
          <Button className={css(styles.adminBtn)}><a className={css(styles.adminBtn)} href='#events'>FIND EVENTS</a></Button>
          <CreateEventModal show={modalShow} onHide={() => setModalShow(false)}/>
          <RSVPModal show={rsvp} onHide={() => setRSVP(false)}/>
        </div>
      </div>   
    </div>
  )
}