const btnAdd = document.querySelector('.btn-add');
const boxQuestion = document.querySelector('.main')
const btnExit = document.querySelector('.btn-exit')
const btnSave = document.querySelector('.btn-save')
const contentQuestion = document.querySelector('#question')
const contentAnswer = document.querySelector('#answer');
const form = document.querySelector('.form')
const editQuestion = document.querySelector('.btn-edit')


function getContentQuestion(e) {
    e.preventDefault();
    const question = contentQuestion.value;
    const answer_content = contentAnswer.value;
    if (contentQuestion.value !== '' && contentAnswer.value !== '') {
        //reset question
        if (document.querySelector('.detail-question')) {
            document.querySelector('.detail-question').remove()
        }
        boxQuestion.insertAdjacentHTML("beforeend", `<div class="detail-question">
        <p class="question-title">${contentQuestion.value}</p>
        <a href="#" class="control-answer">Show/Hiden Answer</a>
        <p class="answer">${contentAnswer.value}</p>
        <div class="btn-control sub-control">
            <button class="btn btn-sub-edit">Edit</button>
            <button class="btn btn-delete">Delete</button>
        </div>
        </div>`)
        form.style.display = 'none';
        btnAdd.style.display = 'none';
        ///detail question
        const controlAnswer = document.querySelector('.control-answer');
        const answer = document.querySelector('.answer')
        const btnDelete = document.querySelector('.btn-delete')
        const detailQuestion = document.querySelector('.detail-question')
        const btnEdit = document.querySelector('.btn-sub-edit');
        //show - hidden answer
        if (controlAnswer) {
            controlAnswer.addEventListener('click', function() {
                if (answer.style.display == 'block') {
                    answer.style.display = 'none'
                } else
                    answer.style.display = 'block'
            })
        }

        //delete Answer
        if (btnDelete) {
            btnDelete.addEventListener('click', function() {
                detailQuestion.remove();
                btnAdd.style.display = 'block';
            })
        }
        ///edit Answer
        if (btnEdit) {
            btnEdit.addEventListener('click', function() {
                form.style.display = 'block';
                contentQuestion.value = question;
                contentAnswer.value = answer_content;
                btnAdd.style.display = 'block'
                btnSave.disabled = true;
                detailQuestion.style.display = 'none'
            })
        }
    }
}

btnAdd.addEventListener('click', function() {
    if (boxQuestion.style.display === 'block') {
        boxQuestion.style.display = 'none';
    } else {
        boxQuestion.style.display = 'block'
        form.style.display = 'block';
        contentQuestion.value = '';
        contentAnswer.value = '';
    }
})
btnExit.addEventListener('click', function() {
    boxQuestion.style.display = 'none'
})
btnSave.addEventListener('click', getContentQuestion);
editQuestion.addEventListener('click', getContentQuestion)