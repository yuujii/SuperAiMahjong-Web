# 雀魂牌譜ビューア

麻雀の牌譜をWeb上で確認できるサービスです。

## 機能

- 4人麻雀の牌譜表示
- 各プレイヤーの捨て牌（河）表示
- 副露（鳴き）表示
- ドラ表示牌の表示
- 手牌の表示
- JSONデータのアップロード機能
- API経由でのデータ受信

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 使い方

### 1. サンプルデータの表示

アプリケーションを起動すると、デフォルトでサンプルデータが表示されます。

### 2. JSONデータの読み込み

1. 画面右上の「Load JSON」ボタンをクリック
2. テキストエリアにJSONデータを貼り付け
3. 「Load」ボタンをクリックして読み込み

### 3. APIへのアップロード

「Upload to API」ボタンをクリックすると、現在表示中のデータをAPIにアップロードします。

## JSON データ形式

```json
{
  "rivers": [
    {
      "area": "RT",
      "tiles": ["六筒", "七筒", "東"]
    },
    {
      "area": "TOP",
      "tiles": ["三萬", "三萬", "三萬"]
    },
    {
      "area": "BTM",
      "tiles": ["八索", "西", "六索", "白"]
    },
    {
      "area": "LT",
      "tiles": ["一索", "一索", "一索"]
    }
  ],
  "melds": [
    {
      "area": "M-RT",
      "tiles": []
    },
    {
      "area": "M-TOP",
      "tiles": []
    },
    {
      "area": "M-BTM",
      "tiles": ["發"]
    },
    {
      "area": "M-LT",
      "tiles": []
    }
  ],
  "dora": ["白", "五萬", "西", "八筒"],
  "hand": ["一萬", "二萬", "三萬", "四萬", "五萬", "二筒", "三筒", "四筒", "二索", "三索", "四索", "東", "東"]
}
```

## API エンドポイント

### POST /api/upload

牌譜データをアップロードします。

**リクエスト:**
```json
{
  "rivers": [...],
  "melds": [...],
  "dora": [...],
  "hand": [...]
}
```

**レスポンス:**
```json
{
  "success": true,
  "gameId": "1234567890",
  "message": "Game data uploaded successfully"
}
```

## 技術スタック

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Unicode麻雀牌文字（🀀-🀫）

## ライセンス

MIT
