# Hadeer Mamdouh — Literary Platform (المنصة الأدبية)

Sovereign digital platform representing contemporary Arabic writer and novelist Hadeer Mamdouh. Built as a high-performance monorepo combining personal author identity, literary reflections, essays, and digital atelier.

---

## Workspace Architecture

This project is organized as an npm workspaces monorepo:

```text
hadeer-literary-platform/
├── apps/
│   ├── web/            # Next.js 15 App Router frontend (Arabic-first, RTL)
│   └── api/            # Express 5 REST API microservice
├── packages/
│   └── types/          # Shared TypeScript type definitions (@hadeer/types)
├── docs/
│   └── architecture/   # Phase 0 Master Specification
├── package.json        # Root workspace orchestration
├── tsconfig.base.json  # Shared strict TypeScript configuration
└── eslint.config.mjs   # Monorepo-wide ESLint 9 flat configuration
```

---

## Prerequisites

- **Node.js**: `v20.x` or higher (verified on `v24.x`)
- **npm**: `v10.x` or higher (verified on `v11.x`)

---

## Installation

Install all workspace dependencies from the repository root:

```bash
npm install
```

---

## Environment Configuration

Copy the example environment file and configure local variables:

```bash
cp .env.example .env
```

Key environment variables:

- `PORT`: API server port (default: `4000`)
- `CORS_ORIGIN`: Allowed frontend origin for CORS policies (default: `http://localhost:3000`)
- `NEXT_PUBLIC_API_URL`: Backend API URL consumed by the web application

---

## Development

Run both the web application and the API backend concurrently:

```bash
npm run dev
```

- **Web (Next.js)**: [http://localhost:3000](http://localhost:3000)
- **API (Express)**: [http://localhost:4000](http://localhost:4000)
- **API Health Check**: [http://localhost:4000/api/v1/health](http://localhost:4000/api/v1/health)

---

## Production Build

Build all packages and applications in the required dependency sequence (`@hadeer/types` -> `@hadeer/api` -> `@hadeer/web`):

```bash
npm run build
```

---

## Quality & Verification Commands

```bash
# Type check all workspaces without emitting files
npm run typecheck

# Lint all files across workspaces with ESLint 9
npm run lint

# Format code across the repository
npm run format

# Verify formatting without modifying files
npm run format:check
```
