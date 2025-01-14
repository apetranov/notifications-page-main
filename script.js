const toggleDiv = document.getElementById("toggleDiv");
const hiddenContent = document.getElementById("hiddenContent");

const toggleDiv2 = document.getElementById("toggleDiv2");
const hiddenContent2 = document.getElementById("hiddenContent2");

toggleDiv.addEventListener("click", () => {
  if (
    hiddenContent.style.display === "none" ||
    hiddenContent.style.display === ""
  ) {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }
});

toggleDiv2.addEventListener("click", () => {
  if (
    hiddenContent2.style.display === "none" ||
    hiddenContent2.style.display === ""
  ) {
    hiddenContent2.style.display = "block";
  } else {
    hiddenContent2.style.display = "none";
  }
});
