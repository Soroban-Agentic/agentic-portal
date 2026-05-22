"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { agentSpends } from "@/lib/mock-data";
import { Wallet, TrendingUp, Clock } from "lucide-react";

export function AgentBalance() {
  const maxBalance = Math.max(...agentSpends.map((a) => parseFloat(a.balance.replace(",", ""))));

  return (
    <div className="space-y-3">
      {agentSpends.map((agent) => {
        const balance = parseFloat(agent.balance.replace(",", ""));
        const pct = (balance / maxBalance) * 100;
        return (
          <Card key={agent.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">{agent.agentName}</CardTitle>
                <p className="text-xs text-muted-foreground">{agent.category}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {agent.lastActive}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-2xl font-bold">
                  {agent.balance} <span className="text-sm font-normal text-muted-foreground">{agent.token}</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  {agent.totalSpent} total
                </span>
              </div>
              <Progress value={pct} className="h-1.5" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Balance</span>
                <span>{pct.toFixed(0)}% of max</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
