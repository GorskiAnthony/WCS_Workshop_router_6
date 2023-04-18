import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
	console.count("layout render");
	return (
		<>
			<NavBar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
