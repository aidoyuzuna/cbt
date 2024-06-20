
document.addEventListener('DOMContentLoaded', () => {
    const page2BeforeButton = document.getElementById('page2-before') as HTMLButtonElement;
    page2BeforeButton.addEventListener('click', () => {
        window.location.href = 'page1.html';
    });
});

let elementBar1 = document.getElementById('emotion-bar-1') as HTMLInputElement;
let elementText1 = document.getElementById('emotion-text-1') as HTMLInputElement;

elementBar1.addEventListener('input', () => {
    elementText1.value = elementBar1.value;
});

let elementBar2 = document.getElementById('emotion-bar-2') as HTMLInputElement;
let elementText2 = document.getElementById('emotion-text-2') as HTMLInputElement;

elementBar2.addEventListener('input', () => {
    elementText2.value = elementBar2.value;
});

let elementBar3 = document.getElementById('emotion-bar-3') as HTMLInputElement;
let elementText3 = document.getElementById('emotion-text-3') as HTMLInputElement;

elementBar3.addEventListener('input', () => {
    elementText3.value = elementBar3.value;
});

let elementBar4 = document.getElementById('emotion-bar-4') as HTMLInputElement;
let elementText4 = document.getElementById('emotion-text-4') as HTMLInputElement;

elementBar4.addEventListener('input', () => {
    elementText4.value = elementBar4.value;
});

let elementBar5 = document.getElementById('emotion-bar-5') as HTMLInputElement;
let elementText5 = document.getElementById('emotion-text-5') as HTMLInputElement;

elementBar5.addEventListener('input', () => {
    elementText5.value = elementBar5.value;
});



document.addEventListener('DOMContentLoaded', () => {
    // 全てのレンジスライダーの要素を取得（必要に応じてセレクタを変更）
    const rangeSliders = document.querySelectorAll('input[type="range"]');
    // Track の元の色
    const baseColor = '#555';
    // Track のつまみの左側の部分の色
    const activeColor = '#2196F3'
    // 取得したレンジスライダーの各要素に対して実行
    rangeSliders.forEach((slider) => {
      // input イベントのリスナーを設定
    slider.addEventListener('input', (e) => {
        // updateSlider を呼び出す
        updateSlider(e.target);
    });
      // updateSlider を実行して現在の値を反映
    updateSlider(slider);
    });

    // input イベントで呼び出される関数（トラックの塗りの範囲と色を設定する関数）
    function updateSlider(slider) {
      // max 属性の値が省略されている場合は100を設定
    if(!slider.max) {
        slider.max = 100;
    }
      // 現在の値から割合（%）を取得
      const progress = (slider.value / slider.max) * 100;
      // linear-gradient で Track の色を設定
    slider.style.background = `linear-gradient(to right, ${activeColor} ${progress}%, ${baseColor} ${progress}%)`;
    }

});


/*ボタン出現*/
const addButton = document.getElementById('emotion-add') as HTMLButtonElement;
const deleteButton = document.getElementById('emotion-delete') as HTMLButtonElement;
const page2NextButton = document.getElementById('page2-next') as HTMLButtonElement;

let currentContainer = 1;
const maxContainers = 5;

addButton.addEventListener("click", () => {
    if (currentContainer < maxContainers) {
        currentContainer++;
        page2NextButton.classList.remove('btn--maincolor');
        document.getElementById(`emotion-container-${currentContainer}`)!.classList.remove('emotion-hidden');
        if (currentContainer > 1) {
            deleteButton.classList.remove('emotion-hidden');
        }
        checkAllInputs();
    }
});

deleteButton.addEventListener("click", () => {
    if (currentContainer > 1) {
        document.getElementById(`emotion-container-${currentContainer}`)!.classList.add('emotion-hidden');
        currentContainer--;
        if (currentContainer === 1) {
            deleteButton.classList.add('emotion-hidden');
        }
        checkAllInputs();
    }
});

const checkAllInputs = () => {
    for (let i = 1; i <= currentContainer; i++) {
        const select = document.getElementById(`emotion-select-${i}`) as HTMLSelectElement;
        const text = document.getElementById(`emotion-text-${i}`) as HTMLInputElement;

        if (select.value === "" || text.value === "") {
            page2NextButton.classList.add('btn--disabled');
            page2NextButton.classList.remove('btn--maincolor');
        }

        else if (select.value != "" && text.value != "") {
            page2NextButton.classList.add('btn--maincolor');
            page2NextButton.classList.remove('btn--disabled');
        }
    }
};

const inputs = document.querySelectorAll('select, input[type="range"]');
inputs.forEach(input => {
    input.addEventListener('input', checkAllInputs);
});

page2NextButton.addEventListener('click', (event) => {
    if (page2NextButton.classList.contains('btn--maincolor')) {
        window.location.href = 'page3.html';
    } else {
        event.preventDefault();
        alert('感情項目を入力してください');
    }
});