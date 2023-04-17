import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/html">HtmlDéfinition</Link>
				</li>
				<li>
					<Link to="/css">CssDéfinition</Link>
				</li>
				<li>
					<Link to="/js">JsDéfinition</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
