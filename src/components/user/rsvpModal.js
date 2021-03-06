import React, {useState} from 'react'
import {Row,  Col, Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import { useEffect } from 'react';
const stdlib = loadStdlib('ALGO');

const styles = StyleSheet.create({
  title: {
    color: '#A32896'
  },
  createBtn: {
    backgroundColor: '#A32896',
    color: 'white',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px'
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px'
  },
  modal: {
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '10px',
    }
  }
})

export default function RSVPModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [numTicket, setNumTicket] = useState(0)

  const MICROALGOS_TO_ALGOS_RATIO = 1e6;
  const INVALID_MICROALGOS_ERROR_MSG =
  'Microalgos should be positive and less than 2^53 - 1.';

  /**
   * microalgosToAlgos converts microalgos to algos
   * @param microalgos - number
   * @returns number
   */
  const  microalgosToAlgos = (microalgos ) => {
  if (microalgos < 0 || !Number.isSafeInteger(microalgos)) {
      throw new Error(INVALID_MICROALGOS_ERROR_MSG);
  }
  return microalgos / MICROALGOS_TO_ALGOS_RATIO;
  }

  /**
   * algosToMicroalgos converts algos to microalgos
   * @param algos - number
   * @returns number
   */
  const algosToMicroalgos = (algos) => {
  const microalgos = algos * MICROALGOS_TO_ALGOS_RATIO;
  return Math.round(microalgos);
  }

    const buyTicket = async () => {
    const acc = await stdlib.getDefaultAccount();
    console.log(acc)
    const acceptToken = await acc.tokenAccept(props.tokenId);
    const tokenAccepted = await acc.tokenAccepted
    const accountAddress = await acc.networkAccount.addr
    console.log(accountAddress)
    console.log(props.creatorAccount)
    // const accountAddress = acc.getAddress()  //etherum network
      const totalAmount = numTicket * props.fee
      await stdlib.transfer(acc, props.creatorAccount, algosToMicroalgos(totalAmount)) 
      await stdlib.transfer(props.creatorAccount, acc, numTicket, props.tokenId)
  }

  return(
    <div >
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder={props.tokenId} autoFocus
              value={props.tokenId} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Number of Tickets" autoFocus
                value={numTicket} onChange={(e) => setNumTicket(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button className={css(styles.createBtn)} variant="primary" onClick={buyTicket}>
            RSVP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}