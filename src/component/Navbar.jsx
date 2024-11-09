import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Hourly from './Hourly'

function Navbar(props) {
    // a = getElementById('blockk').style.display === "none"
    // const HiderEndeShow = () => { 
    //     if(document.getElementById('blockk').style.display === 'none'){
    //       document.getElementById('blockk').style.display = 'block'
            
    //     }
    //     else{
    //       document.getElementById('blockk').style.display = 'none'
          
    //     }
    //   }


    return (
        <div className='OneNavbar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5" fill="#FFD700" />
                            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#FFD700" stroke-width="2" />
                        </svg>


                    </Link>
                    {/* <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <br />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Content">Today</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Hourly">Hourly</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FeedBack">FeedBack</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to='/Suprice' >About Us</Link>
                            </li>
                        </ul>
                        <form onSubmit={props.handle} className="d-flex" role="search">
                            <input onChange={(suraj) => props.setCity(suraj.target.value)} className="form-control me-2" type="search" placeholder="Search City" aria-label="Search" />
                            <button 
                            
                            className="btn btn-outline-success" type="submit"  >Search </button>
                        </form>
                    </div>
                </div>
            </nav>


    


        </div>
    )
}

export default Navbar
