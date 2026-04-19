let balance = 0;
let user = "";

function login() {
  user = document.getElementById("username").value;

  if(user === "") {
    alert("Write username");
    return;
  }

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("user").innerText = user;
}

function deposit() {
  balance += 10;
  updateBalance();
}

function withdraw() {
  if(balance >= 5){
    balance -= 5;
  } else {
    alert("Not enough balance");
  }
  updateBalance();
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}

function logout() {
  location.reload();
}
