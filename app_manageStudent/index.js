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
const icon_deleteStudent = $$('.icon-delete');
const icon_editStudent = $$('.icon-edit');
const icon_hideStudent = $$('.icon-hidden');
let amountStudent = -1;
const appAddStudent = {
    //handle Events
    handerClick: function() {

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
                    amountStudent++;
                    const studentInfor = {
                        name: inputNameStudent.value,
                        class: inputClassStudent.value,
                        gpa: inputPointStudent.value,
                        id: amountStudent
                    }

                    localStorage.setItem(`'student-${amountStudent}'`, JSON.stringify(studentInfor));
                    boxStudent.insertAdjacentHTML("beforeend", `<div class="student-item student-${amountStudent}" data-student=${amountStudent}>
                                                                        <div class="detail-infor-student">
                                                                            <p class="student_name">Tên sinh viên: ${inputNameStudent.value}</p>
                                                                            <p class="student_class">Lớp: ${inputClassStudent.value}</p>
                                                                            <p class="student_gpa">GPA Tích Lũy: ${inputPointStudent.value}</p>
                                                                            </div>
                                                                        <div class="btn-change">
                                                                            <i class="fa-solid fa-trash icon icon-delete"></i>
                                                                            <i class="fa-solid fa-wrench icon icon-edit"></i>
                                                                            <i class="fa-solid fa-ban icon icon-hidden"></i>
                                                                        </div>
                                                                    </div>`)
                    const icon_deleteStudent = $$('.icon-delete');
                    const icon_editStudent = $$('.icon-edit');
                    const icon_hideStudent = $$('.icon-hidden');
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

                    // event click to delete student
                    icon_deleteStudent.forEach(function(item) {
                            item.addEventListener('click', function() {
                                item.parentElement.parentElement.remove();
                            })
                        })
                        //event click to edit student
                    icon_editStudent.forEach(function(item) {
                            item.addEventListener('click', function() {
                                formStudent.style.display = 'flex';
                                modal.style.display = 'flex';

                                const boxDetailInfor = item.parentElement.parentElement;
                                const getValue = JSON.parse(localStorage.getItem(`'student-${boxDetailInfor.dataset.student}'`));
                                console.log(getValue)
                                inputNameStudent.value = getValue.name;
                                inputClassStudent.value = getValue.class;
                                inputPointStudent.value = getValue.gpa;

                                btnSave.removeEventListener('click', true)
                                btnSave.addEventListener('click', function() {
                                    const studentInfor = {
                                        name: inputNameStudent.value,
                                        class: inputClassStudent.value,
                                        gpa: inputPointStudent.value,
                                        id: boxDetailInfor.dataset.student
                                    }
                                    localStorage.setItem(`'student-${boxDetailInfor.dataset.student}'`, JSON.stringify(studentInfor));
                                })
                            })
                        })
                        ///event hidden student
                    icon_hideStudent.forEach(function(item) {
                        item.addEventListener('click', function() {
                            const boxDetailInfor = item.parentElement.parentElement.firstElementChild;
                            if (boxDetailInfor.style.textDecoration == 'line-through') {
                                boxDetailInfor.style.textDecoration = 'none';
                            } else
                                boxDetailInfor.style.textDecoration = 'line-through'
                        })
                    })
                    modal.style.display = 'none';
                    formStudent.style.display = 'none'
                }
            })
            //go to back home
        btnHome.addEventListener('click', function() {
            boxStudent.style.display = 'none';
            listStudent.style.display = 'none';
            gird.style.display = 'flex';
        })
    },

    start: function() {
        this.handerClick();
    }
}
appAddStudent.start();