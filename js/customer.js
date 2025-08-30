function bookSlot(id, time) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({ id, time, date: new Date().toLocaleString() });
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("✅ Slot booked: " + time);
}

function logout() {
  window.location.href = "../login.html";
}

window.onload = loadSlots;

  function goToDashboard() {
    window.location.href = "customer/dashboard.html";
  }

