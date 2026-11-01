"use client";

import { Check, Copy, Cpu, Eye, Layers, Sparkles } from "lucide-react";
import { useState } from "react";

const SAMPLE_REACT_CODE = `import React from "react";
import { BatteryCharging, Wifi, AlertCircle } from "lucide-react";
import { Badge, Button, Card } from "@zebra/b2b-ui";

interface DeviceTelemetryCardProps {
  deviceId: string;
  batteryLevel: number;
  firmwareVersion: string;
  isOnline: boolean;
  onRunDiagnostics?: () => void;
}

export const DeviceTelemetryCard: React.FC<DeviceTelemetryCardProps> = ({
  deviceId,
  batteryLevel,
  firmwareVersion,
  isOnline,
  onRunDiagnostics,
}) => {
  return (
    <Card className="p-5 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Device</span>
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">{deviceId}</h4>
        </div>
        <Badge variant={isOnline ? "success" : "neutral"} className="flex items-center gap-1.5">
          <Wifi className="size-3" />
          {isOnline ? "Online" : "Standby"}
        </Badge>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <BatteryCharging className="size-3.5 text-emerald-500" />
            Battery
          </span>
          <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">{batteryLevel}%</p>
        </div>
        <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl">
          <span className="text-xs text-slate-500">Firmware</span>
          <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">v{firmwareVersion}</p>
        </div>
      </div>

      <Button
        onClick={onRunDiagnostics}
        variant="primary"
        className="mt-4 w-full justify-center text-sm font-medium"
      >
        Run Fleet Diagnostic
      </Button>
    </Card>
  );
};`;

const SAMPLE_ANGULAR_CODE = `@Component({
  selector: 'zebra-device-telemetry',
  standalone: true,
  imports: [CommonModule, ZebraBadgeModule, ZebraButtonModule],
  template: \`
    <div class="telemetry-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
      <div class="flex justify-between items-center pb-3 border-b border-slate-100">
        <div>
          <span class="text-xs text-slate-400 font-semibold uppercase">Device</span>
          <h4 class="text-base font-bold">{{ deviceId }}</h4>
        </div>
        <zebra-badge [status]="isOnline ? 'active' : 'idle'">
          {{ isOnline ? 'Online' : 'Standby' }}
        </zebra-badge>
      </div>
      <!-- Telemetry metric grid -->
      <div class="mt-4 grid grid-cols-2 gap-3">
        <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
          <span class="text-xs text-slate-500">Battery</span>
          <p class="font-semibold">{{ batteryLevel }}%</p>
        </div>
        <div class="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl">
          <span class="text-xs text-slate-500">Firmware</span>
          <p class="font-semibold">v{{ firmwareVersion }}</p>
        </div>
      </div>
      <button zebraButton class="mt-4 w-full" (click)="onRunDiagnostics.emit()">
        Run Fleet Diagnostic
      </button>
    </div>
  \`
})
export class DeviceTelemetryComponent {
  @Input({ required: true }) deviceId!: string;
  @Input() batteryLevel = 98;
  @Input() firmwareVersion = '3.4.1';
  @Input() isOnline = true;
  @Output() onRunDiagnostics = new EventEmitter<void>();
}`;

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Figma AST Extraction",
    desc: "Parses layout hierarchies, auto-layout constraints, and typography tokens via Figma REST API.",
    tech: "Figma REST API & Node.js",
  },
  {
    step: "02",
    title: "Token Normalizer",
    desc: "Maps raw hex codes, paddings, and styles to Zebra's shared design tokens & responsive primitives.",
    tech: "AST Transform & Design Tokens",
  },
  {
    step: "03",
    title: "LangChain Code Generation",
    desc: "Few-shot prompt pipeline with component libraries, accessibility rules, and strict TypeScript types.",
    tech: "LangChain + LLM RAG Pipeline",
  },
  {
    step: "04",
    title: "Validation & Unit Tests",
    desc: "Automated syntax verification, Prettier formatting, and generated Jest component test suites.",
    tech: "TypeScript AST + Jest Generator",
  },
];

