const summaryEmail = () => {
	const email = localStorage.getItem("userEmail");
	const finalEmail = document.querySelector(".sub__email");
	finalEmail.textContent = email;
};

summaryEmail();
