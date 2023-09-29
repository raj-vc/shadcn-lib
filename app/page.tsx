"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <main>
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          className="dark:data-[state=unchecked]:bg-slate-500"
          checked={state}
          onCheckedChange={(checked) => setState(checked)}
        />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <p className="text-blue">Test</p>
    </main>
  );
}
