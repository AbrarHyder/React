import React from "react"
import "./Navbar.css"
const Navbar = (props)=> {
    return (
        <>
        <h1 className = "heading"> Hello from Navbar</h1>
        <p> {props.children} </p>
        <p> {props.test} </p>
        </>
    )
}

export default Navbar
