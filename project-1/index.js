   let btn_color_change = document.querySelector('.btn-change-color')
   console.log(btn_color_change);
   let color = ['red', 'blue', 'black', 'yellow', 'green', 'gray', 'orange'];
   let background = document.querySelector('.background-body');
   let text_body = document.querySelector('.text-btn')
   btn_color_change.onclick = function() {
       let randomColorIndex = Math.floor(Math.random() * 10);
       if (randomColorIndex > color.length) {
           randomColorIndex = color.length - 1;
       }
       let indexText = randomColorIndex + 1;
       background.style.backgroundColor = color[randomColorIndex];
       text_body.style.color = color[indexText]
   }