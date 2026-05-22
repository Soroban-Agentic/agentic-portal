"use client";

import { Sidebar } from "@/components/sidebar";
import { WalletConnect } from "@/components/wallet-connect";
import { AgentBalance } from "@/components/agent-balance";
import { ApprovalPrompts } from "@/components/approval-prompt";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { agentSpends, telemetryLogs } from "@/lib/mock-data";
import { Globe, DollarSign, Shield, Activity } from "lucide-react";

export default function ControlRoomPage() {
  const totalSpent = agentSpends
    .reduce((s, a) => s + parseFloat(a.totalSpent.replace(",", "")), 0)
    .toLocaleString();
  const totalBalance = agentSpends
    .reduce((s, a) => s + parseFloat(a.balance.replace(",", "")), 0)
    .toLocaleString();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b flex items-center justify-between px-6 shrink-0">
          <h1 className="text-sm font-semibold">Agent Control Room</h1>
          <WalletConnect />
        </header>
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  Total Balance
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{totalBalance} USDC</div>
                <p className="text-xs text-muted-foreground">Across 3 agents</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  Total Spent
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{totalSpent} USDC</div>
                <p className="text-xs text-muted-foreground">All-time agent spend</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  Spending Categories
                </CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {[...new Set(agentSpends.map((a) => a.category))].map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-[10px]">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  Security Status
                </CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">All Guards Active</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Spending limits enforced
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <AgentBalance />
            </div>
            <div className="col-span-2">
              <ApprovalPrompts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
