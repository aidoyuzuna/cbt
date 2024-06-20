document.addEventListener('DOMContentLoaded', () => {
    const page5Text = document.getElementById('page5-texterea') as HTMLTextAreaElement;
    const page5NextButton = document.getElementById('page5-next') as HTMLButtonElement;
    const page5BeforeButton = document.getElementById('page5-before') as HTMLButtonElement;

    page5BeforeButton.addEventListener('click', () => {
        window.location.href = 'page4.html';
    });
    
    page5Text.addEventListener('input', () => {
        if (page5Text.value.trim().length > 0) {
            page5NextButton.classList.add('btn--maincolor');
        } else {
            page5NextButton.classList.remove('btn--maincolor');
        }
    });

    page5NextButton.addEventListener('click', (event) => {
        if (page5Text.value.trim().length > 0) {
            window.location.href = 'page6.html';
        } else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
