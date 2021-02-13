import react from 'react';
import MainNavbar from './MainNavbar.js'

export default function Main(props) {
    const style = {
        marginTop: "5vh",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "left",
    }

    return (
        <div>
            <MainNavbar />
            <div style={style}>
                <h1 style={{fontSize: "4em"}}>Hello User</h1>
            </div>
            {props.children}
        </div>
    )
}