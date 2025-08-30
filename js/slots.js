async function loadSlots() {
  try {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const res = await fetch("../data/slots.json");
    const slots = await res.json();

    const container = document.getElementById("slotsContainer");
    container.innerHTML = "";

    slots.forEach((slot) => {
      const booking = allBookings.find((b) => b.id === slot.id);

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${slot.id}</td>
        <td>${slot.time}</td>
        <td>
          ${
            booking
              ? booking.user === currentUser?.email
                ? `<button class="cancel-btn" onclick="cancelSlot(${slot.id})">Cancel</button>`
                : `<span style="color:red;">Booked</span>`
              : `<button class="book-btn" onclick="bookSlot(${slot.id}, '${slot.time}')">Book</button>`
          }
        </td>
      `;
      container.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading slots:", err);
  }
}

window.onload = loadSlots;
