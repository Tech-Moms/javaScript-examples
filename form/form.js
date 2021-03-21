function submitForm() {
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    submitOK = "true";

    if (name.length === 0) {
        document.getElementById("lengthError").innerHTML = "A name is required";
        submitOK = "false";
    } else if (name.length > 10) {
        document.getElementById("lengthError").innerHTML = "The name may have no more than 10 characters";
        submitOK = "false";
     } else {
        document.getElementById("lengthError").innerHTML = "";
    }

    if (isNaN(age) || age < 1 || age > 100) {
        document.getElementById("ageError").innerHTML = "The age must be between 1 and 100";
        submitOK = "false";
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    const emailValidation = /^[^\s@]+@[^\s@]+$/;
    if (!emailValidation.test(email.toLowerCase())) {
        document.getElementById("emailError").innerHTML = "Not a valid email!";
        submitOK = "false";
    } else {
        document.getElementById("lengthError").innerHTML = "";
    }

    if (submitOK == "false") {
        return false;
    }
}

