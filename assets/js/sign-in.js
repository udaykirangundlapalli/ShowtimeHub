const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');

function signUpValidateForm() {
	var name = document.forms["sign-up-form"]["sign-up-name"].value.trim();
	if (!name) {
		asAlertMsg({
			type: "error",
			title: "Empty Field",
			message: "Name can not be empty.",
			button: { title: "Close", bg: "Cancel" }
		});
		return false;
	}
	var email = document.forms["sign-up-form"]["sign-up-email"].value.trim();
	var password = document.forms["sign-up-form"]["sign-up-passwd"].value;
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		asAlertMsg({
			type: "error",
			title: "Invalid Email",
			message: "Please provide a valid email address.",
			button: { title: "Close", bg: "Cancel" }
		});
		return false;
	}
	if (password.length < 8) {
		asAlertMsg({
			type: "error",
			title: "Weak Password",
			message: "Password must be at least 8 characters.",
			button: { title: "Close", bg: "Cancel" }
		});
		return false;
	}
	return true;
}

function signInValidateForm() {
	var email = document.forms["sign-in-form"]["sign-in-email"].value.trim();
	var password = document.forms["sign-in-form"]["sign-in-passwd"].value;
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		asAlertMsg({
			type: "error",
			title: "Invalid Email",
			message: "Please enter a valid e-mail address.",
			button: { title: "Close", bg: "Cancel" }
		});
		return false;
	}
	if (password.length < 8) {
		asAlertMsg({
			type: "error",
			title: "Weak Password",
			message: "Password must be at least 8 characters.",
			button: { title: "Close", bg: "Cancel" }
		});
		return false;
	}
	return true;
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Password visibility toggles
function togglePassword(id, toggleId) {
	const input = document.getElementById(id);
	const button = document.getElementById(toggleId);
	if (!input || !button) return;
	button.addEventListener('click', () => {
		const isPassword = input.type === 'password';
		input.type = isPassword ? 'text' : 'password';
		button.textContent = isPassword ? 'Hide' : 'Show';
		button.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
	});
}

togglePassword('signup-passwd', 'toggle-signup-pass');
togglePassword('signin-passwd', 'toggle-signin-pass');
