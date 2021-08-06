import { useState } from "react";
import "App.css";

export default function Home() {
	return(
<div className="cmn">
<h1>Home</h1>
Stay home stay safe
</div>
	)
}



export default function Home() {
	return(
<div className="cmn">
<h1>Cart</h1>
Showing cart.<br/> <p className="abc">Keep buying.....</p>
</div>
	)
}

export default function Home() {
	return(
<div className="cmn">
<h1>Profile</h1>
Showing your profile
</div>
	)
}

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth) {
					return <Component />;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.loaction }
							}}
						/>
					);
				}
			}}
		/>
	);
}



export default function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<Router>
			<div className="nav">
				<Link to="/" className="spc">
					Home
				</Link>
				<Link to="/profile" className="spc">
					Profile
				</Link>
				<Link to="/mycart" className="spc">
					My Cart
				</Link>

				<button
					className="bnn mrgn"
					onClick={() => {
						setIsAuth(true);
					}}
				>
					Login
				</button>
				<button
					className="bnn mrgn2"
					onClick={() => {
						setIsAuth(false);
					}}
				>
					Logout
				</button>
			</div>

			<div className="card">
				<Switch exact>
					<Route exact path="/" component={Home}></Route>
					<ProtectedRoute
						exact
						path="/profile"
						component={Profile}
						isAuth={isAuth}
					/>
					<ProtectedRoute
						exact
						path="/mycart"
						component={MyCart}
						isAuth={isAuth}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
