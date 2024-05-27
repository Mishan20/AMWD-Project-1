// Initialize an empty array to store student details
let students = [];

// Function to add a student
function addStudent(name, dob, address, gender, contact) {
    students.push({ name, dob, address, gender, contact });
    renderStudentList();
}

// Function to delete a student by index
function deleteStudent(index) {
    students.splice(index, 1);
    renderStudentList();
}

function toggleSearch() {
    const searchInputGroup = document.querySelector('.search-input-group');
    if (searchInputGroup.style.display === 'flex') {
        searchInputGroup.style.display = 'none';
    } else {
        searchInputGroup.style.display = 'flex';
    }
}

// Function to render the student list
function renderStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4  mr-0';
        card.innerHTML = `
            <div class="card text-center">
                <div class="card-header">
                    <img src="${student.gender === 'Male' ? 'student 1.png' : 'student 2.png'}" alt="${student.gender}" class="rounded-circle w-150 h-150">
                </div>
                <div class="card-body  text-white">
                    <p class="card-text"><strong>Student Name - </strong> ${student.name}</p>
                    <p class="card-text"><strong>Gender - </strong> ${student.gender}</p>
                    <p class="card-text"><strong>DOB - </strong> ${student.dob}</p>
                    <p class="card-text"><strong>Address - </strong> ${student.address}</p>
                    <p class="card-text"><strong>Contact - </strong> ${student.contact}</p>
                    <button class="btn btn-danger mt-3" onclick="deleteStudent(${index})">Delete</button>
                </div>
            </div>
        `;
        studentList.appendChild(card);
    });
}


// Event listener for the form submission
document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const dob = document.getElementById('studentDob').value;
    const address = document.getElementById('studentAddress').value;
    const gender = document.getElementById('studentGender').value;
    const contact = document.getElementById('studentContact').value;

    addStudent(name, dob, address, gender, contact);

    // Clear the form
    document.getElementById('student-form').reset();

    // Close the modal
    $('#studentModal').modal('hide');
});
