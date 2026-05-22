"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { approvalRequests } from "@/lib/mock-data";
import { AlertTriangle, Fingerprint, X, Check } from "lucide-react";

export function ApprovalPrompts() {
  const [requests, setRequests] = useState(approvalRequests);

  function handleApprove(id: string) {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }

  function handleDeny(id: string) {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }

  if (requests.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Approval Prompts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Fingerprint className="h-8 w-8 mb-2" />
            <p className="text-sm">No pending approval requests</p>
            <p className="text-xs">All agents operating within limits</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Approval Prompts</CardTitle>
          <Badge variant="destructive" className="text-xs">{requests.length} pending</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {requests.map((req) => (
          <div key={req.id} className="border rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">{req.agentName}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{req.reason}</p>
              </div>
              <Badge variant="outline" className="shrink-0">
                +{req.amount} {req.token}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Expires {new Date(req.expiresAt).toLocaleTimeString()}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-7 text-xs" onClick={() => handleDeny(req.id)}>
                  <X className="h-3 w-3 mr-1" /> Deny
                </Button>
                <Button size="sm" className="h-7 text-xs" onClick={() => handleApprove(req.id)}>
                  <Check className="h-3 w-3 mr-1" /> Approve
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
