import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store, { changeUserName } from "./store";
import './Navbar.css'
// import {cart} from "./Card"
export default function Navbar({ value }) {
  const dispatch = useDispatch()
  const history = useNavigate()
  const user = useSelector((state) => state.username)
 function timeover(){
    
   dispatch(changeUserName(''))
   history('/')
  }
    return (
      <nav className="sticky-top d-flex justify-content-between hero">
        <h1>Book Shop</h1>
        <h2>{user}</h2>
        <div className="btn">
          <div><button className="nav--btn">{value?.length}</button></div>
          
          <div><button className="nav--btn" onClick={timeover}>
            Not {user}? Log Out
          </button></div>
        </div>
      </nav>
      // <header className="p-3 bg-dark bg-gradient text-white">
      //   <div className="container">
      //     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      //       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      //         <li>
      //           <a href="#" className="nav-link px-2 text-secondary">
      //             Home
      //           </a>
      //         </li>
      //         <li>
      //           <a href="#" className="nav-link px-2 text-white">
      //             New
      //           </a>
      //         </li>
      //       </ul>

      //       <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
      //         <input
      //           type="search"
      //           className="form-control form-control-dark"
      //           placeholder="Search"
      //           aria-label="Search"
      //         />
      //       </form>

      //       <div className="text-end">
      //         <button type="button" className="btn btn-outline-light me-2">
      //           Login
      //         </button>
      //         <button type="button" className="btn btn-warning">
      //           Sign-up
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </header>
    );
}