import Link from "next/link"

import Logo from "./logo"
import classes from "./navbar.module.css"

function NavBar() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<Logo />
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/projects">Porjects</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar
