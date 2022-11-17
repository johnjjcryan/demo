
import { FiArrowLeft, FiSettings } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

import '../../static/css/sidebar.css';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ChargingStationOutlinedIcon from '@mui/icons-material/ChargingStationOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

import Tooltip from '@mui/material/Tooltip';



export default function Sidebar({ notify }) {

    // set state sidebar to true
    const [showSidebar, setShowSidebar] = useState(true);

    // function to set state sidebar to false
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const promptLogin = () => {
        notify("Login Required")        
    }

   
    return (

        <>      
            
            <div id="sidebar_wrapper">
                <div class="row flex-nowrap ">
                    <div id="sidebar" class="px-0 bg-light">                    
                        
                        {showSidebar?
                        <div class="container min-vh-100 pb-4 pt-3">
                            
                            <div class="row w-100">
                                <div class="d-flex">
                                    <a href="/" class="text-black text-decoration-none">
                                        <div class="dropdown pb-5">
                                            <a href="#" style={{float:"left"}} class="px-2 py-2 align-items-start text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="https://source.unsplash.com/random" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                                                <span class="d-none d-sm-inline mx-2">UserAccount</span>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                                <li><a class="dropdown-item" href="#">setting1</a></li>
                                                <li><a class="dropdown-item" href="#">setting2</a></li>
                                                <li><a class="dropdown-item" href="#">setting3</a></li>
                                                <li>
                                                    <hr class="dropdown-divider"></hr>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                                            </ul>
                                        </div>
                                    </a>
                                    <button onClick={toggleSidebar} class="ms-1 d-none d-sm-inline btn text-black" type="button" ><a class="text-decoration-none text-black" href="#"><SettingsOutlinedIcon /></a></button>
                                    <button onClick={toggleSidebar} class="ms-1 d-none d-sm-inline navbar-toggler text-black" type="button" data-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation" ><ArrowBackOutlinedIcon /></button>
                                </div>



                            </div>

                            <div class="px-2 pt-3 pb-3 border-bottom">
                                <button class="ms-1 d-none d-sm-inline btn btn-primary w-100" onClick={promptLogin}>Login</button>
                            </div>

                            <div class="flex-column">
                                <ul class="nav nav-pills flex-column align-items-center align-items-sm-start px-3 border-bottom" id="menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link align-middle px-0 text-decoration-none">
                                            <LocalAtmOutlinedIcon /> <span class="ms-1 d-none d-sm-inline text-black">Discount Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-decoration-none">
                                            <ChargingStationOutlinedIcon style={{transform:"rotate(90deg)"}} /> <span class="ms-1 d-none d-sm-inline text-black"> Charging</span> 
                                        </a>
                                        {/* <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                            <li class="w-100">
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Item</span> 1 </a>
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black">Item</span> 2 </a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <LocalShippingOutlinedIcon />  <span class="ms-1 d-none d-sm-inline text-black">Delivery History</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                            <PaymentOutlinedIcon /> <span class="ms-1 d-none d-sm-inline text-black"> Payment Method</span>
                                        </a>
                                    </li>
                                </ul>

                                <ul class="nav nav-pills flex-column align-items-center align-items-sm-start px-3 pt-2" id="sub_menu">
                                    <li>
                                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                            <span class="ms-1 d-none d-sm-inline text-black">Management</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <span class="ms-1 d-none d-sm-inline text-black">Select Market-Type</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <span class="ms-1 d-none d-sm-inline text-black">Customer Service</span>
                                        </a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        :
                        <div class="container min-vh-100">
                            <div class="flex-column">
                                <button onClick={toggleSidebar} class='btn border-bottom py-4'><ArrowForwardOutlinedIcon /></button>
                                <ul class="nav nav-pills flex-column align-items-center align-items-sm-start px-3 border-bottom" id="menu">                                    
                                    <li class="nav-item">                                        
                                        <a href="#" class="nav-link align-middle px-0 text-decoration-none">
                                            <Tooltip title="Discount Card" placement="right"><LocalAtmOutlinedIcon /></Tooltip>
                                        </a>                                        
                                    </li>
                                    
                                    <li>
                                        <a href="#" class="nav-link px-0 align-middle text-decoration-none">
                                            {/* <Tooltip title="Charging" placement="right"><ChargingStationOutlinedIcon style={{transform:"rotate(90deg)"}} /> </Tooltip> */}
                                            {/* <ChargingStationOutlinedIcon style={{transform:"rotate(90deg)"}} /> */}
                                            <Tooltip title="Charging" placement="right"><ChargingStationOutlinedIcon style={{transform:"rotate(90deg)"}}/></Tooltip>
                                        </a>  
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <Tooltip title="Delivery History" placement="right"><LocalShippingOutlinedIcon /></Tooltip>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"  class="nav-link px-0 align-middle ">
                                            <Tooltip title="Payment Method" placement="right"><PaymentOutlinedIcon /></Tooltip>
                                        </a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        }
                    
                    </div>
                </div>
            </div>

         </>
    )

}