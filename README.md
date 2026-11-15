# OpenLib

OpenLib is a compact, responsive directory for free browser utilities for developers and creators. The Angular standalone app is published to `docs/` for GitHub Pages.

## Getting started

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

The production build writes the deployable site to `docs/`.

## Adding a tool

Add a `ToolItem` entry to `src/app/tools.data.ts`. The interface and status/category types are in `src/app/tool.model.ts`. Live entries open their URL in a new tab; upcoming entries appear when the “Show upcoming tools” control is enabled.
