# 傲天健康監督 App Prototype

## 目前狀態

已完成一版純前端手機版網頁 prototype，主題是「霸道總裁陪使用者做健康飲控與走路任務，完成任務拿點數抽總裁卡」。

目前也已加入 PWA 測試版設定，可先用手機瀏覽器加入主畫面，當成個人測試 App 使用。

## 執行方式

進入本資料夾後執行：

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

然後在本機瀏覽器打開：

```text
http://127.0.0.1:5173/index.html
```

直接用 `file:///` 開可能不穩，建議走本機 server。

## 手機測試方式

- 若已部署到 HTTPS 網址，可用手機瀏覽器開啟網址後加入主畫面。
- GitHub Pages 預期網址：`https://yoyo700702ai.github.io/aotian-wellness-app/`
- Android Chrome：選單 → 加入主畫面 / 安裝應用程式。
- iPhone Safari：分享 → 加入主畫面。
- PWA 版本不會可靠讀取手機系統步數；目前步數仍是手動測試，之後若要自動讀步數需改做原生 App 並接 HealthKit / Health Connect。

## 已完成功能

- 今日監督首頁
  - 顯示總裁主視覺卡面
  - 顯示今日步數、點數、飲水、飲控、連續達標
  - 依步數變化切換總裁台詞
  - 今日執行率分數環（依步數、飲水、飲食、契約完成度計算）
- 步數模擬
  - 點「模擬走路 +800 步」會增加步數
  - 目前先用 prototype 模擬，尚未接手機感測器
- 每日任務
  - 喝水 3 杯
  - 一餐有蛋白質
  - 今天不喝含糖飲料
  - 睡前三小時不吃宵夜
  - 走到 3000 / 6000 / 8000 步
  - 完成任務會加點數，**同一任務只會發一次獎勵**
- 抽卡
  - 消耗 80 點抽 1 張
  - 卡池分 R / SR / SSR
  - SSR 卡有動態閃光效果
- 收藏冊
  - 顯示已抽到的卡片
  - **點擊任一張卡可開啟詳情 Modal**：放大卡圖、稀有度、卡名、台詞、SSR 閃光效果
  - Modal 提供關閉鈕、點背景或按 Esc 都可以關閉
- 每日重置邏輯
  - 用 `localStorage.aotianDate` 記錄上次開啟日期
  - 跨日後自動把步數、飲水、已完成任務歸零
  - **點數與已收藏卡片不會被清掉**
- 新手保底
  - 第一次進來會自動發一張 R 卡進收藏冊（不扣點數）
  - 抽卡頁顯示 first-run 提示橫幅，按「知道了」即可關閉
  - 用 `localStorage.aotianFirstRun` 確保只發一次
- 視覺修正
  - 卡片顯示用 `object-fit: contain`，不再裁切上方稀有度與金框
  - Modal 樣式與既有視覺一致，僅新增必要 CSS
- PWA 測試版
  - 加入 `manifest.webmanifest`，設定 App 名稱、啟動畫面、主題色與圖示
  - 加入 `service-worker.js`，快取 App shell，支援基本離線載入
  - 加入 `assets/app-icon.svg` 與 `assets/icons/` 作為 App 圖示

## 相關檔案

- `index.html`
  - App 畫面結構
  - 四個分頁：今日 / 任務 / 抽卡 / 收藏
  - 抽卡頁的 first-run banner、卡片詳情 modal 結構
- `styles.css`
  - 全部視覺樣式
  - 新增：`.first-run-banner`, `.modal`, `.modal-card`, `.modal-close`, `.album-card` hover/focus 等
- `app.js`
  - 卡池資料、任務資料
  - 點數、步數、飲水、抽卡、收藏邏輯
  - `ensureDailyReset()`：跨日重置
  - `ensureFirstRun()`：首次入場保底卡
  - `openCardDetail()` / `closeCardDetail()`：收藏冊詳情
  - localStorage keys：`aotianPoints`, `aotianSteps`, `aotianWater`, `aotianTasks`, `aotianOwned`, `aotianDate`, `aotianFirstRun`
- `assets/cards/`
  - 31 張卡片素材，從桌面 `C:\Users\USER\Desktop\傲天卡` 複製進來
  - 原桌面素材沒有被修改
- `manifest.webmanifest`
  - PWA 安裝設定
- `service-worker.js`
  - PWA 快取策略
- `assets/app-icon.svg`
  - App 主圖示
- `assets/icons/`
  - PWA 192 / 512 PNG 圖示
- `.github/workflows/pages.yml`
  - GitHub Pages 靜態站部署 workflow
- `.nojekyll`
  - 關閉 Jekyll 處理，讓靜態檔案原樣發布

## 已踩到的點

- 直接用 `file:///` 開瀏覽器可能不穩，建議走 `http://127.0.0.1:5173/`。
- 使用者要的是 Windows 實際本地瀏覽器，不是 Codex in-app browser。
- 初版卡圖用 `object-fit: cover` 會把卡片上方裁掉，已改成 `contain`。
- 目前是 prototype，步數還沒有接 iOS / Android / Apple Health / Google Fit。
- PWA 可以加入主畫面，但不能穩定讀取手機系統步數；真步數需要原生 App 權限。

## 下一步建議

- 把首頁總裁卡面改成可切換「今日值班總裁卡」。
- 補卡片解鎖條件、抽到日期等 metadata。
- 把連續達標天數從寫死的 3 改成真正紀錄。
- 若 GitHub Pages 第一次沒有自動部署，到 repo Settings → Pages，把 Source 設為 GitHub Actions。
- 若要做成真正手機 App，下一階段可改成 React Native / Expo，並接 HealthKit / Google Fit 或手機步數 API。
