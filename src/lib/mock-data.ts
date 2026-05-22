export interface RevenuePoint {
  date: string;
  revenue: number;
}

export interface TxPoint {
  date: string;
  count: number;
}

export interface TelemetryEntry {
  id: string;
  timestamp: string;
  agentId: string;
  endpoint: string;
  status: number;
  duration: number;
  cost: string;
}

export interface AgentSpend {
  id: string;
  agentName: string;
  agentId: string;
  balance: string;
  token: string;
  lastActive: string;
  totalSpent: string;
  category: string;
}

export interface ApprovalRequest {
  id: string;
  agentId: string;
  agentName: string;
  reason: string;
  amount: string;
  token: string;
  requestedAt: string;
  expiresAt: string;
}

export const revenueData: RevenuePoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(0, 10),
  revenue: Math.round(Math.random() * 500 + 50) / 100,
}));

export const txFrequencyData: TxPoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(0, 10),
  count: Math.floor(Math.random() * 200 + 20),
}));

export const telemetryLogs: TelemetryEntry[] = Array.from({ length: 20 }, (_, i) => ({
  id: `tx-${i}`,
  timestamp: new Date(Date.now() - i * 300000).toISOString(),
  agentId: `agent-${Math.floor(Math.random() * 3) + 1}`,
  endpoint: ["/api/v1/trade", "/api/v1/query", "/api/v1/transfer", "/api/v1/analyze"][
    Math.floor(Math.random() * 4)
  ],
  status: [200, 200, 200, 200, 402, 200][Math.floor(Math.random() * 6)],
  duration: Math.floor(Math.random() * 800 + 50),
  cost: (Math.random() * 0.05).toFixed(4),
}));

export const agentSpends: AgentSpend[] = [
  { id: "a1", agentName: "TradeBot-Alpha", agentId: "agent-1", balance: "1,250.00", token: "USDC", lastActive: "2m ago", totalSpent: "342.50", category: "DeFi Trading" },
  { id: "a2", agentName: "DataScraper-Beta", agentId: "agent-2", balance: "450.00", token: "USDC", lastActive: "15m ago", totalSpent: "1,890.25", category: "Data Pipelines" },
  { id: "a3", agentName: "ContentGen-Gamma", agentId: "agent-3", balance: "87.50", token: "USDC", lastActive: "1h ago", totalSpent: "4,210.80", category: "Content Generation" },
];

export const approvalRequests: ApprovalRequest[] = [
  {
    id: "apr-1",
    agentId: "agent-3",
    agentName: "ContentGen-Gamma",
    reason: "Daily budget exhausted — needs additional $5 USDC for remaining 3 API calls",
    amount: "5.00",
    token: "USDC",
    requestedAt: new Date(Date.now() - 300000).toISOString(),
    expiresAt: new Date(Date.now() + 3300000).toISOString(),
  },
  {
    id: "apr-2",
    agentId: "agent-1",
    agentName: "TradeBot-Alpha",
    reason: "Spike in gas fees requires temporary limit increase from $10 to $15/day",
    amount: "5.00",
    token: "USDC",
    requestedAt: new Date(Date.now() - 600000).toISOString(),
    expiresAt: new Date(Date.now() + 3000000).toISOString(),
  },
];
