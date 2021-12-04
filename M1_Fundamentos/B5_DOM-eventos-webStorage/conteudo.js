document.getElementById("header-container").innerText = "Gerenciador de Tempo";

const naoEmergencial = document.getElementsByClassName("no-emergency-tasks")[0].innerText;
naoEmergencial.style.color = "blue";

console.log(document.getElementsByClassName("no-emergency-tasks")[0].innerText);