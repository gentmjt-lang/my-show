# 程序员小马哥 · 个人项目展示站

面向潜在客户的双语案例作品集（全栈开发 · 技术咨询）。内容用 MDX 在代码库维护，静态构建后部署到 Cloudflare Workers Static Assets。

## 本地开发

```bash
npm install
npm run dev
```

默认打开开发服务器后访问：

- 中文：`http://localhost:4321/zh/`
- 英文：`http://localhost:4321/en/`

## 构建

```bash
npm run build
```

产物在 `dist/`。

本地用 Wrangler 预览静态产物：

```bash
npm run cf:preview
```

## 部署（Cloudflare Workers Static Assets）

```bash
npm run deploy
# 等价于：astro build && wrangler deploy
```

`wrangler.jsonc` 将 `assets.directory` 指向 `./dist`。需已登录 Cloudflare（`npx wrangler login`）或配置好 API token。

无登录时可试用临时预览（有 bot challenge，需 claim）：

```bash
npm run build && npx wrangler deploy --temporary
```

## 双语路由

| 路径 | 说明 |
| --- | --- |
| `/zh/` · `/en/` | 首页 |
| `/zh/work` · `/en/work` | 作品列表 |
| `/zh/work/[slug]` · `/en/work/[slug]` | 案例详情 |
| `/zh/about` · `/en/about` | 关于 |
| `/zh/contact` · `/en/contact` | 联系 |

默认语言为 `zh`，且 `prefixDefaultLocale: true`（始终带语言前缀）。根路径 `/` 会跳到 `/zh/`。

UI 文案：`src/i18n/{zh,en}.ts`  
品牌与联系占位：`src/consts.ts`

## 编辑案例

每个案例 = 中英各一份 MDX，**同 `slug`**：

```text
src/content/cases/zh/<slug>.mdx
src/content/cases/en/<slug>.mdx
```

Frontmatter 字段（Zod 校验）见 `src/content.config.ts`。正文建议六段：结果先行 → 挑战 → 方法 → 方案 → 影响 → 反思。

封面图放在 `public/images/covers/`，在 frontmatter 的 `cover` 中引用。

当前 mock 项目：`harbor-checkout`、`lantern-ops`、`northline-brand`、`folio-pilot`。

## 上线前务必替换的联系占位

在 `src/consts.ts`：

- 邮箱：`hello@example.com`
- 微信：`wechat-placeholder`

## 设计

方向名「青墨卷宗（Celadon Dossier）」：冷灰纸底、青瓷强调色、Noto Serif SC / Fraunces / IBM Plex Sans。Token 见 `src/styles/global.css`。

## 技术栈

- Astro（`output: static`）+ Content Collections + MDX
- 原生 CSS + 设计 token
- Wrangler → Cloudflare Workers Static Assets
