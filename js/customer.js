function bookSlot(id, time) {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // get logged in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("⚠️ Please login first!");
    return;
  }

  // attach user email with booking
  bookings.push({
    id,
    time,
    date: new Date().toLocaleString(),
    user: currentUser.email
  });

  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("✅ Slot booked: " + time);
  loadSlots(); // refresh table after booking
}


function cancelSlot(id) {
  const confirmCancel = confirm("Are you sure you want to cancel this slot?");
  if (!confirmCancel) return;

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("⚠️ Please login first!");
    return;
  }

  // cancel only the booking of current user
  bookings = bookings.filter(b => !(b.id === id && b.user === currentUser.email));

  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("❌ Slot cancelled: " + id);

  loadSlots();
}


function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
}