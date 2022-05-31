const addSelectListener = () => {
  const options = ["phone", "email"];
  document
    .getElementById("contact-option")
    .addEventListener("change", (event) => {
      // get current selection
      const curSelection = event.target.value;

      if (options.indexOf(curSelection) >= 0) {
        // set input label name
        document.getElementById(
          "option-input-label"
        ).innerHTML = `Enter your ${curSelection}`;

        // set element visibility
        document.getElementById("option-input-wrapper").style.display = "block";
      }
    });
};

addSelectListener();
