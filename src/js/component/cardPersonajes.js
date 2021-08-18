import React from "react";

export const CardPersonajes = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{/* {store.people.map((personaje, posicion) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={posicion}>
						<div className="card m-1">
							<div className="card-body">
								<h4 className="card-title">
									{personaje.uid} {personaje.name}
								</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
								</p>
							</div>
						</div>
					</div>
				);
			})} */}
			<h1>View de tarjeta</h1>
		</>
	);
};
