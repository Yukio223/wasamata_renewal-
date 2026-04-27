# WASAMATA HUTTE ウェブサイト リニューアルプロジェクト

## プロジェクト概要

WASAMATA HUTTEは、標高1150mの大峰山系に位置するキャンプ場＆ヒュッテ。本プロジェクトは、施設の新しいウェブサイト制作・リニューアル。

**URL:** wasamata-hutte.com（予定）  
**制作方式:** 静的HTML + CSS + JavaScript（フレームワークなし）  
**対象オーディエンス:** 登山者・キャンプ愛好家・自然志向の観光客

## ファイル構成

```
wasamata_renewal/
├── index.html              # トップページ
├── about.html              # 背景情報・コンセプト
├── hutte-details.html      # 施設詳細（未実装）
├── campsite.html           # キャンプサイト情報（未実装）
├── cafe-menu.html          # カフェメニュー（未実装）
├── access-guide.html       # アクセス情報（未実装）
├── faq.html                # よくある質問（未実装）
├── style.css               # メインスタイルシート
├── script.js               # JavaScript（機能実装）
├── images/                 # 画像ファイル（山・施設写真）
└── CLAUDE.md               # このファイル
```

## 実装状況

### ✅ 完了
- index.html（基本構造完成）
- style.css（デザイン実装）
- script.js（ナビゲーション・インタラクション）
- ロゴ・ブランド定義

### ⏳ 進行中
- レスポンシブ対応の最終確認
- 予約機能の実装検討
- Gallery セクションの画像最適化

### ⏳ 進行中
- モバイル対応の最終テスト（2026-04-27～28）
- SEO・メタタグの最適化・チューニング（2026-04-29）
- faq.html の実装（オプション）

### ❌ 未完了（優先順位順）
1. faq.html の実装（オプション、トークン予算に応じて）

## 技術仕様

- **HTML5** — セマンティックマークアップ
- **CSS3** — Flexbox・Grid・アニメーション
- **JavaScript（Vanilla）** — フレームワーク不使用
- **フォント** — Google Fonts（Noto Sans JP, Playfair Display, Zen Old Mincho）
- **レスポンシブ** — モバイル・タブレット・デスクトップ対応

## デザインコンセプト

- **自然とシンプルさ** — ミニマリスト美学
- **和と洋の融合** — 書体選択に反映
- **自然画像の活用** — スライドショー・視差スクロール
- **アクセシビリティ** — WCAG 準拠（aria-label等）

## 作業ルール

1. **タスク管理** — このファイルの「未完了」セクションで進捗管理
2. **変更は必ずコミット** — 各タスク完了ごとにGitコミット
3. **画像最適化** — WebP形式・遅延ロード推奨
4. **モバイルファーストテスト** — 常にモバイルで動作確認
5. **クロスブラウザ確認** — Chrome・Safari・Firefox

## 次のステップ

1. 未完了タスク1（hutte-details.html）から開始
2. 各ページを順次実装
3. 最終テスト・SEO最適化
4. 本番サーバーへのデプロイ

## Obsidian連携

本プロジェクト情報は Obsidian vault の `Projects/wasamata-renewal` に記録される。
