const groupContainer = document.getElementById("groupContainer");
const modal = document.getElementById("groupModal");
const studentList = document.getElementById("studentList");

// Populate groups
Object.keys(groups).forEach(num => {
    const card = document.createElement("div");
    card.className = "group-card";
    card.innerText = `Group ${num}`;
    card.onclick = () => showGroup(num);
    groupContainer.appendChild(card);
});

function showGroup(num) {
    document.getElementById("modalTitle").innerText = `Group ${num}`;
    studentList.innerHTML = groups[num].map((s, i) => `
        <tr><td>${i + 1}</td><td>${s.name}</td><td>${s.index}</td><td>${s.region}</td></tr>
    `).join('');
    modal.style.display = "block";
}

// Close logic
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Search logic
document.getElementById("searchInput").addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase().trim();
    const results = document.getElementById("searchResults");
    results.innerHTML = val.length < 2 ? "" : Object.entries(groups).flatMap(([g, list]) => 
        list.filter(s => s.name.toLowerCase().includes(val) || s.index.toLowerCase().includes(val))
            .map(s => `<div class="result-card"><div><strong>${s.name}</strong><br>${s.index}</div><div class="result-group">Group ${g}</div></div>`)
    ).join('');
});
