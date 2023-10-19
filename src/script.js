function validateForm() {
    var district = document.getElementById("district").value;
    var committee = document.getElementById("committee").value;
    var appartment = document.getElementById("appartment").value;
    var room = document.getElementById("room").value;

    if (district === "") {
        alert("District must be filled out");
        return false;
    }

    if (committee === "") {
        alert("Committee must be filled out");
        return false;
    }

    if (appartment === "") {
        alert("Apartment must be filled out");
        return false;
    }

    if (room === "") {
        alert("Room must be filled out");
        return false;
    }
    
    alert("You have successfully registered!");
    return true; // Allow the form to submit
}


