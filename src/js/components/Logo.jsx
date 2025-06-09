import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';

export const Logo = () =>{
    return (
        <div className="logoBox d-flex align-items-center justify-content-center ">
            <p className="logo m-0"><FontAwesomeIcon icon={faStopwatch}/></p>
        </div>
    )
};
