import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
			<Link to="/personajes">
				<button className="btn btn-warning">Personajes</button>
			</Link>{" "}
			<Link to="/planetas">
				<button className="btn btn-warning">Planetas</button>
			</Link>{" "}
			<Link to="/naves">
				<button className="btn btn-warning">Naves</button>
			</Link>
		</p>
	</div>
);
