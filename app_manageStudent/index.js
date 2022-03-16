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
 let list = [];
 let amount = 0;
 let isEditing = false;
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
                 if (inputNull == 0 && isEditing === false) {
                     const student = {
                         id: amount,
                         name: inputNameStudent.value,
                         class: inputClassStudent.value,
                         gpa: inputPointStudent.value
                     }
                     list.push(student);
                     amount++;
                     modal.style.display = 'none';
                     formStudent.style.display = 'none';
                     that.render();
                 }
             },
             //go to back home
             btnHome.addEventListener('click', function() {
                 boxStudent.style.display = 'none';
                 listStudent.style.display = 'none';
                 gird.style.display = 'flex';
             })
         )
     },
     ///render list student
     render: function() {
         let html = '';
         html = list.map(function(student) {
             return `<div class="student-item" data-item='${student.id}'>
                    <div class="detail-infor-student" >
                        <p class="student_name">Tên SV: ${student.name}</p>
                        <p class="student_class"> Lớp: ${student.class}</p>
                        <p class="student_gpa"> GPA Tích Lũy: ${student.gpa}</p>
                    </div>
                    <div class="btn-change">
                        <i class="fa-solid fa-trash icon icon-delete" ></i>
                        <i class="fa-solid fa-wrench icon icon-edit"></i>
                        <i class="fa-solid fa-ban icon icon-hidden"></i>
                    </div>
                </div>`
         });
         boxStudent.innerHTML = html.join('');


         const icon_deleteStudent = $$('.icon-delete');
         const icon_editStudent = $$('.icon-edit');
         const icon_hideStudent = $$('.icon-hidden');
         ///event delete student

         icon_deleteStudent.forEach(function(item) {
                 item.addEventListener('click', function() {
                     item.parentElement.parentElement.remove();
                 })
             })
             //event click to edit student
         let that = this;
         icon_editStudent.forEach(function(item) {
                 item.addEventListener('click', function() {
                     formStudent.style.display = 'flex';
                     modal.style.display = 'flex';
                     const studentSelect = item.parentElement.parentElement;
                     list.forEach(item => {
                         console.log(item.id)
                         if (item.id == studentSelect.dataset.item) {
                             inputNameStudent.value = item.name;
                             inputClassStudent.value = item.class;
                             inputPointStudent.value = item.gpa;
                             isEditing = true;
                             btnSave.addEventListener('click', function() {
                                 item.name = inputNameStudent.value;
                                 item.class = inputClassStudent.value;
                                 item.gpa = inputPointStudent.value;
                                 modal.style.display = 'none';
                                 formStudent.style.display = 'none';
                                 that.render();
                             })
                         }
                     });

                 })
             })
             ///event hidden student
         icon_hideStudent.forEach(function(item) {
                 item.addEventListener('click', function() {
                     const itemSelect = item.parentElement.parentElement.firstElementChild
                     itemSelect.style.textDecoration = itemSelect.style.textDecoration == 'line-through' ? 'none' : 'line-through';
                 })
             })
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
     },
     start: function() {
         this.handerClick();
     }
 }
 appAddStudent.start();