//page1
document.addEventListener('DOMContentLoaded', function () {
    var page1Text = document.getElementById('page1-texterea');
    var page1NextButton = document.getElementById('page1-next');
    page1Text.addEventListener('input', function () {
        if (page1Text.value.trim().length > 0) {
            page1NextButton.classList.add('btn--maincolor');
        }
        else {
            page1NextButton.classList.remove('btn--maincolor');
        }
    });
    page1NextButton.addEventListener('click', function (event) {
        if (page1Text.value.trim().length > 0) {
            window.location.href = 'page2.html';
        }
        else {
            event.preventDefault();
            alert('テキストを入力してください');
        }
    });
});
