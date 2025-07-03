const email = document.querySelector("#email");
const submitBtn = document.querySelector(".form__btn");
const emailRegexp =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;

const checkInput = (input, msg) => {
	const errorTxt = input.previousElementSibling.querySelector(".email-error");
	const parent = input.parentElement;

	if (input.value !== "") {
		if (emailRegexp.test(input.value)) {
			localStorage.setItem('userEmail', input.value)
			errorTxt.textContent = "";
			parent.classList.remove("error");
			window.location.href = "subscribtion-status.html";
		} else {
			parent.classList.add("error");
			errorTxt.textContent = msg;
		}
	} else {
		errorTxt.textContent = "Please fill in field below!";
	}
};

const handleForm = (e) => {
	e.preventDefault();
	checkInput(email, "Valid email required");
};

submitBtn.addEventListener("click", handleForm);
