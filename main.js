var first_name;
var last_name;
var namee;
var role;
var gender;

function save() {
    first_name = document.getElementById("firstname").value;
    last_name = document.getElementById("lastname").value;
    role = document.getElementById("role").value;
    gender = document.getElementById("gender").value;
    if (role == "Teacher") {
        if (gender == "Boy") {
            namee = "Mr. " + last_name;
        } else if (gender == "Girl") {
            namee = "Ms. " + last_name;
        } else if (gender == "Other") {
            namee = "Mx. " + last_name;
        }
    } else if (role == "Student") {
        namee = first_name + " " + last_name;
    }
    localStorage.clear();
    localStorage.setItem("name", namee);
    window.location = "1font-manipulator.html";
}