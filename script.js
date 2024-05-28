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
        card.className = 'col-12 col-md-6 col-lg-4 mb-4';
        card.innerHTML = `
            <div class="card mx-auto">
                <div class="card-header">
                    <img src="${student.gender === 'Male' ? './assets/student 1.png' : './assets/student 2.png'}" alt="${student.gender}" class="rounded-circle w-150 h-150 mx-auto">
                </div>
                <div class="card-body text-white">
                    <div class="text-container">
                        <div>
                            <div class="card-text d-flex justify-content-left">
                                <strong>Student Name</strong>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <strong>Gender</strong>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <strong>DOB</strong> 
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                 <strong>Address</strong> 
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <strong>Contact</strong> 
                            </div>
                         </div>

                        <div>
                            <div class="card-text d-flex justify-content-left">
                                <span> - </span>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <span> - </span>
                            </div>
                            <div class="card-text d-flex justify-content-center">
                                <span> - </span>
                            </div>
                            <div class="card-text d-flex justify-content-center">
                                <span> - </span>
                            </div>
                            <div class="card-text d-flex justify-content-center">
                                <span> - </span>
                            </div>
                        </div>

                        <div>
                            <div class="card-text d-flex justify-content-left">
                                <span>${student.name}</span>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <span>${student.gender}</span>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <span>${student.dob}</span>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <span>${student.address}</span>
                            </div>
                            <div class="card-text d-flex justify-content-left">
                                <span>${student.contact}</span>
                            </div>
                        </div>
                    </div>   
                     <button class="btn-delete btn-danger mt-3" onclick="deleteStudent(${index})">Delete</button>
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
