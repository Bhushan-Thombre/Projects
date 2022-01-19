document.querySelector("#calculate").onclick = calculateTip;

function calculateTip() {
  let amount = document.querySelector("#amount").value;
  let person = document.querySelector("#persons").value;
  let service = document.querySelector("#services").value;

  if (amount === "" && service === "Select") {
    alert("Please enter valid values");
    return;
  }

  if (person === "1") {
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }

  let total = (amount * service) / person;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.querySelector(".tip").style.display = "block";
  document.querySelector("#total").innerHTML = total;
}
