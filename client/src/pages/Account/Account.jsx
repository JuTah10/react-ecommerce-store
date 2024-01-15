

import { Link,useLocation, Outlet} from "react-router-dom";

import "./Account.css"



//for component 
import AccountNav from "./Nav-bar/AccountNav";

import React from "react";







const Context = React.createContext();
const Account = () => {
 
   
    const location = useLocation()
    console.log(location)
   const email = location.state?.key ? location.state.key : "Member"

   
    return (
        <div className="page-container">
            <div className="mainpage-container">
                <AccountNav email={email}/>
                    {location.pathname === "/account" ? 
                        <div>
                            <div className="main-interface-container-first-half">
                                <div>My offers</div>
                                <div>Here is where list of offers is gonna be </div>
                            </div>
                            <div className="main-interface-container-second-half">
                                <div>All purchases</div>
                                <div className="all-purchases-container">
                                    <div>No purchases made</div>
                                    <Link to="/">Continue Shopping</Link>
                                </div>
                            </div>
                        </div> 
                    :
                        <Outlet/>
                    }
               
            </div>
        
            
     
            
        </div>
    
    )
}

export default Account;