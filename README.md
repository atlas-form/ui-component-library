# UI Component Library Monorepo

This repo uses one workspace with multiple packages:

```text
packages/
  core/    # @atlas-art/ui-core (platform-agnostic recipes/tokens/utils)
  react/   # @atlas-art/ui-react (React components using @atlas-art/ui-core)
  vue/     # @atlas-art/ui-vue (scaffold only for now)
```

## Commands

```bash
pnpm install
pnpm build
pnpm typecheck
```

Build/typecheck per package:

```bash
pnpm --filter @atlas-art/ui-core build
pnpm --filter @atlas-art/ui-react build
```

## Package Usage

React:

```tsx
import { Button } from "@atlas-art/ui-react";
import "@atlas-art/ui-core/styles/fallback.css";
```

Platform-agnostic core:

```ts
import { buttonVariants, cn } from "@atlas-art/ui-core";
```
