import React, {  Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";

const NavContainer = styled.div`
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(204, 204, 204, 0.295);
        z-index: 2;
    }
    .nav-header {
        display: flex;
        justify-content: space-between;
    }
    .nav-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
    }
    .nav-icon {
        font-size: 2.1rem;
        color: var(--Orange);
    }
    .nav-links {
        height: 0;
        overflow: hidden;
        transition: var(--mainTransition);
        list-style-type: none;
    }
    .nav-links a {
        margin: 10px;
        display: block;
        text-decoration: none;
        color: rgb(0, 0, 0);
        transition: var(--mainTransition);
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: var(--mainSpacing);
    }
    .nav-links a:hover {
        color: var(--Orange);
    }

    .show-nav {
        height: 210px;
    }
    @media screen and (min-width: 768px) {
        .nav-btn {
            display: none;
        }
        .nav-center {
            max-width: 1170px;
            margin: 0 auto;
            display: flex;
        }
        .nav-links {
            height: auto;
            display: flex;
            margin-left: 24em;
            padding: 2.3rem 7rem;
        }
        .nav-links a {
            margin: 0 1rem;
            padding: 0.5rem 0;
        }
    }
    
`;
const NavLogo = styled.div`
    cursor: pointer;
    text-decoration: bold;
    color: var(--Orange);
    font-size: 2.5rem;
    margin: 0.1rem;
`;


export default class NavHeader extends Component {
    state = {
        isOpen: false,
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <NavContainer>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <NavLogo>Team Project</NavLogo>
                            <button
                                type="button"
                                className="nav-btn"
                                onClick={this.handleToggle}
                            >
                                <FaAlignRight className="nav-icon" />
                            </button>
                        </div>
                        <ul
                            className={
                                this.state.isOpen
                                    ? "nav-links show-nav"
                                    : "nav-links"
                            }
                        >
                            <li>
                                <Link
                                    smooth to="#HeaderHero">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link smooth to="#Features">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link smooth to="#Pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link smooth to="#Contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </NavContainer>
        );
    }
}


