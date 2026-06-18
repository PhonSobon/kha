"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import KHANavbar from "../../components/KHANavbar";
import KHAFooter from "../../components/KHAFooter";
import { useTranslation } from "react-i18next";
//stat Card
function StatCard({ label, value, icon, color, trend, trendDir, sub, onClick }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const target = parseInt(value.toString().replace(/,/g, ""));
    const duration = 900;
    const start = performance.now();
    const update = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(update);
    };
    const raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  const colors = {
    blue:   { stripe: "#1d6ef5", iconBg: "#dbeafe", iconFg: "#1d6ef5", val: "#1d6ef5" },
    green:  { stripe: "#059669", iconBg: "#d1fae5", iconFg: "#059669", val: "#059669" },
    amber:  { stripe: "#d97706", iconBg: "#fef3c7", iconFg: "#d97706", val: "#d97706" },
    purple: { stripe: "#7c3aed", iconBg: "#ede9fe", iconFg: "#7c3aed", val: "#7c3aed" },
  };
  const c = colors[color];

  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--kha-surface)",
        border: "1px solid var(--kha-border)",
        borderRadius: 14,
        padding: "1.25rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform .2s, box-shadow .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.stripe }} />

      <div style={{
        position: "absolute", top: "1.25rem", right: "1.25rem",
        width: 40, height: 40, borderRadius: 8,
        background: c.iconBg, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <i className={`ti ${icon}`} style={{ color: c.iconFg, fontSize: "1.2rem" }} aria-hidden="true" />
      </div>

      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--kha-text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "0.5rem" }}>
        {label}
      </div>
      <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: c.val, fontFamily: "Kantumruy Pro" }}>
        {displayed.toLocaleString()}
      </div>
      <div style={{ marginTop: "0.6rem", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{
          display: "flex", alignItems: "center", gap: 3,
          fontSize: "0.72rem", fontWeight: 600, padding: "2px 8px", borderRadius: 99,
          background: trendDir === "up" ? "#d1fae5" : "#fee2e2",
          color: trendDir === "up" ? "#059669" : "#dc2626",
        }}>
          <i className={`ti ${trendDir === "up" ? "ti-trending-up" : "ti-trending-down"}`} aria-hidden="true" />
          {trend}
        </span>
        <span style={{ fontSize: "0.72rem", color: "var(--kha-text3)" }}>{sub}</span>
      </div>
    </div>
  );
}

//Progress Bar
function ProgressBar({ label, value, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 400);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--kha-text2)" }}>{label}</span>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--kha-text)", fontFamily: "Kantumruy Pro" }}>{value}%</span>
      </div>
      <div style={{ height: 7, background: "var(--kha-surface3)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 99, background: color,
          width: `${width}%`, transition: "width 1s cubic-bezier(.4,0,.2,1)",
        }} />
      </div>
    </div>
  );
}

//Activity Item
function ActivityItem({ icon, iconBg, iconFg, title, sub, time, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: 12,
        padding: hovered ? "10px 8px" : "10px 0",
        margin: hovered ? "0 -8px" : "0",
        borderBottom: "1px solid var(--kha-border)",
        cursor: "pointer", borderRadius: 8,
        background: hovered ? "var(--kha-surface3)" : "transparent",
        transition: "background .15s, padding .15s, margin .15s",
      }}
    >
      <div style={{
        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
        background: iconBg, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <i className={`ti ${icon}`} style={{ color: iconFg, fontSize: "0.9rem" }} aria-hidden="true" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--kha-text)" }}>{title}</div>
        <div style={{ fontSize: "0.74rem", color: "var(--kha-text3)", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sub}</div>
      </div>
      <div style={{ fontSize: "0.7rem", color: "var(--kha-text3)", fontFamily: "Kantumruy Pro", flexShrink: 0, marginTop: 2 }}>{time}</div>
    </div>
  );
}

