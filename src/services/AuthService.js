import axios from "axios";

const API_URL = "https://bascom-backend.herokuapp.com/users/";

class AuthService {
	register(firstName, lastName, email, password) {
		return axios({
			method: "post",
			url: API_URL + "signup",
			data: { firstName, lastName, email, password },
		});
	}

	login(email, password) {
		return axios({
			method: "post",
			url: API_URL + "auth/login",
			data: { email, password },
		})
			.then((response) => {
				if (response.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.user));
				}
				return response;
			})
			.catch((err) => {
				return err;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}
}

export default new AuthService();
