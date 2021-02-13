import react from 'react';
import MainNavbar from './MainNavbar.js'

export default function Main(props) {
    return (
        <div>
            <MainNavbar />
            <h1>Hello User</h1>
            {props.children}
        </div>
    )
}