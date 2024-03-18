// using async await syntax for API call
const fetchUsers = async () => {
	const response = await fetch("https://randomuser.me/api/?results=5");

	if (response.ok) {
		const users = await response.json();
		return users;
	} else {
		console.error("Error: ", response.status, response.statusText);
	}
};

export default fetchUsers;
