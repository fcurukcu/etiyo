import React,{useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import { getToken } from './Common'
export default function PrivateRoute({component:Component,...rest}) {
    const auth = getToken(); // determine if authorized, from context or however you're doing it
    const [show, setShow] = useState(false);
    const showClick=(show)=>{
        setShow(show);
    }
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <> <main><Sidebar /><Outlet /> </main></> : <Navigate to="/login" />;
}