//Tab Bar
function TabBar({ tabs, active, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 4, background: "var(--kha-surface3)", borderRadius: 8, padding: 3 }}>
      {tabs.map((t) => (
        <div
          key={t.value}
          onClick={() => onSelect(t.value)}
          style={{
            padding: "4px 12px", borderRadius: 6, fontSize: "0.75rem", fontWeight: 600,
            cursor: "pointer", transition: "background .15s, color .15s",
            color: active === t.value ? "var(--kha-text)" : "var(--kha-text2)",
            background: active === t.value ? "var(--kha-surface)" : "transparent",
            boxShadow: active === t.value ? "0 1px 3px rgba(0,0,0,.08)" : "none",
          }}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
}

//Chart Card wrapper
function ChartCard({ title, sub, action, children, style }) {
  return (
    <div style={{
      background: "var(--kha-surface)", border: "1px solid var(--kha-border)",
      borderRadius: 14, padding: "1.5rem", overflow: "hidden", ...style,
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: ".5rem" }}>
        <div>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--kha-text)" }}>{title}</div>
          {sub && <div style={{ fontSize: "0.75rem", color: "var(--kha-text3)", marginTop: 2 }}>{sub}</div>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}


//Data 
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const BAR_MEMBERS  = [120,190,300,280,189,239,320,280,350,310,290,270];
const BAR_FINANCES = [8,9,10,11,9,12,14,13,15,14,13,12];
const LINE_ACTIVE  = [800,850,900,920,950,1000,1050,1080,1120,1150,1180,1200];
const LINE_TOTAL   = [1000,1100,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650];

const GOALS = [
  { label: "Finance Target ($ 1,500)", value: 82, color: "#1d6ef5" },
  { label: "Tutorials Published (20)", value: 60, color: "#059669" },
  { label: "Active members",      value: 76, color: "#d97706" },
  { label: "Document Published (30)",        value: 91, color: "#7c3aed" },
];

const ACTIVITIES = [
  { icon: "ti-user-plus",    iconBg: "#dbeafe", iconFg: "#1d6ef5", title: "New member joined",    sub: "Sarah Kim registered as Active Member",     time: "2m ago"  },
  { icon: "ti-file-upload",  iconBg: "#fef3c7", iconFg: "#d97706", title: "Document uploaded",    sub: "2026 Annual Report.pdf added to library",   time: "18m ago" },
  { icon: "ti-player-play",  iconBg: "#d1fae5", iconFg: "#059669", title: "Tutorial published",   sub: "Intro to KHA Systems — 14 min",             time: "1h ago"  },
  { icon: "ti-speakerphone", iconBg: "#ede9fe", iconFg: "#7c3aed", title: "Announcement sent",    sub: "General Assembly reminder posted",           time: "3h ago"  },
];

//Main component
export default function DashboardPage() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [barMode, setBarMode]   = useState("both");
  const [areaRange, setAreaRange] = useState(12);
  const [legendActive, setLegendActive] = useState({ active: true, total: true });

  const [activePct, setActivePct]  = useState(0);
  const [alumniPct, setAlumniPct]  = useState(0);

  const barRef  = useRef(null);
  const areaRef = useRef(null);
  const barInst  = useRef(null);
  const areaInst = useRef(null);

  //Auth
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) { router.push("/login"); return; }
    setUser(JSON.parse(userData));
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => { setActivePct(69); setAlumniPct(31); }, 400);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  const loadChartJs = useCallback(() => {
    return new Promise((resolve) => {
      if (window.Chart) return resolve(window.Chart);
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      script.onload = () => resolve(window.Chart);
      document.head.appendChild(script);
    });
  }, []);

  const isDarkMode = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const chartDefaults = () => ({
    gridColor:  isDarkMode() ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)",
    textColor:  "#94a3b8",
  });


  const donutRef  = useRef(null);
  const donutInst = useRef(null);
  useEffect(() => {
    if (!donutRef.current || isLoading) return;
    loadChartJs().then((Chart) => {
      if (donutInst.current) donutInst.current.destroy();
      donutInst.current = new Chart(donutRef.current, {
        type: "doughnut",
        data: {
          labels: ["Active Members", "Alumni"],
          datasets: [{
            data: [850, 384],
            backgroundColor: ["#1d6ef5", "#059669"],
            borderWidth: 0,
            hoverOffset: 6,
            borderRadius: 4,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "72%",
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.raw.toLocaleString()}` } },
          },
        },
      });
    });
    return () => donutInst.current?.destroy();
  }, [isLoading, loadChartJs]);

  useEffect(() => {
    if (!barRef.current || isLoading) return;
    const { gridColor, textColor } = chartDefaults();
    loadChartJs().then((Chart) => {
      if (barInst.current) barInst.current.destroy();
      const ds = [];
      if (barMode !== "finances") ds.push({ label: "Members", data: BAR_MEMBERS, backgroundColor: "#1d6ef5", borderRadius: 5, borderSkipped: false });
      if (barMode !== "members") ds.push({ label: "Finances", data: BAR_FINANCES, backgroundColor: "#059669", borderRadius: 5, borderSkipped: false });
      barInst.current = new Chart(barRef.current, {
        type: "bar",
        data: { labels: MONTHS, datasets: ds },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: textColor, font: { size: 11 } }, border: { display: false } },
            y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 11 } }, border: { display: false } },
          },
        },
      });
    });
    return () => barInst.current?.destroy();
  }, [isLoading, barMode, loadChartJs]);

  useEffect(() => {
    if (!areaRef.current || isLoading) return;
    const { gridColor, textColor } = chartDefaults();
    const n = areaRange;
    loadChartJs().then((Chart) => {
      if (areaInst.current) areaInst.current.destroy();
      areaInst.current = new Chart(areaRef.current, {
        type: "line",
        data: {
          labels: MONTHS.slice(12 - n),
          datasets: [
            {
              label: "Active", data: LINE_ACTIVE.slice(12 - n),
              borderColor: "#1d6ef5", backgroundColor: "rgba(29,110,245,.1)",
              fill: true, tension: .4, borderWidth: 2,
              pointRadius: 3, pointHoverRadius: 5,
              pointBackgroundColor: "#1d6ef5", pointBorderColor: "#fff", pointBorderWidth: 2,
              hidden: !legendActive.active,
            },
            {
              label: "Total", data: LINE_TOTAL.slice(12 - n),
              borderColor: "#059669", backgroundColor: "rgba(5,150,105,.1)",
              fill: true, tension: .4, borderWidth: 2,
              pointRadius: 3, pointHoverRadius: 5,
              pointBackgroundColor: "#059669", pointBorderColor: "#fff", pointBorderWidth: 2,
              hidden: !legendActive.total,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: textColor, font: { size: 11 } }, border: { display: false } },
            y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 11 } }, border: { display: false } },
          },
          interaction: { mode: "index", intersect: false },
        },
      });
    });
    return () => areaInst.current?.destroy();
  }, [isLoading, areaRange, legendActive, loadChartJs]);

  if (isLoading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
        <div style={{ width: 48, height: 48, border: "4px solid #dbeafe", borderTopColor: "#1d6ef5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }
  if (!user) return null;

  const username = user.email.split("@")[0];

  return (
    <div className="kha-dash" style={{ minHeight: "100vh" }}>
      <KHANavbar />

      <div style={{ paddingTop: 96, paddingBottom: 48, paddingLeft: 16, paddingRight: 16 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        
          <div className="kha-anim kha-anim-1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h1 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--kha-text)", margin: 0 }}>
                {t('dashboard.goodMorning')} {username}! <span className="kha-wave"></span>
              </h1>
              <p style={{ fontSize: "0.875rem", color: "var(--kha-text2)", marginTop: 4 }}>
                {t('dashboard.hereIsWhatHappeningWithYourOrgToday')}
              </p>
            </div>
          </div>


          <div className="kha-stats-grid">
            {[
              { label: t('dashboard.totalMembers'),  value: 1234, icon: "ti-users",       color: "blue",   trend: "12.4%", trendDir: "up",   sub: t('dashboard.vsLastYear'),  delay: "kha-anim-2" },
              { label: t('dashboard.tutorials'),      value: 12,   icon: "ti-player-play", color: "green",  trend: "+3 new", trendDir: "up",   sub: t('dashboard.thisMonth'),     delay: "kha-anim-3" },
              { label: t('dashboard.documents'),      value: 89,   icon: "ti-file-text",   color: "amber",  trend: "0 new", trendDir: "down", sub: t('dashboard.thisMonth'), delay: "kha-anim-4" },
              { label: t('dashboard.announcements'),  value: 1,    icon: "ti-speakerphone",color: "purple", trend: "+1 new", trendDir: "up",  sub: t('dashboard.thisYear'),delay: "kha-anim-5" },
            ].map((s, i) => (
              <div key={i} className={`kha-anim ${s.delay}`}>
                <StatCard {...s} onClick={() => {}} />
              </div>
            ))}
          </div>

       
          <div className="kha-charts-grid kha-anim kha-anim-5">

            {/* Donut */}
            <ChartCard title= {t('dashboard.memberDistribution')} sub={t('dashboard.activeVsAlumniBreakdown')}>
              <div style={{ position: "relative", width: 180, height: 180, margin: "0 auto 1rem" }}>
                <canvas ref={donutRef} role="img" aria-label="Donut chart: 850 active members, 384 alumni">850 active, 384 alumni.</canvas>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--kha-text)", letterSpacing: "-0.04em", fontFamily: "Kantumruy Pro" }}>1,234</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--kha-text3)", fontWeight: 500 }}>{t('dashboard.total')}</div>
                </div>
              </div>
              {/* Legend */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: t('dashboard.activeMembers'), value: "850", color: "#1d6ef5", pct: activePct },
                  { label: t('dashboard.alumni'), value: "384", color: "#059669", pct: alumniPct },
                ].map((l) => (
                  <div key={l.label}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.8rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--kha-text2)" }}>
                        <div style={{ width: 10, height: 10, borderRadius: 3, background: l.color, flexShrink: 0 }} />
                        {l.label}
                      </div>
                      <span style={{ fontWeight: 700, color: "var(--kha-text)", fontFamily: "Kantumruy Pro", fontSize: "0.8rem" }}>{l.value}</span>
                    </div>
                    <div className="kha-legend-bar-wrap">
                      <div className="kha-legend-bar" style={{ width: `${l.pct}%`, background: l.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard
              title= {t('dashboard.monthlyGrowth')}
              sub= {t('dashboard.membersAndFinanceIncomePerMonth')}
              action={
                <TabBar 
                  tabs={[{ label: t('dashboard.both'), value: "both" }, { label: t('dashboard.members'), value: "members" }, { label: t('dashboard.finances'), value: "finances" }]}
                  active={barMode}
                  onSelect={setBarMode}
                />
              }
            >
            
              <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                {barMode !== "finances" && (
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--kha-text2)" }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: "#1d6ef5", display: "inline-block" }} /> {t('dashboard.members')}
                  </span>
                )}
                {barMode !== "members" && (
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--kha-text2)" }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: "#059669", display: "inline-block" }} /> {t('dashboard.finances')}
                  </span>
                )}
              </div>
              <div style={{ position: "relative", height: 220 }}>
                <canvas ref={barRef} role="img" aria-label="Bar chart of monthly members and finances">Monthly growth data.</canvas>
              </div>
            </ChartCard>
          </div>

          <div className="kha-anim kha-anim-6" style={{ marginBottom: "1.5rem" }}>
            <ChartCard
              title= {t('dashboard.memberTrends')}
              sub= {t('dashboard.activeVsTotalMembersOverTime')}
              action={
                <TabBar
                  tabs={[{ label: t('dashboard.12month'), value: 12 }, { label: t('dashboard.6month'), value: 6 }, { label: t('dashboard.3month'), value: 3 }]}
                  active={areaRange}
                  onSelect={(v) => setAreaRange(Number(v))}
                />
              }
            >
        
              <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                {[
                  { label: t('dashboard.active'), key: "active", color: "#1d6ef5" },
                  { label: t('dashboard.total'),  key: "total",  color: "#059669" },
                ].map((l) => (
                  <span
                    key={l.key}
                    onClick={() => setLegendActive((prev) => ({ ...prev, [l.key]: !prev[l.key] }))}
                    style={{
                      display: "flex", alignItems: "center", gap: 4,
                      fontSize: 12, color: "var(--kha-text2)", cursor: "pointer",
                      opacity: legendActive[l.key] ? 1 : 0.4, transition: "opacity .2s",
                    }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: l.color, display: "inline-block" }} />
                    {l.label}
                  </span>
                ))}
              </div>
              <div style={{ position: "relative", height: 220 }}>
                <canvas ref={areaRef} role="img" aria-label="Area chart of active and total members over 12 months">Member trend data.</canvas>
              </div>
            </ChartCard>
          </div>

          <div className="kha-charts-grid kha-anim kha-anim-6">

            {/* Progress goals */}
            <ChartCard title= {t('dashboard.goalsProgress')} sub= {t('dashboard.2026AnnualTargets')}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {GOALS.map((g) => (
                  <ProgressBar key={g.label} label={g.label} value={g.value} color={g.color} />
                ))}
              </div>
            </ChartCard>

       
            <ChartCard
              title= {t('dashboard.recentActivity')}
              sub= {t('dashboard.latestOrganizationUpdates')}
            >
              <div>
                {ACTIVITIES.map((a, i) => (
                  <ActivityItem key={i} {...a} onClick={() => {}} />
                ))}
              </div>
            </ChartCard>
          </div>

        </div>
      </div>

      <KHAFooter />
    </div>
  );
}