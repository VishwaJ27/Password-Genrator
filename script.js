function generatePassword() {
  const length = document.getElementById("length").value;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = "";
  if (document.getElementById("uppercase").checked) chars += upper;
  if (document.getElementById("lowercase").checked) chars += lower;
  if (document.getElementById("numbers").checked) chars += numbers;
  if (document.getElementById("symbols").checked) chars += symbols;

  if (chars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("result").textContent = password;
}

function copyPassword() {
  const password = document.getElementById("result").textContent;

  if (!password) {
    alert("Generate a password first!");
    return;
  }

  navigator.clipboard.writeText(password);
  alert("Password copied!");
}
