let LodeValue = localStorage.getItem("page4");
let page4Text = document.getElementById('page4-texterea') as HTMLTextAreaElement;
const page4NextButton = document.getElementById('page4-next') as HTMLButtonElement;
const page4BeforeButton = document.getElementById('page4-before') as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
    if (LodeValue !== null) {
        page4Text.value = LodeValue;
    }
    
    page4Text.addEventListener('input', () => {
        if (page4Text.value.trim().length > 0) {
            page4NextButton.classList.add('btn--maincolor');
        } else {
            page4NextButton.classList.remove('btn--maincolor');
        }
    });
});

page4BeforeButton.addEventListener('click', () => {
    localStorage.setItem("page4", page4Text.value);
    window.location.href = 'page3.html';
});

page4NextButton.addEventListener('click', (event) => {
    if (page4Text.value.trim().length > 0) {
        localStorage.setItem("page4", page4Text.value);
        window.location.href = 'page5.html';
    } else {
        event.preventDefault();
        alert('テキストを入力してください');
    }
});
