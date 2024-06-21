
//変数定義：エモーションパーツ
let elementPulldown1 = document.getElementById('emotion-select-1') as HTMLInputElement;
let elementBar1 = document.getElementById('emotion-bar-1') as HTMLInputElement;
let elementText1 = document.getElementById('emotion-text-1') as HTMLInputElement;

let elementPulldown2 = document.getElementById('emotion-select-2') as HTMLInputElement;
let elementBar2 = document.getElementById('emotion-bar-2') as HTMLInputElement;
let elementText2 = document.getElementById('emotion-text-2') as HTMLInputElement;

let elementPulldown3 = document.getElementById('emotion-select-3') as HTMLInputElement;
let elementBar3 = document.getElementById('emotion-bar-3') as HTMLInputElement;
let elementText3 = document.getElementById('emotion-text-3') as HTMLInputElement;

let elementPulldown4 = document.getElementById('emotion-select-4') as HTMLInputElement;
let elementBar4 = document.getElementById('emotion-bar-4') as HTMLInputElement;
let elementText4 = document.getElementById('emotion-text-4') as HTMLInputElement;

let elementPulldown5 = document.getElementById('emotion-select-5') as HTMLInputElement;
let elementBar5 = document.getElementById('emotion-bar-5') as HTMLInputElement;
let elementText5 = document.getElementById('emotion-text-5') as HTMLInputElement;

let elementPulldowns = [elementPulldown1,elementPulldown2,elementPulldown3,elementPulldown4,elementPulldown5]


//定数定義・エモーション追加・削除ボタン
const addButton = document.getElementById('emotion-add') as HTMLButtonElement;
const deleteButton = document.getElementById('emotion-delete') as HTMLButtonElement;

//定数定義：ページ移動
const page2BeforeButton = document.getElementById('page2-before') as HTMLButtonElement;
const page2NextButton = document.getElementById('page2-next') as HTMLButtonElement;

//変数・定数定義：追加・削除ボタンリスト・限界
let currentContainer = 1;
const maxContainers = 5;
let LodeValue = localStorage.getItem("page2");

//定数定義：回答入力判定
const inputs = document.querySelectorAll('select, input[type="range"]');

//変数・定数定義：スライダー
const rangeSliders = document.querySelectorAll('input[type="range"]');
const baseColor = '#555';
const activeColor = '#2196F3';

//バーとテキストの同期
elementBar1.addEventListener('input', () => {elementText1.value = elementBar1.value;});
elementBar2.addEventListener('input', () => {elementText2.value = elementBar2.value;});
elementBar3.addEventListener('input', () => {elementText3.value = elementBar3.value;});
elementBar4.addEventListener('input', () => {elementText4.value = elementBar4.value;});
elementBar5.addEventListener('input', () => {elementText5.value = elementBar5.value;});

let saveData: { [key: string]: string } = {};

document.addEventListener('DOMContentLoaded', () => {
    
    if (LodeValue !== null) {
        try {
            saveData = JSON.parse(LodeValue);
        } catch (e) {
            console.error("Failed to parse LodeValue:", e);
        }
    }
    
    if (saveData !== null) {
        for (let load in saveData) {
            if (saveData.hasOwnProperty(load)) { // プロトタイプチェーンに存在するプロパティを除外
                let element = document.getElementById(load) as HTMLSelectElement | HTMLInputElement;
                if (element) {
                    if (element.tagName === 'SELECT') {
                        const selectElement = element as HTMLSelectElement;
                        const savedValue = saveData[load];
                        // 設定されているvalueの中からsaveDataの値に一致するものがあれば選択
                        for (let i = 0; i < selectElement.options.length; i++) {
                            if (selectElement.options[i].value === savedValue) {
                                selectElement.selectedIndex = i;
                                const emotionContainer = document.getElementById(`emotion-container-${i}`);
                                if (emotionContainer) {
                                    emotionContainer.classList.remove('emotion-hidden');
                                    currentContainer = i;
                                } else {
                                    console.error(`Element with ID 'emotion-container-${i}' not found.`);
                                }
                                break;
                            }
                        }
                    } else if (element.tagName === 'INPUT') {
                        const inputElement = element as HTMLInputElement;
                        inputElement.value = saveData[load];
                    }
                }
            }
        }
    }
    

    //スライダーバー処理
    rangeSliders.forEach((slider) => {
        slider.addEventListener('input', (e) => {updateSlider(e.target);});
        updateSlider(slider);
    });

    function updateSlider(slider) {if(!slider.max) {slider.max = 100;}
    const progress = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, ${activeColor} ${progress}%, ${baseColor} ${progress}%)`;}

    //ボタン追加
    addButton.addEventListener("click", () => {
        if (currentContainer < maxContainers) {
            currentContainer++;
            page2NextButton.classList.remove('btn--maincolor');
            document.getElementById(`emotion-container-${currentContainer}`)!.classList.remove('emotion-hidden');
            if (currentContainer > 1) {deleteButton.classList.remove('emotion-hidden');}
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
    inputs.forEach(input => {input.addEventListener('input', checkAllInputs);});


page2NextButton.addEventListener('click', (event) => {
    for (let n = 1; n <= currentContainer; n++) {
        const selectData = document.getElementById(`emotion-select-${n}`) as HTMLSelectElement;
        const textData = document.getElementById(`emotion-text-${n}`) as HTMLInputElement;
        if (selectData && textData) {
            saveData[`emotion-select-${n}`] = selectData.value;
            saveData[`emotion-text-${n}`] = textData.value;
        }
    }
    if (page2NextButton.classList.contains('btn--maincolor')) {
        alert(JSON.stringify(saveData));
        localStorage.setItem("page2", JSON.stringify(saveData));
        window.location.href = 'page3.html';
    }
    else {
        event.preventDefault();
        alert('感情項目を入力してください');
    }
});

page2BeforeButton.addEventListener('click', () => { 
    for (let b = 1; b <= currentContainer; b++) {
        const selectData = document.getElementById(`emotion-select-${b}`) as HTMLSelectElement;
        const textData = document.getElementById(`emotion-text-${b}`) as HTMLInputElement;
        if (selectData && textData) {
            saveData[`emotion-select-${b}`] = selectData.value;
            saveData[`emotion-text-${b}`] = textData.value;
        }
    }
    alert(JSON.stringify(saveData));
    localStorage.setItem("page2", JSON.stringify(saveData));
    window.location.href = 'page1.html';
    });
});