document.addEventListener('DOMContentLoaded', () => {
    let LodeValue = localStorage.getItem("page1");
    let page1Text = document.getElementById('page1-texterea') as HTMLTextAreaElement;
    const page1NextButton = document.getElementById('page1-next') as HTMLButtonElement;

    if (LodeValue !== null) {
        page1Text.value = LodeValue;
    }

    page1Text.addEventListener('input', () => {
        if (page1Text.value.trim().length > 0) {
            page1NextButton.classList.add('btn--maincolor');
        } else {
            page1NextButton.classList.remove('btn--maincolor');
        }
    });

    page1NextButton.addEventListener('click', (event) => {
        if (page1Text.value.trim().length > 0) {
            localStorage.setItem("page1", page1Text.value);
            window.location.href = 'page2.html';
        } else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});