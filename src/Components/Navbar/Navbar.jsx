import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.scss";

export default function Navbar({ userData, logout }) {
  return (
    <>

      <nav className={`navbar navbar-expand-sm ${styles.bgNav} shadow`}>
        <div className="container">
          <a className="navbar-brand" href="#">Noxe</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">

            {userData ? 
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "bg-info rounded-4 nav-link active" : "nav-link"}
                  to='' aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                  to='movies'>Movies</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive, isPending }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                  to='tvshow'>TV shows</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                  to='people'>People</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                  to='network'>Network</NavLink>
              </li>


            </ul> : ''}

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">

              <li className="nav-item">
                <NavLink className="nav-link">
                  <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                  </form>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">
                  <i className='fab fa-facebook-f'></i>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">
                  <i className='fab fa-youtube'></i>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">
                  <i className='fab fa-twitter'></i>
                </NavLink>
              </li>


              {userData ? (
                <>
                  <li className="nav-item">
                    <NavLink className={({ isActive , isPending }) => isActive ? "bg-info rounded-4 nav-link mx-3" : "nav-link"}
                      onClick={logout}>Logout</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className={({ isActive}) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                      to='profile'>{userData.first_name}'s Profile</NavLink>
                  </li>
                </>


              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={({ isActive, isPending }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                      to='login'>Login</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className={({ isActive, isPending }) => isActive ? "bg-info rounded-4 nav-link" : "nav-link"}
                      to='register'>Register</NavLink>
                  </li>

                </>)

              }

            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}
