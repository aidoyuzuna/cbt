
let LodeValue = localStorage.getItem("page3");
let page3Text = document.getElementById('page3-texterea') as HTMLTextAreaElement;
const page3NextButton = document.getElementById('page3-next') as HTMLButtonElement;
const page3BeforeButton = document.getElementById('page3-before') as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
    if (LodeValue !== null) {
        page3Text.value = LodeValue;
    }
    
    page3Text.addEventListener('input', () => {
        if (page3Text.value.trim().length > 0) {
            page3NextButton.classList.add('btn--maincolor');
        } else {
            page3NextButton.classList.remove('btn--maincolor');
        }
    });
});

page3BeforeButton.addEventListener('click', () => {
    localStorage.setItem("page3", page3Text.value);
    window.location.href = 'page2.html';
});

page3NextButton.addEventListener('click', (event) => {
    if (page3Text.value.trim().length > 0) {
        localStorage.setItem("page3", page3Text.value);
        window.location.href = 'page4.html';
    } else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
