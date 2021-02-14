import react from 'react'
import MainNavbar from './MainNavbar.js'
import ApiCalendar from 'react-google-calendar-api'

export default function Main(props) {


    return (
        <div>
            <MainNavbar setTab={props.setTab}/>
            {/* <button onClick={()=>clickEvent()}></button> */}
            {props.children}
	          <button
              onClick={(e) => handleItemClick(e, 'sign-in')}
            >
              sign-in
            </button>
            <button
                onClick={(e) => handleItemClick(e, 'sign-out')}
            >
              sign-out
            </button>
        </div>

    )
}

const handleItemClick = (event, name) => {
      if (name === 'sign-in') {
	      ApiCalendar.handleAuthClick()
      } else if (name === 'sign-out') {
        ApiCalendar.handleSignoutClick()
      }
}
