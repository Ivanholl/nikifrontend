import React, { useState } from "react";
import * as Actions from "../redux/actions";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";;

export default function SecretLogin(){
	const dispatch = useDispatch();
	let history = useHistory();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [submitted, setSubmitted] = useState(false)
	
	
	function handleSubmit(event) {
		event.preventDefault();
		dispatch(Actions.login(user, pass))
			.then(res => {
				history.push("/");
				setSubmitted(true);
			})
			.catch(err => setSubmitted(true))
	}

    return (
		<div id="main">
			<div className="container">
				<form
					className={`${submitted ? "error" : ""} shake`}
					autocomplete="off"
					onSubmit={handleSubmit}
				>
					<div className="input-holder">
						<i className="fa fa-fw fa-user" />
						<input
							id="email"
							name="email"
							placeholder="user@example.com"
							type="text"
							value={user}
							onChange={(e) => setUser(e.target.value)}
							required
						/>
					</div>
					<div className="input-holder">
						<i className="fa fa-fw fa-lock" />
						<input
							id="password"
							placeholder="password"
							type="password"
							value={pass}
							onChange={(e) => setPass(e.target.value)}
							required
						/>
					</div>
					{submitted && (
						<div className="message">
							Incorrect email or password
						</div>
					)}
					<button type="submit" >
						LOGIN
						<i className="fa fa-fw fa-chevron-right" />
					</button>
				</form>
			</div>
		</div>
	);
}