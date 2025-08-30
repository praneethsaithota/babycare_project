async function loadSlots() {
  try {
    const res = await fetch("../data/slots.json");
    const slots = await res.json();

    const container = document.getElementById("slotsContainer");
    container.innerHTML = "";

    slots.forEach(slot => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${slot.id}</td>
        <td>${slot.time}</td>
        <td><button class="book-btn" onclick="bookSlot(${slot.id}, '${slot.time}')">Book</button></td>
      `;
      container.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading slots:", err);
  }
}
