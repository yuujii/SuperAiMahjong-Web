# スーパーAI麻雀ビューア

AI検出された麻雀の牌譜をWeb上で確認できるサービスです。雀魂風の美しいUIで麻雀ゲームの状態を表示します。

## 特徴

- 🎨 雀魂風の洗練されたUIデザイン
- 🀄 3D効果を持つ立体的な麻雀牌
- 👥 4人麻雀の牌譜表示（上家・対面・下家・自家）
- 🎯 プレイヤー情報表示（席位・点数）
- 🌊 各プレイヤーの捨て牌（河）表示
- 🤝 副露（鳴き）表示
- 🎲 ドラ表示牌の表示
- 🎴 手牌の表示
- 📤 JSONデータのアップロード機能
- 🔌 API経由でのデータ受信

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

- **Next.js 15** - React フレームワーク
- **React 18** - UI ライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - スタイリング
- **Unicode麻雀牌文字（🀀-🀫）** - 視覚的な牌表示

## デザインコンセプト

雀魂（じゃんたま）の美しいUIを参考に、以下の要素を実装：

- 中央配置の麻雀卓レイアウト
- 3D効果と影を持つ立体的な牌
- ダークグリーンをベースとしたカラースキーム
- グラスモーフィズム（背景のぼかし効果）
- スムーズなアニメーション
- プレイヤー情報の明確な表示

## ライセンス

MIT

## 検証

```bash
# 回帰テストは Node.js 24 以降の TypeScript 読み込み機能を使用
npm test
npx tsc --noEmit
npm run build
```

読み込みとAPIは、河・副露のエリア、配列、牌文字列を検証します。エリアの重複を拒否し、タイムライン生成対象は河の合計136枚までです。検出用の `rivers_ex`・`melds_ex`・`imageSize` は省略できます。

### セキュリティ依存更新（2026-10-04）

Next.js は保守サポート中の15系修正版 `15.5.27` に固定しています。React / React DOM は互換条件を満たす18.3.1を維持しています。

Next.js 内部が固定している PostCSS 8.4.31にも公開済み脆弱性があるため、`overrides.next.postcss` で開発依存と同じ修正版8.5.28へ統一しています。PostCSS 8のプラグイン・`process()` APIを使う経路を回帰テストと本番ビルドで確認します。Next.jsが修正版を直接採用した時点で、この限定overrideを再評価してください。nanoidは既存3.x範囲で3.3.19へ更新しています。

根拠：

- [Next.jsサポート方針](https://nextjs.org/support-policy)
- [Next.js 15.5.27のセキュリティリリース](https://github.com/vercel/next.js/releases/tag/v15.5.27)
- [PostCSSのソースマップ読み込み修正（8.5.23以降）](https://github.com/postcss/postcss/security/advisories/GHSA-fxqj-rqcc-2cmp)
- [nanoidの入力サイズに関する修正](https://github.com/advisories/GHSA-2v37-7h3g-55p8)

最終監査では本番依存（`npm audit --omit=dev`）の指摘は0件です。全依存には開発用の `braces` と、その依存元 `chokidar` / `fast-glob` / `micromatch` / `tailwindcss` のhigh指摘が残ります。根本の[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)は2026-10-04時点で修正版が公開されていません。自動修正が提案するTailwind 4へのメジャー移行は、この更新に含めていません。
