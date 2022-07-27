import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DashBoardNav = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        sessionStorage.removeItem('accessToken')
        navigate('/admin')
    }
    return (
        <section className="bg-[#FABF2C] px-4">
            <div className=" max-w-7xl mx-auto">
                <div class="navbar p-0">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabindex="0"
                                class="menu menu-compact dropdown-content mt-3 shadow bg-base-300 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/user" className="text-lg">
                                        ইউজার
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category" className="text-lg">
                                        ক্যাটাগরি
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manageAll" className="text-lg">
                                        ম্যানেজ অল নিউস
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class=" hidden lg:flex">
                            <ul class="gap-10 menu-horizontal">
                                <li>
                                    <Link to="/user" className="text-lg py-0">
                                        ইউজার
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/category"
                                        className="text-lg py-0"
                                    >
                                        ক্যাটাগরি
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/manageAll"
                                        className="text-lg py-0"
                                    >
                                        ম্যানেজ অল নিউস
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <button
                            onClick={handleLogOut}
                            className="btn bg-slate-100 text-gray-900"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashBoardNav
