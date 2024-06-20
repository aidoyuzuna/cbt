document.addEventListener('DOMContentLoaded', () => {
    const page4Text = document.getElementById('page4-texterea') as HTMLTextAreaElement;
    const page4NextButton = document.getElementById('page4-next') as HTMLButtonElement;
    const page4BeforeButton = document.getElementById('page4-before') as HTMLButtonElement;

    page4BeforeButton.addEventListener('click', () => {
        window.location.href = 'page4.html';
    });
    
    page4Text.addEventListener('input', () => {
        if (page4Text.value.trim().length > 0) {
            page4NextButton.classList.add('btn--maincolor');
        } else {
            page4NextButton.classList.remove('btn--maincolor');
        }
    });

    page4NextButton.addEventListener('click', (event) => {
        if (page4Text.value.trim().length > 0) {
            window.location.href = 'page5.html';
        } else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
