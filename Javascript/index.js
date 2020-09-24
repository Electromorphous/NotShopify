const textInputDiv = document.querySelector(".text-input-div");
const inputEmail = document.querySelector(".input-email");

inputEmail.addEventListener("keyup", (e) => {
  textInputDiv.className = "text-input-div active";
  if (e.target.value.length === 0) {
    textInputDiv.className = "text-input-div inactive";
  }
});
