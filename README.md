# 傲天健康監督

純前端手機版健康打卡原型。主題是用「總裁監督」和抽卡收藏，把步數、喝水、飲控任務做成遊戲化體驗。

## 本機預覽

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

開啟：

```text
http://127.0.0.1:5173/index.html
```

## PWA 測試版

這個原型已加入 PWA 設定，可用手機瀏覽器開啟後「加入主畫面」當成測試 App 使用。

- `manifest.webmanifest`：App 名稱、主題色、圖示、啟動網址
- `service-worker.js`：快取 App shell，支援基本離線載入
- `assets/app-icon.svg`、`assets/icons/`：PWA 圖示

目前步數仍是手動測試資料，尚未接 HealthKit / Health Connect。

## 目前功能

- 今日健康儀表板：步數、飲水、飲控、今日執行率
- 快速紀錄：步數、喝水、蛋白質、不宵夜
- 每日任務與點數獎勵
- 新手保底卡
- 點數抽卡
- 收藏冊與卡片詳情 Modal
- 跨日重置每日進度，保留點數與收藏
- PWA 安裝設定與基本離線快取
