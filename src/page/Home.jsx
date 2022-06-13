import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid justify-content-between">
                    <div className="d-flex">
                        <Link className="navbar-brand me-2 mb-1 d-flex align-items-center" to="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                            // style={{ "marginTop": "2px" }}
                            />
                        </Link>

                        <form className="input-group w-auto my-auto d-none d-sm-flex">
                            <input
                                autoComplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                            // style="min-width: 125px;"
                            />
                            <span className="input-group-text border-0 d-none d-lg-flex">
                            <i className="bi bi-search"></i>
                            </span>
                        </form>
                    </div>

                    <ul className="navbar-nav flex-row d-none d-md-flex">
                        <li className="nav-item me-3 me-lg-1 active">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-home fa-lg"></i></span>
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </Link>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-flag fa-lg"></i></span>
                            </Link>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-video fa-lg"></i></span>
                            </Link>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-shopping-bag fa-lg"></i></span>
                            </Link>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-users fa-lg"></i></span>
                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link d-sm-flex align-items-sm-center" to="#">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    className="rounded-circle"
                                    height="22"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                                <strong className="d-none d-sm-block ms-1">John</strong>
                            </Link>
                        </li>
                        <li className="nav-item me-3 me-lg-1">
                            <Link className="nav-link" to="#">
                                <span><i className="fas fa-plus-circle fa-lg"></i></span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown me-3 me-lg-1">
                            <Link
                                className="nav-link dropdown-toggle hidden-arrow"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-comments fa-lg"></i>

                                <span className="badge rounded-pill badge-notification bg-danger">6</span>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link className="dropdown-item" to="#">Some news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Another news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-3 me-lg-1">
                            <Link
                                className="nav-link dropdown-toggle hidden-arrow"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-bell fa-lg"></i>
                                <span className="badge rounded-pill badge-notification bg-danger">12</span>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link className="dropdown-item" to="#">Some news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Another news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-3 me-lg-1">
                            <Link
                                className="nav-link dropdown-toggle hidden-arrow"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-chevron-circle-down fa-lg"></i>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link className="dropdown-item" to="#">Some news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Another news</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Vou pra uni</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-end" id="navbarTogglerDemo">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}