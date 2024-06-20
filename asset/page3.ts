document.addEventListener('DOMContentLoaded', () => {
    const page3Text = document.getElementById('page3-texterea') as HTMLTextAreaElement;
    const page3NextButton = document.getElementById('page3-next') as HTMLButtonElement;
    const page3BeforeButton = document.getElementById('page3-before') as HTMLButtonElement;

    page3BeforeButton.addEventListener('click', () => {
        window.location.href = 'page2.html';
    });
    
    page3Text.addEventListener('input', () => {
        if (page3Text.value.trim().length > 0) {
            page3NextButton.classList.add('btn--maincolor');
        } else {
            page3NextButton.classList.remove('btn--maincolor');
        }
    });

    page3NextButton.addEventListener('click', (event) => {
        if (page3Text.value.trim().length > 0) {
            window.location.href = 'page3.html';
        } else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
