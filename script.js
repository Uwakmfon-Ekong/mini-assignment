document.getElementById("submit").addEventListener("click", function () {
  console.log('click working')
  const el = document.getElementsByClassName("popup");
  console.log(el)
    el[0].classList.add("active");
});


document
  .getElementById("dismiss-popup-Btn")
  .addEventListener("click", function () {
    console.log("click working");
    const dismiss = document.getElementsByClassName("popup");
    console.log(dismiss);
    dismiss[0].classList.remove("active");
  });
  // Get references to the icon elements
const iconElements = document.querySelectorAll('.icon');

// Add a click event listener to each icon element
iconElements.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // Remove the "active" class from all icons
    iconElements.forEach((icon) => {
      icon.classList.remove('active');
    });

    // Add the "active" class to the clicked icon
    icon.classList.add('active');
  });
});