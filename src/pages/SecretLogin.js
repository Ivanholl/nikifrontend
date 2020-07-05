import React, { useState } from "react";

export default function SecretLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)


	function handleSubmit(event) {
		event.preventDefault();
        setSubmitted(true);
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
							type="email"
							value={email}
							onChange={setEmail}
							required
						/>
					</div>
					<div className="input-holder">
						<i className="fa fa-fw fa-lock" />
						<input
							id="password"
							placeholder="password"
							type="password"
							value={password}
							onChange={setPassword}
							required
						/>
					</div>
					{submitted && (
						<div className="message">
							Incorrect email or password
						</div>
					)}
					<button type="submit">
						LOGIN
						<i className="fa fa-fw fa-chevron-right" />
					</button>
				</form>
			</div>
		</div>
	);
}