import { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { EventItems } from '../admin/data/eventItems'
import EventCard from '../admin/EventCard'
import Admin from './pages/admin'
import Dashboard from './pages/dashboard'
import EventDetail from './pages/EventDetail'
import { EventList } from '../../api/EventList'
import loadingGif from '../../images/loading.gif'

const styles = StyleSheet.create({
  searchInput: {
    width: '20%',
    padding: '4px',
    margin: '20px',
    alignItems: 'center'
  },
  eventDetails: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer'
  }
})
export default function EventBanner() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const events = async () => {
    setLoading(true)
    const eventArray =  await EventList("Ticketing")
    setList(eventArray)
    setLoading(false)
      console.log(eventArray)
   }

   useEffect(() => {
    events()
   }, [])
   

  return(
    <div>
      {loading ? <img className={css(styles.loading)} src={loadingGif} height="300px" width="300px"/> : 
        <div>
        {list.map((event) =>
          <a key={event.id} className={css(styles.eventDetails)} href={`/EventDetail/${event.id}`}>
            <EventCard
              image ={`https://ipfs.io/ipfs/${event.ipfs_pin_hash}`} 
              title={event.metadata.keyvalues['title']} 
              dateTime={event.metadata.keyvalues['dateTime']} />
          </a>
        )} 
    </div>}

    </div>
    
  )
}