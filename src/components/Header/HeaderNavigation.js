import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { appUrls } from '../../urls'
import AppContext from '../../context'
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = ({type,...props}) =>{

    const navLinkClassName = type==='navbar' ? styles.navItem : styles.navItemDropdown
    const wrapperClassName = type==='navbar' ? styles.wrapper : styles.wrapperDropdown
    const navItemLinkClassName = type==='navbar' ? styles.navItemLink : styles.navItemDropdownLink
    const navItemLinkActiveClassName = type==='navbar' ? styles.navItemLinkActive : styles.navItemDropdownLinkActive

    return(
        <AppContext.Consumer>
            {(context)=>(
                <nav className={wrapperClassName}>
                    <ul >
                        <li className={navLinkClassName}>
                            <NavLink 
                                exact 
                                className={navItemLinkClassName} 
                                activeClassName={navItemLinkActiveClassName} 
                                to={ appUrls.USER+context.user.username}
                                {...props}
                            >
                            MOJE KONTO
                            </NavLink>
                        </li>
                        <li className={navLinkClassName}>
                            <NavLink 
                                exact 
                                className={navItemLinkClassName} 
                                activeClassName={navItemLinkActiveClassName} 
                                to={appUrls.ROOT}
                                {...props}
                            >
                            MOJE GRUPY
                            </NavLink>
                        </li>
                        <li className={navLinkClassName}>
                            <NavLink 
                                exact 
                                className={navItemLinkClassName} 
                                activeClassName={navItemLinkActiveClassName} 
                                to={appUrls.SEARCH_USERS}
                                {...props}
                            >
                            SPOŁECZNOŚĆ
                            </NavLink>
                        </li>
                        <li className={navLinkClassName}>
                            <NavLink 
                                exact 
                                className={navItemLinkClassName} 
                                activeClassName={navItemLinkActiveClassName} 
                                to={appUrls.SEARCH_AREAS}
                                {...props}
                            >
                            SKIARENY
                            </NavLink>
                        </li>
                        <li 
                            className={navLinkClassName}
                        >
                            <button
                                onClick={context.handleLogOut} 
                                className={navItemLinkClassName}
                            >
                            WYLOGUJ
                            </button>
                        </li>
                    </ul>    
                </nav>
            )}
        </AppContext.Consumer>
    )
}

HeaderNavigation.propTypes={
    type: PropTypes.oneOf(['navbar','dropdown']),
}
HeaderNavigation.defaultProps={
    type: 'navbar',
}
export default HeaderNavigation
