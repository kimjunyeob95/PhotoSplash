import { useState } from 'react'
import styles from './CommonNav.module.scss'
import navJson from './nav.json'
import { Link } from 'react-router-dom'

interface Navigation {
	index      : number
	path       : string
	label      : string
	searchValue: string
	isActive   : boolean
}

function CommonNav() {
	const [navigation, setNavigation] = useState<Navigation[]>(navJson);

	const navLinks = navigation.map((item: Navigation) => {
		return (
			<Link to={item.path} className={styles.navigation__menu} key={item.path} >
				<span className={styles.navigation__menu__label}>{item.label}</span>
			</Link>
		)
	});

	return (
		<nav className={styles.navigation}>{navLinks}</nav>
	)
}

export default CommonNav