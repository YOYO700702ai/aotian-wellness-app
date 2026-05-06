const cards = [
  ["2500ml命令", "R", "assets/cards/2500ml命令_R.png", "水喝完，才准妳說今天很努力。"],
  ["LINE群巡邏", "R", "assets/cards/LINE群巡邏_R.png", "我看見妳在線上。現在，把今日飲食交代清楚。"],
  ["不准熬夜", "R", "assets/cards/不准熬夜_R.png", "十二點後還醒著，是想讓我親自沒收手機？"],
  ["劇本殺點名", "R", "assets/cards/劇本殺點名_R.png", "缺席可以，先把今天的步數補滿。"],
  ["垃圾食物退散", "R", "assets/cards/垃圾食物退散_R.png", "妳可以嘴饞，但不能被垃圾食物收買。"],
  ["早安總裁", "R", "assets/cards/早安總裁_R.png", "早起不是美德，是妳今天對我的最低承諾。"],
  ["晨跑巡城", "R", "assets/cards/晨跑巡城_R.png", "城市還沒醒，妳的步數已經該開始了。"],
  ["深蹲監工", "R", "assets/cards/深蹲監工_R.png", "不要討價還價，這組做完再看我。"],
  ["總裁的外套", "R", "assets/cards/總裁的外套_R.png", "冷就披著。宵夜，不准。"],
  ["總裁魔法使", "R", "assets/cards/總裁魔法使_R.png", "今天的魔法很簡單：喝水、走路、不要亂吃。"],
  ["胃痛但不說", "R", "assets/cards/胃痛但不說_R.png", "我不問第二次，妳今天是不是又空腹喝咖啡？"],
  ["菜市場併購案", "R", "assets/cards/菜市場併購案_R.png", "青菜買下來，健康也買下來。"],
  ["萌犬包圍令", "R", "assets/cards/萌犬包圍令_R.png", "牠們都在等妳出門，我也是。"],
  ["鐵律重訓", "R", "assets/cards/鐵律重訓_R.png", "妳可以慢，但不能停。"],
  ["雞胸肉審判", "R", "assets/cards/雞胸肉審判_R.png", "蛋白質不足，今日審判不會通過。"],
  ["黑卡貓糧", "R", "assets/cards/黑卡貓糧_R.png", "牠有貓糧，妳有健康餐。誰都不准亂吃。"],
  ["黑卡降臨", "R", "assets/cards/黑卡降臨_R.png", "這張卡能刷很多東西，但刷不了妳的自律。"],
  ["偵探陸總", "SR", "assets/cards/偵探陸總_SR.png", "所有偷吃紀錄，都逃不過我的眼睛。"],
  ["吸血總裁", "SR", "assets/cards/吸血總裁_SR.png", "我不要妳的血，我要妳今晚準時睡。"],
  ["太空董事會", "SR", "assets/cards/太空董事會_SR.png", "全宇宙董事會一致通過：妳該去走路。"],
  ["密室總裁", "SR", "assets/cards/密室總裁_SR.png", "密室出口只有一個，完成今日任務。"],
  ["暴雨車門", "SR", "assets/cards/暴雨車門_SR.png", "雨再大，也不能澆熄妳今天的決心。"],
  ["末日揪團令", "SR", "assets/cards/末日揪團令_SR.png", "就算是末日，我也會把妳從沙發上叫起來。"],
  ["武俠霸總", "SR", "assets/cards/武俠霸總_SR.png", "江湖規矩，先走八千步再談兒女情長。"],
  ["總裁料理課", "SR", "assets/cards/總裁料理課_SR.png", "這餐我盯著，油少一點，蛋白質多一點。"],
  ["魔法契約書", "SR", "assets/cards/魔法契約書_SR.png", "簽下契約，今天不喝含糖飲料。"],
  ["黑幫劇本夜", "SR", "assets/cards/黑幫劇本夜_SR.png", "今晚的規矩由我定：不熬夜，不亂吃。"],
  ["暗夜守護者", "SSR", "assets/cards/暗夜守護者_SSR.png", "妳只管往前走，夜路我替妳守著。"],
  ["異界百團契約", "SSR", "assets/cards/異界百團契約_SSR.png", "百團契約已生效，今日目標必須完成。"],
  ["白馬傲天", "SSR", "assets/cards/白馬傲天_SSR.png", "上馬前先達標，浪漫不收留半途而廢的人。"]
];

