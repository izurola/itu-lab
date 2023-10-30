
var dist_list = {
    "bra": {
        name: "Багануур",
        totalCommittee: 20,
        committee: {}
    },
    "bgh": {
        name: "Багахангай",
        totalCommittee: 20,
        committee: {}
    },
    "bgl": {
        name: "Баянгол",
        totalCommittee: 29,
        committee: {}
    },
    "bzr": {
        name: "Баянзүрх",
        totalCommittee: 30,
        committee: {}
    },
    "nal": {
        name: "Налайх",
        totalCommittee: 20,
        committee: {}
    },
    "son": {
        name: "Сонгинохайрхан",
        totalCommittee: 29,
        committee: {}
    },
    "suh": {
        name: "Сүхбаатар",
        totalCommittee: 21,
        committee: {}
    },
    "han": {
        name: "Хан-Уул",
        totalCommittee: 24,
        committee: {}
    },
    "chg": {
        name: "Чингэлтэй",
        totalCommittee: 19,
        committee: {}
    },
}

for (var key in dist_list) {
    if (key === "bra" || key == "han" || key == "chg" || key == "nal" || key == "bgh") {
        for (var i = 1; i <= dist_list[key].totalCommittee; i++) {
            dist_list[key].committee[i] = i + " хороо";
        }
    }
    if (key === "bzr") {
        for (var i = 1; i <= 28; i++) {
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[29] = "41 хороо";
        dist_list[key].committee[30] = "43 хороо";
    }
    if (key === "bgl") {
        for (var i = 1; i <= 26; i++) {
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[27] = "28 хороо";
        dist_list[key].committee[28] = "33 хороо";
        dist_list[key].committee[29] = "37 хороо";
    }
    if (key === "suh") {
        for (var i = 1; i <= 20; i++) {
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[21] = "25 хороо";
    }
    if (key === "son") {
        for (var i = 1; i <= 29; i++) {
            dist_list[key].committee[i] = i + " хороо";
        }
        dist_list[key].committee[30] = "31 хороо";
        dist_list[key].committee[31] = "32 хороо";
        dist_list[key].committee[32] = "37 хороо";
    }
}


var dist_sel = document.getElementById("district");

for (var key in dist_list) {
    var option = document.createElement("option");
    option.value = key;
    option.text = dist_list[key].name;
    dist_sel.appendChild(option);
}

var com_sel = document.getElementById("committee");

dist_sel.addEventListener("change", function () {
    var selected = this.value;
    com_sel.innerHTML = "";
    for (var key in dist_list[selected].committee) {
        var option = document.createElement("option");
        option.value = key;
        option.text = dist_list[selected].committee[key];
        com_sel.appendChild(option);
    }
});

for (var key in dist_list[com_sel.value].committee) {
    var option = document.createElement("option");
    option.value = key;
    option.text = dist_list[com_sel.value].committee[key];
    com_sel.appendChild(option);
}

function validateForm() {
    var district = document.getElementById("district").value;
    var committee = document.getElementById("committee").value;
    var appartment = document.getElementById("appartment").value;
    var room = document.getElementById("room").value;
    const error = document.getElementById('formErrors');
    const Err = document.createElement('p');
    Err.classList.add('error');
    error.innerHTML = '';
    var isProper = IsProperInfos(district, committee, appartment, room, Err, error)
    console.log(isProper);
    if (isProper == false)
        return false;
    alert("You have successfully submitted!");
    window.location = '/src/order.html';
}

function IsProperInfos(district, committee, appartment, room, Err, error) {
    if (district === "") {
        Err.textContent = 'District must be filled out.';
        error.appendChild(Err);
        return false;

    } else Err.textContent = "";

    if (committee === "") {
        Err.textContent = 'Committee must be filled out.';
        error.appendChild(Err);
        return false;
    } else Err.textContent = "";

    if (appartment === "") {
        Err.textContent = 'Appartment must be filled out.';
        error.appendChild(Err);
        return false;
    } else Err.textContent = "";


    if (room === "") {
        Err.textContent = 'Room must be filled out.';
        error.appendChild(Err);
        return false;
    } else Err.textContent = "";
    return true;
}

function getCurrentPosition() {
    const successCallback = (position) => {
        console.log(position);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}