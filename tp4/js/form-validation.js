function testdate() {
    let dateNaissance = new Date(2002, 09, 14);
    let dateNaissanceTimestamp = dateNaissance.getTime();
    let nowTimestamp = Date.now();
    if (nowTimestamp > d) {
        return false;
    } else {
        return true;
    }
}

function Validation() {
    n = document.getElementById("nom").value;
    p = document.getElementById("prenom").value;
    d = document.getElementById("date").value;
    m = document.getElementById("mail").value;
    adr = document.getElementById("adresse").value;


    if (n.length > 5 && p.length > 5 && testdate() && validateEmail(m) == true) {

        document.querySelector(".titre").textContent = "Formulaire enregistré avec succés!"
        contactStore.add(n, p, d, adr, m);
        var contactList = contactStore.getList();
        document.querySelector("table tbody").innerHTML =
            "<tr><td>nom: </td><td> Prenom:</td><td>Date de Naissance:</td><td>Adresse:</td><td> Mail:</td><tr>" +
            "<tr><td>"
        for (var index in contactList) {
            document.querySelector("table tbody").innerHTML =
                document.querySelector("table tbody").innerHTML + "<tr><td>" +
                n +
                "</td><td>" +
                p +
                "</td><td>" +
                d +
                "</td><td>" +
                adr +
                "</td><td>" +
                m +
                "</td><tr>";
        };
    };
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
}