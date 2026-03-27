const fortuneBtn = document.getElementById('fortuneBtn');
const retryBtn = document.getElementById('retryBtn');
const resultDiv = document.getElementById('result');
const fortuneType = document.getElementById('fortuneType');
const fortuneDesc = document.getElementById('fortuneDesc');
const fortuneEnding = document.getElementById('fortuneEnding');

// 運勢資料集
const fortunes = [
    { type: "🌟 超級幸運星", desc: "今天你的工作、學業、愛情、金錢都非常順利，一切充滿好運！", ending: "抓住這股幸運，好好享受美好的一天！" },
    { type: "💼 事業進展順利", desc: "工作上有新的機會，老闆可能會給你驚喜。學業也能得到好成績。", ending: "努力把握每個機會，成功就在前方！" },
    { type: "💖 愛情桃花運", desc: "感情上會有甜蜜的驚喜，單身的人可能遇到心儀對象。", ending: "放開心胸，愛情會悄悄來敲門！" },
    { type: "💰 財運亨通", desc: "今天投資或金錢相關的事會有好結果，但要注意不要過度冒險。", ending: "穩健理財，錢財自然滾滾來！" },
    { type: "🌈 心情愉快", desc: "今天心情輕鬆愉快，適合與朋友聚會或進行創意活動。", ending: "笑容是你最好的幸運符！" },
    { type: "🧘 放鬆心情", desc: "工作或學業可能有點壓力，需要休息一下，保持平衡。", ending: "深呼吸，平靜的心能帶來好運！" },
    { type: "🎯 目標明確", desc: "今天適合制定計劃，清楚知道自己想要什麼，行動會更有力。", ending: "一步步來，你會看到理想的成果！" },
    { type: "🚀 冒險刺激", desc: "今天可能會有意外的驚喜或挑戰，勇敢面對，能收穫滿滿。", ending: "勇氣會帶來意想不到的收穫！" },
    { type: "💤 慢慢調整", desc: "今天可能感覺有點累，需要放慢腳步，注意休息和健康。", ending: "給自己一點空間，好運自然會回來！" },
    { type: "🤝 人際圓滿", desc: "與朋友或同事相處融洽，有助於合作和人際關係發展。", ending: "好的人脈就是你最大的財富！" }
];

// 開始占卜
fortuneBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];

    fortuneType.textContent = fortune.type;
    fortuneDesc.textContent = fortune.desc;
    fortuneEnding.textContent = fortune.ending;

    resultDiv.classList.remove('hidden');
});

// 再占卜一次
retryBtn.addEventListener('click', () => {
    resultDiv.classList.add('hidden');
});