var dist_list = {
    "bra" : {
        name: "Багануур",
        committee : {}
    },
    "bgh" : {
        name: "Багахангай",
        committee : {}
    },
    "bgl" : {
        name: "Баянгол",
        committee : {}
    },
    "bzr" : {
        name: "Баянзүрх",
        committee : {}
    },
    "nal" : {
        name: "Налайх",
        committee : {}
    },
    "son" : {
        name: "Сонгинохайрхан",
        committee : {}
    },
    "suh" : {
        name: "Сүхбаатар",
        committee : {}
    },
    "han" : {
        name: "Хан-Уул",
        committee : {}
    },
    "chg" : {
        name: "Чингэлтэй",
        committee : {}
    },
}

var dist_sel = document.getElementById("district");

for (var key in dist_list) {
    var option = document.createElement("option");
    option.value = key;
    option.text = dist_list[key].name;
    dist_sel.appendChild(option);
}

