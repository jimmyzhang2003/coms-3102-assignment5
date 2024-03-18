import React, { useState, useEffect } from "react";

import "./App.css";
import fetchUsers from "../api/fetchUsers";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers()
			.then((userData) => {
				setUsers(userData.results);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="App">
			<h1> Fetching and Display User Data in a Table </h1>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.login.uuid}>
							<td>{user.name.first}</td>
							<td>{user.location.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