export function FigmaCodeShowcase() {
  const [activeTab, setActiveTab] = useState<"demo" | "pipeline">("demo");
  const [lang, setLang] = useState<"react" | "angular">("react");
  const [copied, setCopied] = useState(false);
  const [battery, setBattery] = useState(94);
  const [isOnline, setIsOnline] = useState(true);

  const handleCopy = () => {
    const code = lang === "react" ? SAMPLE_REACT_CODE : SAMPLE_ANGULAR_CODE;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_90%,var(--color-pool))] p-4 sm:p-6 lg:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--border-soft)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)]">
              Interactive Case Study Showcase
            </span>
          </div>
          <h4 className="mt-1 font-display text-lg font-medium text-[var(--text)] sm:text-xl">
            Simulated Figma-to-Code Pipeline
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-xl bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] p-1 border border-[var(--border-soft)] text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("demo")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-colors ${
                activeTab === "demo"
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              <Eye className="size-3.5" />
              Live Preview & Code
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("pipeline")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-colors ${
                activeTab === "pipeline"
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              <Cpu className="size-3.5" />
              LLM Architecture
            </button>
          </div>
        </div>
      </div>

      {activeTab === "demo" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Live Simulated UI Preview */}
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_65%,transparent)] p-5">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-soft)]">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                  <Layers className="size-3.5 text-[var(--accent)]" />
                  Generated UI Output Preview
                </span>
                <span className="text-[11px] font-medium text-[var(--accent-warm)]">
                  Pixel-matched to Figma
                </span>
              </div>

              {/* The rendered component */}
              <div className="mt-5 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-soft)]">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)]">
                      Device Specimen
                    </span>
                    <h5 className="text-sm font-bold text-[var(--text)]">TC58-Android-Scanner</h5>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOnline((prev) => !prev)}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all ${
                      isOnline
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25"
                        : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25"
                    }`}
                  >
                    <span className={`size-1.5 rounded-full ${isOnline ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {isOnline ? "Online (Click to toggle)" : "Standby (Click to toggle)"}
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface-alt)_70%,transparent)] p-3">
                    <span className="text-[11px] font-medium text-[var(--text-muted)]">Battery Health</span>
                    <p className="mt-1 text-lg font-bold text-[var(--text)]">{battery}%</p>
                  </div>
                  <div className="rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface-alt)_70%,transparent)] p-3">
                    <span className="text-[11px] font-medium text-[var(--text-muted)]">Firmware</span>
                    <p className="mt-1 text-lg font-bold text-[var(--text)]">v4.12.0</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBattery((b) => (b <= 20 ? 98 : b - 15))}
                  className="btn-organic mt-4 flex w-full items-center justify-center gap-2 bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Sparkles className="size-3.5" />
                  Simulate Battery Cycle ({battery}%)
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
              Output conforms automatically to Zebra Design System tokens with zero CSS overrides required.
            </p>
          </div>

          {/* Generated Code Inspector */}
          <div className="flex flex-col rounded-2xl border border-[var(--border-soft)] bg-[#0d1514] text-slate-200">
            <div className="flex items-center justify-between border-b border-emerald-950/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setLang("react")}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === "react" ? "bg-emerald-500/20 text-emerald-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  React (.tsx)
                </button>
                <button
                  type="button"
                  onClick={() => setLang("angular")}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === "angular" ? "bg-emerald-500/20 text-emerald-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Angular (.ts)
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                aria-label="Copy generated code"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="max-h-[22rem] overflow-y-auto p-4 font-mono text-[11px] leading-relaxed text-slate-300 selection:bg-emerald-800">
              <pre className="whitespace-pre-wrap">
                <code>{lang === "react" ? SAMPLE_REACT_CODE : SAMPLE_ANGULAR_CODE}</code>
              </pre>
            </div>
          </div>
        </div>
      ) : (
        /* Architecture Pipeline Flow */
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIPELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-5"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[var(--accent)]">{step.step}</span>
                <h5 className="mt-2 font-display text-base font-semibold text-[var(--text)]">
                  {step.title}
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{step.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-soft)]">
                <span className="chip-organic bg-[color-mix(in_oklab,var(--surface)_85%,transparent)] text-[10px] font-semibold text-[var(--accent-warm)]">
                  {step.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
