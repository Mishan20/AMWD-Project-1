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

// Function to render the student list
function renderStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card text-center">
                <div class="card-header bg-warning">
                    <img src="${student.gender === 'Male' ? 'student 1.png' : 'student 2.png'}" alt="${student.gender}" class="rounded-circle" width="100" height="100">
                </div>
                <div class="card-body bg-dark text-white">
                    <p class="card-text">Student Name - ${student.name}</p>
                    <p class="card-text">Gender - ${student.gender}</p>
                    <p class="card-text">DOB  - ${student.dob}</p>
                    <p class="card-text">Address - ${student.address}</p>
                    <p class="card-text">Contact - ${student.contact}</p>
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
