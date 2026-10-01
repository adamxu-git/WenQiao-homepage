# 问樵 WenQiao 首页

这是问樵的品牌展示首页。项目基于 Google Santa Tracker Web 开源源码改造，保留了原版 Modvil 动态村落的场景结构与动画表现，并在其后加入问樵的滚动叙事。

问樵希望让有问题的人，更容易遇见愿意分享经验的人。首页以场景和动画为主，不是业务功能介绍页。

## 本地运行

需要安装 Node.js 和 npm。首次运行先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run start
```

默认打开 <http://localhost:8000/>。服务器同时使用 8080 端口提供静态资源；如果端口被占用，可以换一组端口，例如：

```bash
npm run start -- --port 8100
```

此时首页地址为 <http://localhost:8100/>，静态资源服务使用 8180 端口。

## 首页结构

- `prod/index.html`：网站入口与首页外壳。
- `static/scenes/modvil/`：首页的 Modvil 动态村落、场景动画和问樵滚动内容。
- `static/scenes/modvil/img/village/`：Modvil 场景使用的村落与角色素材。
- `static/audio/`：网站音频素材。
- `static/src/`：网站通用代码与场景通信接口。

首页场景样式使用 SCSS；开发服务器会通过项目的虚拟文件系统按需生成对应的 CSS。

## 测试

运行项目测试：

```bash
npm test
```

如果提示缺少 Playwright 浏览器，可先安装测试所需的 Chromium：

```bash
npx playwright install chromium
```

## 项目来源与许可

本项目基于 [Google Santa Tracker Web](https://github.com/google/santa-tracker-web) 改造。上游项目的代码与素材保留各自原有的版权和许可要求；请查看仓库中的 `LICENSE` 及素材来源说明。新增素材应由使用者确认拥有相应的使用和分发授权。

原项目介绍与开发说明可在上游仓库中查看。本仓库的修改重点是问樵品牌首页，不代表 Google 官方项目。
