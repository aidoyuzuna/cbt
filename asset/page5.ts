let LodeValue = localStorage.getItem("page5");
let page5Text = document.getElementById('page5-texterea') as HTMLTextAreaElement;
const page5NextButton = document.getElementById('page5-next') as HTMLButtonElement;
const page5BeforeButton = document.getElementById('page5-before') as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
    if (LodeValue !== null) {
        page5Text.value = LodeValue;
    }
    
    page5Text.addEventListener('input', () => {
        if (page5Text.value.trim().length > 0) {
            page5NextButton.classList.add('btn--maincolor');
        } else {
            page5NextButton.classList.remove('btn--maincolor');
        }
    });
});

page5BeforeButton.addEventListener('click', () => {
    localStorage.setItem("page5", page5Text.value);
    window.location.href = 'page4.html';
});

page5NextButton.addEventListener('click', (event) => {
    if (page5Text.value.trim().length > 0) {
        localStorage.setItem("page5", page5Text.value);
        window.location.href = 'result.html';
    } else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
