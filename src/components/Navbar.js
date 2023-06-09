import React from 'react';
import './NavbarStyle.scss';
import logo from '../assets/images/logo.png';
import { MenuItems } from './MenuItems.js';
import { Link } from 'react-router-dom';
import FormSearch from './FormSearch';
class Navbar extends React.Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <div className="navbar-logo">
                        <a href='/'><img src={logo} alt='logo' /></a>
                    </div>
                    <div className='menu-icons' onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fa-solid fa-times fa-beat" : "fa-solid fa-bars fa-beat"}></i>
                    </div>
                    <div className='all'>

                        <div className='items'>
                            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                                <li className='logo-navlink'><a href='/'><img src={logo} alt='logo' /></a></li>
                                <li className='search-navlink'>
                                    <form className="search-form-navlink">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </form>
                                </li>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                                        </li>
                                    );

                                })}
                            </ul>
                        </div>
                        <div className='shopping-cart'>
                            <i class="fa-solid fa-cart-shopping fa-beat"></i>
                        </div>
                        <div className='formsearch'>
                            <FormSearch />
                        </div>
                    </div>
                </nav>
                <div className='navbar-image'>
                </div>

            </>
        )
    }
}
export default Navbar;