const tasks = [
  { id: "water", type: "water", title: "喝水 3 杯", reward: 30, line: "先把水喝完，身體才會相信妳今天有在管理。" },
  { id: "protein", type: "food", title: "一餐有蛋白質", reward: 25, line: "雞胸、蛋、豆腐都可以，藉口不可以。" },
  { id: "sugar", type: "food", title: "今天不喝含糖飲料", reward: 35, line: "黑卡可以刷奶茶，但我不准。" },
  { id: "night", type: "food", title: "睡前三小時不吃宵夜", reward: 40, line: "妳餓的是習慣，不是身體。" },
  { id: "steps3000", type: "move", title: "走到 3000 步", reward: 20, line: "先跨過最低門檻。" },
  { id: "steps6000", type: "move", title: "走到 6000 步", reward: 35, line: "現在才像我選中的人。" },
  { id: "steps8000", type: "move", title: "走到 8000 步", reward: 60, line: "很好，今天准妳靠近一點。" }
];

const state = {
  points: Number(localStorage.getItem("aotianPoints") || 180),
  steps: Number(localStorage.getItem("aotianSteps") || 2480),
  water: Number(localStorage.getItem("aotianWater") || 1),
  done: JSON.parse(localStorage.getItem("aotianTasks") || "[]"),
  owned: JSON.parse(localStorage.getItem("aotianOwned") || JSON.stringify(["早安總裁", "暗夜守護者"])),
  firstRunStarter: null
};

const el = (id) => document.getElementById(id);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const isDone = (id) => state.done.includes(id);

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function save() {
  localStorage.setItem("aotianPoints", state.points);
  localStorage.setItem("aotianSteps", state.steps);
  localStorage.setItem("aotianWater", state.water);
  localStorage.setItem("aotianTasks", JSON.stringify(state.done));
  localStorage.setItem("aotianOwned", JSON.stringify(state.owned));
}

function ensureDailyReset() {
  const stored = localStorage.getItem("aotianDate");
  const today = todayStr();
  if (!stored) {
    localStorage.setItem("aotianDate", today);
    return;
  }
  if (stored !== today) {
    state.steps = 0;
    state.water = 0;
    state.done = [];
    localStorage.setItem("aotianDate", today);
    save();
  }
}

function ensureFirstRun() {
  if (localStorage.getItem("aotianFirstRun")) return;
  const rPool = cards.filter((card) => card[1] === "R");
  const starter = rPool[Math.floor(Math.random() * rPool.length)];
  if (!state.owned.includes(starter[0])) state.owned.push(starter[0]);
  localStorage.setItem("aotianFirstRun", "1");
  state.firstRunStarter = starter;
  save();
}

function completeTask(task, silent = false) {
  if (isDone(task.id)) return false;

  if (task.id === "water" && state.water < 3) {
    if (!silent) alert("還沒喝滿 3 杯水。");
    return false;
  }
  if (task.id === "steps3000" && state.steps < 3000) {
    if (!silent) alert("還沒走到 3000 步。");
    return false;
  }
  if (task.id === "steps6000" && state.steps < 6000) {
    if (!silent) alert("還沒走到 6000 步。");
    return false;
  }
  if (task.id === "steps8000" && state.steps < 8000) {
    if (!silent) alert("還沒走到 8000 步。");
    return false;
  }

  state.done.push(task.id);
  state.points += task.reward;
  return true;
}

