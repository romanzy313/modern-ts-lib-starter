# Getting started

clone the repo
```bash
git clone https://github.com/romanzy-1612/modern-ts-lib-starter.git PROJECTNAME
cd PROJECTNAME
```

customize this template
```bash
node init-template.js
```

install dependencies and run tests
```bash
pnpm install
pnpm test
```

# Whats included

- Vite/tsc bundling,
- Vitest unit testing
- Playwright e2e testing
- Minimal eslint and prettier configuration
- package.json is ready for publishing to npm
- Templates with placeholders: readme, license, bug report, feature request, etc
- Working ? github actions for testing

# Create another example

Create new vite project and install your library

```bash
pnpm create vite example2
cd example2
pnpm i placeholder-lib-name
```

Use your library as folloing:


```typescript
import { DummyClass } from 'placeholder-lib-name/src';
console.log(DummyClass);
```

_delete above here to start writing your README_

# placeholder-lib-name

<<DESCRIPTION>>

# Features

# Installation

npm
```bash
npm install placeholder-lib-name
```

yarn
```bash
yarn add placeholder-lib-name
```

pnpm
```bash
pnpm install placeholder-lib-name
```

# Usage

# Examples

See more examples [here](example)
