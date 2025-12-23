// =============================
// Element取得
// =============================
const tree = document.getElementById('tree');
const partyBtn = document.getElementById('partyBtn');
const snowBtn = document.getElementById('snowBtn');
const audio = document.getElementById('xmasSound');
const body = document.body;

// =============================
// State管理（分離）
// =============================
let isParty = false;   // ツリー＋音楽
let isSnowing = false; // 雪

// =============================
// 🎄 クリック演出（ツリー＋音楽）
// =============================
partyBtn.addEventListener('click', async () => {
    isParty = !isParty;

    if (isParty) {
    tree.classList.add('party');
    partyBtn.textContent = '演出停止';

    try {
        audio.currentTime = 0;
        await audio.play();
    } catch (e) {
        console.warn('Audio play was blocked:', e);
    }

    } else {
    tree.classList.remove('party');
    partyBtn.textContent = 'クリック演出';

    audio.pause();
    audio.currentTime = 0;
    }
});

// =============================
// ❄ 雪 ON / OFF
// =============================
snowBtn.addEventListener('click', () => {
    isSnowing = !isSnowing;

    if (isSnowing) {
    body.classList.add('snowing');
    snowBtn.textContent = '❄ 雪を止める';
    } else {
    body.classList.remove('snowing');
    snowBtn.textContent = '❄ 雪を降らす';
    }
});

// =============================
// （任意）ページ離脱時に音楽停止
// =============================
window.addEventListener('beforeunload', () => {
    audio.pause();
    audio.currentTime = 0;
});