function syncAutoTasks() {
  let changed = false;
  tasks.forEach((task) => {
    if (["water", "steps3000", "steps6000", "steps8000"].includes(task.id)) {
      changed = completeTask(task, true) || changed;
    }
  });
  if (changed) save();
}

function getHealthScore() {
  const stepScore = clamp(state.steps / 8000, 0, 1) * 40;
  const waterScore = clamp(state.water / 3, 0, 1) * 20;
  const foodScore = ["protein", "sugar", "night"].filter(isDone).length * 10;
  const contractScore = clamp(state.done.length / tasks.length, 0, 1) * 10;
  return Math.round(stepScore + waterScore + foodScore + contractScore);
}

function renderStats() {
  const foodDone = ["protein", "sugar", "night", "water"].filter(isDone).length;
  const score = getHealthScore();

  el("points").textContent = state.points;
  el("steps").textContent = state.steps;
  el("stepsInput").value = state.steps || "";
  el("waterCount").textContent = `${state.water} / 3`;
  el("foodCount").textContent = `${foodDone} / 4`;
  el("healthScore").textContent = score;
  el("stepBar").style.width = `${clamp((state.steps / 8000) * 100, 0, 100)}%`;
  el("waterBar").style.width = `${clamp((state.water / 3) * 100, 0, 100)}%`;
  el("foodBar").style.width = `${clamp((foodDone / 4) * 100, 0, 100)}%`;
  document.querySelector(".score-ring").style.setProperty("--score", `${score * 3.6}deg`);

  if (score >= 88) {
    el("scoreLine").textContent = "今天的管理已經像樣，抽卡批准。";
  } else if (score >= 60) {
    el("scoreLine").textContent = "差一點就能收尾，先補上最短的任務。";
  } else {
    el("scoreLine").textContent = "先把基本盤站穩，傲天才批准妳抽卡。";
  }

  if (state.steps >= 8000) {
    el("presidentLine").textContent = "八千步完成。妳今天的努力，我看見了。";
  } else if (state.steps >= 6000) {
    el("presidentLine").textContent = "還差一點，別在最接近的地方停下。";
  } else if (state.water < 3) {
    el("presidentLine").textContent = "水還沒喝夠。現在起身，去倒一杯。";
  } else {
    el("presidentLine").textContent = "今天的步數還沒達標。別讓我親自去抓妳。";
  }
}

function renderNextTask() {
  const next = tasks.find((task) => !isDone(task.id));
  if (!next) {
    el("nextTask").innerHTML = `
      <div>
        <span class="tag">完成</span>
        <h3>今日契約已結清</h3>
        <p>很好，剩下的點數妳可以拿去抽卡。</p>
      </div>
      <button disabled>完成</button>
    `;
    return;
  }

  el("nextTask").innerHTML = `
    <div>
      <span class="tag">${next.type.toUpperCase()}</span>
      <h3>${next.title}</h3>
      <p>${next.line} +${next.reward} 點</p>
    </div>
    <button>去完成</button>
  `;
  el("nextTask").querySelector("button").addEventListener("click", () => {
    document.querySelector('[data-view="tasks"]').click();
  });
}

