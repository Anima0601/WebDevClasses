document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const rollno = document.getElementById("rollno").value;
    const dob = document.getElementById("dob").value;
    const bgrp = document.getElementById("bloodgroup").value;
    const file = document.getElementById("profilephoto").files[0];

    if (!name || !rollno || !dob || !bgrp || !file) {
        alert("Please fill all fields and select a photo.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const imgURL = event.target.result;

        const idCardHTML = `
            <img src="${imgURL}" alt="Profile Photo">
            <h3>${name}</h3>
            <p><strong>Roll No:</strong> ${rollno}</p>
            <p><strong>DOB:</strong> ${dob}</p>
            <p><strong>Blood Group:</strong> ${bgrp}</p>
        `;

        const idCardDiv = document.getElementById("id-card");
        idCardDiv.innerHTML = idCardHTML;
        idCardDiv.style.display = "block";
    };

    reader.readAsDataURL(file);
});
