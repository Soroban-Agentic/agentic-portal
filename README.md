# Agentic Portal

Visual command center for the x402 protocol — manage AI agent spending, monitor streaming revenue, and approve biometric security prompts on Stellar.

## Overview

Two dashboards in one:

**Developer Dashboard** — Real-time metrics for API providers:
- Streaming fractional-cent revenue chart (30d)
- Transaction frequency and latency
- API telemetry logs with status codes and costs
- Success rates and active agent counts

**Agent Control Room** — Command center for agent owners:
- On-chain balance tracking per agent
- Autonomous spending history by category
- Real-time biometric approval prompts (FaceID/TouchID)
- Budget increase requests with expiry timers

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + Shadcn/ui
- **Charts:** Recharts
- **Wallet:** Freighter Browser Extension
- **Network:** Stellar Testnet

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Connect your Freighter wallet to see wallet state reflected in the header.

## Pages

| Route | View |
|---|---|
| `/dashboard` | Developer dashboard — revenue, tx frequency, telemetry |
| `/control-room` | Agent owner control room — balances, spending, approval prompts |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Redirects to /dashboard
│   ├── dashboard/page.tsx      # Developer dashboard
│   └── control-room/page.tsx   # Agent control room
├── components/
│   ├── sidebar.tsx             # Navigation sidebar
│   ├── wallet-connect.tsx      # Freighter wallet connection
│   ├── revenue-chart.tsx       # Streaming revenue area chart
│   ├── tx-frequency.tsx        # Transaction frequency bar chart
│   ├── telemetry-log.tsx       # API telemetry log table
│   ├── agent-balance.tsx       # Agent balance cards with progress
│   └── approval-prompt.tsx     # Biometric approval request cards
├── lib/
│   ├── stellar.ts              # Freighter API wrapper
│   ├── mock-data.ts            # Dashboard sample data
│   └── utils.ts                # cn() utility
└── components/ui/              # Shadcn/ui components
```
