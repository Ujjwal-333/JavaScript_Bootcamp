(function () {
  emailjs.init("CM0grJ_lF3LcYZUIH");
})();

const form = document.getElementById("regForm");
const modal = document.getElementById("calendarModal");
const openBtn = document.getElementById("openCalendar");
const closeBtn = document.getElementById("closeModal");
const yearGrid = document.getElementById("yearGrid");
let currentYear = 2026;

// Form Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    date: document.getElementById("selectedDate").value,
    gender: document.getElementById("gender").value,
    passion: document.getElementById("passion").value,
    experience: document.getElementById("experience").value,
    about: document.getElementById("about").value,
    to_name: "Ujjwal",
  };

  emailjs.send("service_p58o31d", "template_y1rcf1b", formData).then(
    () => {
      alert(
        "Tumhara form ujjwal ko send ho gya hai apko jald hi response milega",
      );
      form.reset();
    },
    (error) => {
      alert("Error: Email nahi gaya.");
      console.log(error);
    },
  );
});

// Modal Logic
openBtn.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow_y = "scroll"; // Lock background scroll
  renderYear(currentYear);
};

const closeModalFunc = () => {
  modal.style.display = "none";
  // Agar mobile nahi hai toh scroll locked rakhein (as per your request)
  if (window.innerWidth > 600) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
};

closeBtn.onclick = closeModalFunc;
window.onclick = (e) => {
  if (e.target == modal) closeModalFunc();
};

function changeYear(step) {
  currentYear += step;
  renderYear(currentYear);
}

function renderYear(year) {
  document.getElementById("displayYear").innerText = year;
  yearGrid.innerHTML = "";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month, index) => {
    const monthBox = document.createElement("div");
    monthBox.className = "month-box";
    monthBox.innerHTML = `<div class="month-name">${month}</div>`;
    const daysDiv = document.createElement("div");
    daysDiv.className = "days-grid";

    const firstDay = new Date(year, index, 1).getDay();
    const daysInMonth = new Date(year, index + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      daysDiv.appendChild(document.createElement("span"));
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const span = document.createElement("span");
      span.className = "day";
      span.innerText = d;
      span.onclick = () => {
        const m = (index + 1).toString().padStart(2, "0");
        const day = d.toString().padStart(2, "0");
        document.getElementById("selectedDate").value = `${day}-${m}-${year}`;
        closeModalFunc();
      };
      daysDiv.appendChild(span);
    }
    monthBox.appendChild(daysDiv);
    yearGrid.appendChild(monthBox);
  });
}
