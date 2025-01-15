import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
export default function Navbar() {
    return (
        <nav>
            <div className="nav-main">
                <div ><NavLink to="/home" style={{ color: 'white' }}>MovieDb</NavLink></div>
                <ul >

                    <li><NavLink to="/popular">Popular</NavLink></li>
                    <li><NavLink to="/toprated">Top Rated</NavLink></li>
                    <li><NavLink to="/upcomming">Upcomming</NavLink></li>
                    <li style={{display:'flex', gap:'14px'}}>
                        <input placeholder="Movie Name" style={{width:'60%',borderRadius:'4px', padding:'6px'   }}/>
                        <div style={{padding:'7px 12px 7px 12px',    backgroundColor:'gray', borderRadius:'4px', decoration:'none', color:'white', fontSize:'small', cursor:'pointer'}}>Submit</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
