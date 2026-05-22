"use client";

import { Sidebar } from "@/components/sidebar";
import { WalletConnect } from "@/components/wallet-connect";
import { RevenueChart } from "@/components/revenue-chart";
import { TxFrequencyChart } from "@/components/tx-frequency";
import { TelemetryLog } from "@/components/telemetry-log";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Activity, Zap, BarChart3 } from "lucide-react";
import { telemetryLogs } from "@/lib/mock-data";

export default function DashboardPage() {
  const successRate = ((telemetryLogs.filter((l) => l.status === 200).length / telemetryLogs.length) * 100).toFixed(1);
  const avgDuration = Math.round(telemetryLogs.reduce((s, l) => s + l.duration, 0) / telemetryLogs.length);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b flex items-center justify-between px-6 shrink-0">
          <h1 className="text-sm font-semibold">Developer Dashboard</h1>
          <WalletConnect />
        </header>
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">$1,284.93</div>
                <p className="text-xs text-green-500">+12.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">Requests (24h)</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">3,842</div>
                <p className="text-xs text-green-500">+8.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">Success Rate</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{successRate}%</div>
                <p className="text-xs text-muted-foreground">{avgDuration}ms avg latency</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">Active Agents</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">All within spending limits</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <RevenueChart />
            <TxFrequencyChart />
          </div>
          <TelemetryLog />
        </main>
      </div>
    </div>
  );
}
