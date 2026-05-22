"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { telemetryLogs } from "@/lib/mock-data";

export function TelemetryLog() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-sm font-medium">API Telemetry Logs</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-64 overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-card border-b">
              <tr className="text-muted-foreground text-xs">
                <th className="text-left px-4 py-2 font-medium">Time</th>
                <th className="text-left px-4 py-2 font-medium">Agent</th>
                <th className="text-left px-4 py-2 font-medium">Endpoint</th>
                <th className="text-left px-4 py-2 font-medium">Status</th>
                <th className="text-right px-4 py-2 font-medium">Duration</th>
                <th className="text-right px-4 py-2 font-medium">Cost</th>
              </tr>
            </thead>
            <tbody>
              {telemetryLogs.map((entry) => (
                <tr key={entry.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-2 text-muted-foreground text-xs">
                    {new Date(entry.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-4 py-2 font-mono text-xs">{entry.agentId}</td>
                  <td className="px-4 py-2 font-mono text-xs">{entry.endpoint}</td>
                  <td className="px-4 py-2">
                    <Badge variant={entry.status === 200 ? "secondary" : "destructive"} className="text-[10px] px-1.5 py-0">
                      {entry.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2 text-right text-xs text-muted-foreground">{entry.duration}ms</td>
                  <td className="px-4 py-2 text-right text-xs font-mono">${entry.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
