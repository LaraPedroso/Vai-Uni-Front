import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col py-3">
                        <Outlet />
                    </div>
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                        </li>
                                        <li>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                        </li>
                                        <li>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}