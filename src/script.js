function validateForm() {
    var appartment = document.getElementById("appartment")?.value;
    var room = document.getElementById("room")?.value;
    

    if (appartment == "") {
        alert("Bair must be filled out");
        return false;
    }

    if( room == "") {
        alert("toot must be filled out");
        return false;
    }
    
}

