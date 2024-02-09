const database = include('/databaseConnection');


async function getAllUsers() {
	let sqlQuery = `
	web_user_id, first_name, last_name, email
		SELECT * FROM web_user
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from web_user table");
		console.log(err);
		return null;
	}
}


module.exports = {getAllUsers}
