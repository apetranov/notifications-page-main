const toggleDiv = document.getElementById("toggleDiv");
const hiddenContent = document.getElementById("hiddenContent");

const toggleDiv2 = document.getElementById("toggleDiv2");
const hiddenContent2 = document.getElementById("hiddenContent2");
const read = document.querySelector(".read");
const read2 = document.querySelector(".read2");

const toggleDiv3 = document.getElementById("toggleDiv3");
const hiddenContent3 = document.getElementById("hiddenContent3");
const read3 = document.querySelector(".read3");

const counterElement = document.querySelector(".notisCount");

const markAllRead = document.querySelector(".markAllRead");

markAllRead.addEventListener("click", () => {
  console.log("Mark all read clicked");
  read.innerHTML = "Read";
  read2.innerHTML = "Read";
  read3.innerHTML = "Read";
  counterElement.textContent = "0";
});

toggleDiv.addEventListener("click", () => {
  // Check the current value of read.innerHTML before resetting it
  if (read.innerHTML === "Unread") {
    let currentValue = parseInt(counterElement.textContent, 10);

    // Check if the value is a valid number
    if (!isNaN(currentValue)) {
      // Decrement the value by 1
      currentValue -= 1;

      // Update the element with the new value
      counterElement.textContent = currentValue;
    } else {
      console.error("Invalid number in the counter element");
    }
  }

  // Toggle the hidden content visibility
  hiddenContent.style.display =
    hiddenContent.style.display === "block" ? "none" : "block";

  // Reset read.innerHTML
  read.innerHTML = "Read";
});

toggleDiv2.addEventListener("click", () => {
  // Check the current value of read.innerHTML before resetting it
  if (read2.innerHTML === "Unread") {
    let currentValue = parseInt(counterElement.textContent, 10);

    // Check if the value is a valid number
    if (!isNaN(currentValue)) {
      // Decrement the value by 1
      currentValue -= 1;

      // Update the element with the new value
      counterElement.textContent = currentValue;
    } else {
      console.error("Invalid number in the counter element");
    }
  }

  // Toggle the hidden content visibility
  hiddenContent2.style.display =
    hiddenContent2.style.display === "block" ? "none" : "block";

  // Reset read.innerHTML
  read2.innerHTML = "Read";
});

toggleDiv3.addEventListener("click", () => {
  // Check the current value of read.innerHTML before resetting it
  if (read3.innerHTML === "Unread") {
    let currentValue = parseInt(counterElement.textContent, 10);

    // Check if the value is a valid number
    if (!isNaN(currentValue)) {
      // Decrement the value by 1
      currentValue -= 1;

      // Update the element with the new value
      counterElement.textContent = currentValue;
    } else {
      console.error("Invalid number in the counter element");
    }
  }

  // Toggle the hidden content visibility
  hiddenContent3.style.display =
    hiddenContent3.style.display === "block" ? "none" : "block";

  // Reset read.innerHTML
  read3.innerHTML = "Read";
});