function renderTasks() {
  el("taskList").innerHTML = "";
  tasks.forEach((task) => {
    const done = isDone(task.id);
    const item = document.createElement("article");
    item.className = `task ${done ? "done" : ""}`;
    item.innerHTML = `
      <div class="task-icon">${task.type === "move" ? "步" : task.type === "water" ? "水" : "食"}</div>
      <div>
        <h3>${task.title}</h3>
        <p>${task.line} +${task.reward} 點</p>
      </div>
      <button>${done ? "完成" : "簽約"}</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      if (completeTask(task)) {
        save();
        render();
      }
    });
    el("taskList").appendChild(item);
  });
}

function pickCard() {
  const roll = Math.random();
  const pool =
    roll > 0.9
      ? cards.filter((card) => card[1] === "SSR")
      : roll > 0.58
        ? cards.filter((card) => card[1] === "SR")
        : cards.filter((card) => card[1] === "R");
  return pool[Math.floor(Math.random() * pool.length)];
}

function showCard(card) {
  const [name, rarity, src, line] = card;
  el("drawImage").src = src;
  el("drawImage").alt = name;
  el("drawRarity").textContent = rarity;
  el("drawName").textContent = name;
  el("drawLine").textContent = line;
  el("drawFrame").classList.toggle("ssr", rarity === "SSR");
}

function draw() {
  if (state.points < 80) {
    alert("點數不足。先完成任務，總裁才會批准抽卡。");
    return;
  }
  state.points -= 80;
  const card = pickCard();
  if (!state.owned.includes(card[0])) state.owned.push(card[0]);
  showCard(card);
  save();
  render();
}

function renderAlbum() {
  el("albumGrid").innerHTML = "";
  cards
    .filter((card) => state.owned.includes(card[0]))
    .forEach((card) => {
      const [name, rarity, src] = card;
      const item = document.createElement("article");
      item.className = "album-card";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `${name} 卡片詳情`);
      item.innerHTML = `
        <img src="${src}" alt="${name}">
        <div>
          <span>${rarity}</span>
          <strong>${name}</strong>
        </div>
      `;
      const open = () => openCardDetail(card);
      item.addEventListener("click", open);
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
      el("albumGrid").appendChild(item);
    });
}

function openCardDetail(card) {
  const [name, rarity, src, line] = card;
  el("modalImage").src = src;
  el("modalImage").alt = name;
  el("modalRarity").textContent = rarity;
  el("modalName").textContent = name;
  el("modalLine").textContent = line;
  const modal = el("cardModal");
  modal.classList.toggle("ssr", rarity === "SSR");
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeCardDetail() {
  const modal = el("cardModal");
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderFirstRunBanner() {
  const banner = el("firstRunBanner");
  if (!banner) return;
  if (!state.firstRunStarter) {
    banner.hidden = true;
    return;
  }
  const [name, rarity] = state.firstRunStarter;
  banner.hidden = false;
  banner.querySelector("[data-first-name]").textContent = name;
  banner.querySelector("[data-first-rarity]").textContent = rarity;
}

function render() {
  syncAutoTasks();
  renderStats();
  renderNextTask();
  renderTasks();
  renderAlbum();
  renderFirstRunBanner();
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    tab.classList.add("active");
    el(tab.dataset.view).classList.add("active");
  });
});

el("walkBtn").addEventListener("click", () => {
  state.steps = Math.min(12000, state.steps + 800);
  save();
  render();
});

el("stepsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = el("stepsInput").value.trim();
  const nextSteps = raw === "" ? 0 : Number(raw);
  if (!Number.isFinite(nextSteps)) {
    alert("請輸入有效的步數。");
    return;
  }
  state.steps = Math.round(clamp(nextSteps, 0, 100000));
  save();
  render();
});

el("waterBtn").addEventListener("click", () => {
  state.water = clamp(state.water + 1, 0, 3);
  save();
  render();
});

el("proteinBtn").addEventListener("click", () => {
  completeTask(tasks.find((task) => task.id === "protein"), true);
  save();
  render();
});

el("sleepBtn").addEventListener("click", () => {
  completeTask(tasks.find((task) => task.id === "night"), true);
  save();
  render();
});

el("drawBtn").addEventListener("click", draw);

el("cardModal").addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) closeCardDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !el("cardModal").hidden) closeCardDetail();
});

const firstRunDismiss = document.querySelector("#firstRunBanner [data-dismiss]");
if (firstRunDismiss) {
  firstRunDismiss.addEventListener("click", () => {
    state.firstRunStarter = null;
    renderFirstRunBanner();
  });
}

ensureDailyReset();
ensureFirstRun();
if (state.firstRunStarter) {
  showCard(state.firstRunStarter);
}
render();
