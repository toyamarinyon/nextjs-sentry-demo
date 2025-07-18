import { login, signup } from "./actions";

export default function LoginPage() {
	return (
		<form>
			<label htmlFor="email">Email:</label>
			<input name="email" type="email" required />
			<label htmlFor="password">Password:</label>
			<input name="password" type="password" required />
			<button type="submit" formAction={login}>
				Log in
			</button>
			<button type="submit" formAction={signup}>
				Sign up
			</button>
		</form>
	);
}
