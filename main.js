const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const btn = document.getElementById('btn');
const resultText = document.getElementById('result');
const letterCounts = document.getElementById('letterCounts');

btn.addEventListener('click', function() {
    const rnNum = Math.floor(Math.random() * 26);
    resultText.innerText = rnNum + '=' + alph[rnNum];

    const letter = letterCounts.children[rnNum + 1];
    const paraTag = letter.children[0];

    paraTag.innerText = Number(paraTag.innerText) + 1;
});
