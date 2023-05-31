
const FormValidator = (function() {

    const showError = () => {
        console.log("kkrrrr");  
        emailInput.classList.add("invalid-email");
        errorMsg.classList.remove("unactive");
    }

    const removeError = () => {
        emailInput.classList.remove("invalid-email");
        errorMsg.classList.add("unactive");
    }

    const isValidEmail = () => {
        console.log(emailInput.validity.typeMismatch);
        return !emailInput.validity.typeMismatch;
    }

    const isErrorShown = () => {
        return !errorMsg.classList.contains("unactive"); 
    }

    const showSuccess = () => {
        newsElt.classList.add("unactive");
        successElt.classList.remove("unactive");
        emailSub.textContent = emailInput.value;
        
    }

    const submitButton = document.querySelector(".sign-up .subscribe-button");
    const dismissButton = document.querySelector(".success-subscribe button");
    const errorMsg = document.querySelector(".email-error");
    const emailInput = document.querySelector("input");
    const successElt = document.querySelector(".success-subscribe");
    const newsElt = document.querySelector(".sign-up");
    const emailSub = document.querySelector(".sub-mail");

    dismissButton.addEventListener("click", () => {
        window.location.href = "https://foufouboy.github.io/frontendmentor_projects/newsletter-component-main/"; 
    });

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (isValidEmail()) {
            showSuccess();
        } else {
            showError();
        } 
    });

    emailInput.addEventListener("input", () => {
        if (isErrorShown()) {
            removeError();
        }
    });

})();
