 const $ = document.querySelector.bind(document)
 const $$ = document.querySelectorAll.bind(document)
 const selectAddStudent = $('.btn-add__student');
 const gird = $('.gird');
 const boxStudent = $('.box-student__infor')
 const listStudent = $('.list-student')
 const btnHome = $('.btn-home')
 const modal = $('.modal');
 const formStudent = $('.form-student');
 const btnAddStudent = $('.list-student__btn-add-student')
 const btnCancel = $('.btn-cancel');
 const btnSave = $('.btn-save-infor');
 const input = $$('.input')
 const inputNameStudent = $('.form-student__name');
 const inputClassStudent = $('.form-student__class');
 const inputPointStudent = $('.form-student__gpa');
 let amountStudent = -1;
 let isEditing = 'true'
 const appAddStudent = {
     //handle Events
     handerClick: function() {
         const that = this;

         //Selection add Student
         selectAddStudent.addEventListener('click', function() {
                 gird.style.display = 'none';
                 boxStudent.style.display = 'flex';
                 listStudent.style.display = 'flex'
             })
             ///btn add student

         btnAddStudent.addEventListener('click', function() {
             modal.style.display = 'block';
             formStudent.style.display = 'flex'
             input.forEach(function(e) {
                 e.value = '';
             })
         })

         //btn cancel add student
         btnCancel.addEventListener('click', function() {
             modal.style.display = 'none';
             formStudent.style.display = 'none'
         })

         //btn save student
         btnSave.addEventListener('click', function() {
                 //check value null
                 let inputNull = 0;
                 input.forEach(function(item) {
                     if (item.value == "") {
                         inputNull++;
                         item.classList.add('input-error');
                     } else {
                         item.classList.remove('input-error');
                         inputPointStudent.classList.remove('input-error');
                     }
                 })
                 if (inputNull == 0) {
                     let listStudentInLocal = that.getStudentLocalStorage();
                     amountStudent++;
                     const studentInfor = {
                         name: inputNameStudent.value,
                         class: inputClassStudent.value,
                         gpa: inputPointStudent.value,
                         id: amountStudent
                     }
                     listStudentInLocal.push(studentInfor);
                     localStorage.setItem('students', JSON.stringify(listStudentInLocal));
                     modal.style.display = 'none';
                     formStudent.style.display = 'none';
                     isEditing = false;

                     const icon_deleteStudent = $$('.icon-delete');
                     const icon_editStudent = $$('.icon-edit');
                     const icon_hideStudent = $$('.icon-hidden');
                     ///event delete student
                     that.render();
                     icon_deleteStudent.forEach(function(item) {
                             let list = that.getStudentLocalStorage();
                             console.log(item);
                             $(item).on('click', function() {
                                 list.forEach(function(student) {
                                     if (item.id == student.id) {
                                         list.splice(item.id - 1, 1);
                                     }
                                 })
                             })
                             JSON.stringify(localStorage.setItem('student', list));
                         })
                         //event click to edit student
                     icon_editStudent.forEach(function(item) {
                             $(item).on('click', function() {
                                 console.log('aa')
                                 formStudent.style.display = 'flex';
                                 modal.style.display = 'flex';
                                 const getValue = that.getStudentLocalStorage();
                                 let studentSelect = {};
                                 getValue.forEach(function(student) {
                                     if (student.id == item.id) {
                                         studentSelect = student;
                                     }
                                 })
                                 inputNameStudent.value = studentSelect.name;
                                 inputClassStudent.value = studentSelect.class;
                                 inputPointStudent.value = studentSelect.gpa;
                                 isEditing = true;
                             })
                         })
                         ///event hidden student
                     icon_hideStudent.forEach(function(item) {
                         item.addEventListener('click', function() {
                             console.log("aa")
                             const boxDetailInfor = item.parentElement.parentElement.firstElementChild;
                             if (boxDetailInfor.style.textDecoration == 'line-through') {
                                 boxDetailInfor.style.textDecoration = 'none';
                             } else
                                 boxDetailInfor.style.textDecoration = 'line-through'
                         })
                     })
                 }
                 // change color border when oninput
                 input.forEach(function(item) {
                     item.addEventListener('keyup', function(e) {
                         if (item.value == "") {
                             inputNull++;
                             item.classList.add('input-error');
                         } else {
                             item.classList.remove('input-error');
                             inputPointStudent.classList.remove('input-error');
                         }

                         // catch keyboard enter
                         if (e.keyCode == 13) {
                             btnSave.click();
                         }
                     })
                 })
             })
             //go to back home
         btnHome.addEventListener('click', function() {
             boxStudent.style.display = 'none';
             listStudent.style.display = 'none';
             gird.style.display = 'flex';
         })
     },
     ///get student in localstorage
     getStudentLocalStorage: function() {
         let list = localStorage.getItem('students') == null ? [] : JSON.parse(localStorage.getItem('students'));
         return list;
     },
     render: function() {
         const students = this.getStudentLocalStorage();
         if (students) {
             let html = students.map(student => {
                 let studentInfor = `<div class="student-item">
      <div class="detail-infor-student">
          <p class="student_name"> Tên SV: ${student.name}</p>
          <p class="student_class"> Lớp: ${student.class}</p>
          <p class="student_gpa"> GPA Tích Lũy: ${student.gpa}</p>
      </div>
      <div class="btn-change">
          <i class="fa-solid fa-trash icon icon-delete" data-icon-delete=${student.id}></i>
          <i class="fa-solid fa-wrench icon icon-edit" data-icon-edit=${student.id}></i>
          <i class="fa-solid fa-ban icon icon-hidden" data-icon-hidden=${student.id}></i>
      </div>
  </div>`
                 return studentInfor
             });
             boxStudent.innerHTML = html.join('');
         }
     },
     start: function() {
         this.render();
         this.handerClick();
     }
 }
 appAddStudent.start();