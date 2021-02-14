import react from 'react';
import {styles} from './styles.js'

export default function Calendar() {
    
    return (
        <>
            <div style={styles.container}>
                <h1 style={{fontSize: "4em"}}>Hello User</h1>
            </div>
            
            <div style={styles.calendar}>
                <h2>Calendar</h2>
            </div>
        </>
    )
}