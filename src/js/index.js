//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

let url = "https://assets.breatheco.de/apis/fake/todos/user/alesanchezr";

let options = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	}
};

fetch(url, options).then(respuesta => {
	console.log(respuesta.status);
});

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
