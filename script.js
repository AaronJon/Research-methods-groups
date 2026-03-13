const container = document.getElementById("groupContainer");
const modal = document.getElementById("groupModal");
const modalTitle = document.getElementById("modalTitle");
const studentList = document.getElementById("studentList");
const closeBtn = document.querySelector(".close");


// Create group cards
Object.keys(groups).forEach(groupNumber => {

    const card = document.createElement("div");

    card.className = "group-card";

    card.innerText = "Group " + groupNumber;

    card.onclick = () => showGroup(groupNumber);

    container.appendChild(card);

});


// Show group in modal
function showGroup(groupNumber){

    modalTitle.innerText = "Group " + groupNumber;

    studentList.innerHTML = "";

    const students = groups[groupNumber];

    students.forEach((student,index)=>{

        const row = `
        <tr>
            <td>${index+1}</td>
            <td>${student.name}</td>
            <td>${student.index}</td>
            <td>${student.region}</td>
        </tr>
        `;

        studentList.innerHTML += row;

    });

    modal.style.display = "flex";
}


// Close modal
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e)=>{
if(e.target == modal){
modal.style.display = "none";
}
}
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function(){

const value = searchInput.value.toLowerCase().trim();

searchResults.innerHTML = "";

if(value.length < 3){
return;
}

for(let group in groups){

groups[group].forEach(student => {

if(
student.name.toLowerCase().includes(value) ||
student.index.toLowerCase().includes(value)
){

const result = document.createElement("div");

result.className = "result-card";

result.innerHTML = `
<div>
<div class="result-name">${student.name}</div>
<div>${student.index}</div>
</div>

<div class="result-group">Group ${group}</div>
`;

searchResults.appendChild(result);

}

});

}

});