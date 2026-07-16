import { r as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as supabase } from "./client-uJWotrsN.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as PencilLine, c as Coins, i as Salad, l as Calendar, n as Trophy, o as Flame, r as TriangleAlert, s as Dumbbell, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNhvJGIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root$1.displayName;
function cardioPoints(min) {
	if (min >= 30) return 3;
	if (min >= 20) return 2;
	if (min >= 10) return 1;
	return 0;
}
function pointsForLog(l) {
	return (l.workout_done ? 2 : 0) + cardioPoints(l.cardio_minutes) + (l.diet_followed ? 3 : 0);
}
/** Returns 0-based week index from start_date for a given log_date. */
function weekIndex(startDate, logDate) {
	const start = /* @__PURE__ */ new Date(startDate + "T00:00:00");
	const d = /* @__PURE__ */ new Date(logDate + "T00:00:00");
	const diff = Math.floor((d.getTime() - start.getTime()) / 864e5);
	return Math.floor(diff / 7);
}
function dayIndex(startDate, logDate) {
	const start = /* @__PURE__ */ new Date(startDate + "T00:00:00");
	const d = /* @__PURE__ */ new Date(logDate + "T00:00:00");
	return Math.floor((d.getTime() - start.getTime()) / 864e5);
}
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function computeStats(logs, startDate, totalDays) {
	let totalPoints = 0;
	let workoutDays = 0;
	let cardioMinutes = 0;
	let dietDays = 0;
	let extraFreeMeals = 0;
	const byWeek = /* @__PURE__ */ new Map();
	for (const l of logs) {
		totalPoints += pointsForLog(l);
		if (l.workout_done) workoutDays++;
		cardioMinutes += l.cardio_minutes;
		if (l.diet_followed) dietDays++;
		extraFreeMeals += l.extra_free_meals;
		const wi = weekIndex(startDate, l.log_date);
		if (wi < 0) continue;
		const w = byWeek.get(wi) ?? {
			workouts: 0,
			extras: 0
		};
		if (l.workout_done) w.workouts++;
		w.extras += l.extra_free_meals;
		byWeek.set(wi, w);
	}
	const today = todayISO();
	const currentWeek = Math.max(0, weekIndex(startDate, today));
	let fineCount = 0;
	for (const [wi, w] of byWeek) if (wi < currentWeek) {
		const missed = Math.max(0, 5 - w.workouts);
		fineCount += missed + w.extras;
	} else fineCount += w.extras;
	const logByDate = new Map(logs.map((l) => [l.log_date, l]));
	let streak = 0;
	const start = /* @__PURE__ */ new Date(startDate + "T00:00:00");
	const cur = /* @__PURE__ */ new Date(today + "T00:00:00");
	while (cur.getTime() >= start.getTime()) {
		const iso = cur.toISOString().slice(0, 10);
		const l = logByDate.get(iso);
		if (l && (l.workout_done || l.diet_followed || l.cardio_minutes > 0)) {
			streak++;
			cur.setDate(cur.getDate() - 1);
		} else break;
	}
	return {
		totalPoints,
		totalFines: fineCount,
		workoutDays,
		cardioMinutes,
		dietDays,
		extraFreeMeals,
		currentStreak: streak
	};
}
function Home() {
	const [config, setConfig] = (0, import_react.useState)(null);
	const [participants, setParticipants] = (0, import_react.useState)([]);
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activeTab, setActiveTab] = (0, import_react.useState)("log");
	const [selectedEdit, setSelectedEdit] = (0, import_react.useState)(null);
	async function loadAll() {
		const [c, p, l] = await Promise.all([
			supabase.from("challenge_config").select("*").eq("id", 1).maybeSingle(),
			supabase.from("participants").select("*").order("name"),
			supabase.from("daily_logs").select("*").order("log_date", { ascending: false })
		]);
		if (c.data) setConfig(c.data);
		if (p.data) setParticipants(p.data);
		if (l.data) setLogs(l.data);
		setLoading(false);
	}
	(0, import_react.useEffect)(() => {
		loadAll();
		const ch = supabase.channel("daily_logs_changes").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "daily_logs"
		}, loadAll).subscribe();
		return () => {
			supabase.removeChannel(ch);
		};
	}, []);
	if (loading || !config) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center text-muted-foreground",
		children: "Carregando desafio…"
	});
	const today = todayISO();
	const dayNum = Math.max(0, dayIndex(config.start_date, today)) + 1;
	const progress = Math.min(100, dayNum / config.total_days * 100);
	const started = /* @__PURE__ */ new Date(config.start_date + "T00:00:00") <= /* @__PURE__ */ new Date();
	const stats = participants.map((p) => ({
		p,
		stats: computeStats(logs.filter((l) => l.participant_id === p.id), config.start_date, config.total_days)
	}));
	const ranking = [...stats].sort((a, b) => {
		if (b.stats.totalPoints !== a.stats.totalPoints) return b.stats.totalPoints - a.stats.totalPoints;
		return a.stats.totalFines - b.stats.totalFines;
	});
	const potFromFines = stats.reduce((sum, s) => sum + s.stats.totalFines * 25, 0);
	const totalPot = config.initial_pot + potFromFines;
	const selectedParticipant = selectedEdit ? participants.find((p) => p.id === selectedEdit.participantId) ?? null : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				richColors: true,
				position: "top-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border/60 backdrop-blur bg-background/40 sticky top-0 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-xl grid place-items-center bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-bold text-lg leading-tight",
							children: "Desafio Fitness do Casal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Gustavo vs Geovana · 90 dias"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3" }), started ? `Dia ${dayNum}/${config.total_days}` : `Início em ${config.start_date}`]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							className: "gap-1 bg-accent text-accent-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-3" }),
								" R$ ",
								totalPot.toFixed(2)
							]
						})]
					})]
				}), started && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-6xl mx-auto px-4 pb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: progress,
						className: "h-1.5"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-6xl mx-auto px-4 py-6 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "grid md:grid-cols-2 gap-4",
					children: ranking.map(({ p, stats }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: `relative overflow-hidden border-border/60 ${idx === 0 ? "card-glow" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-30 pointer-events-none",
							style: { background: idx === 0 ? "var(--gradient-hero)" : "linear-gradient(135deg, oklch(0.27 0.03 250), transparent)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "relative p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground mb-1",
										children: idx === 0 ? "1º Lugar" : "2º Lugar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-bold",
										children: p.name
									})] }), idx === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-8 text-warning" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid grid-cols-3 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Pontos",
											value: stats.totalPoints,
											accent: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Multas",
											value: stats.totalFines
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "Streak",
											value: `${stats.currentStreak}d`
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-3" }),
												" ",
												stats.workoutDays,
												" treinos"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3" }),
												" ",
												stats.cardioMinutes,
												" min cardio"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "size-3" }),
												" ",
												stats.dietDays,
												" dias dieta"
											]
										}),
										stats.extraFreeMeals > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3" }),
												" ",
												stats.extraFreeMeals,
												" livre extra"
											]
										})
									]
								})
							]
						})]
					}, p.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid grid-cols-3 w-full max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "log",
									children: "Registrar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "history",
									children: "Histórico"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "rules",
									children: "Regras"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "log",
							className: "mt-4",
							children: [selectedParticipant && selectedEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: "Editando registro"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											selectedParticipant.name,
											" em ",
											formatDate(selectedEdit.logDate)
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => setSelectedEdit(null),
										children: "Fechar"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
									participant: selectedParticipant,
									logs,
									onSaved: async () => {
										await loadAll();
										setSelectedEdit(null);
									},
									initialDate: selectedEdit.logDate
								}, `${selectedParticipant.id}-${selectedEdit.logDate}`)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid md:grid-cols-2 gap-4",
								children: participants.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogForm, {
									participant: p,
									logs,
									onSaved: loadAll
								}, p.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "history",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryView, {
								participants,
								logs,
								startDate: config.start_date,
								onEdit: (participantId, logDate) => {
									setSelectedEdit({
										participantId,
										logDate
									});
									setActiveTab("log");
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "rules",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesCard, {
								pot: totalPot,
								initialPot: config.initial_pot,
								finesTotal: potFromFines
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 mt-12 py-6 text-center text-xs text-muted-foreground",
				children: "\"mas eu achei que…\" não é aceito. R$ 5,00 para a caixinha. 💪"
			})
		]
	});
}
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `text-3xl font-bold ${accent ? "gradient-text" : ""}`,
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs text-muted-foreground uppercase tracking-wider",
		children: label
	})] });
}
function LogForm({ participant, logs, onSaved, initialDate }) {
	const [date, setDate] = (0, import_react.useState)(initialDate ?? todayISO());
	const existing = (0, import_react.useMemo)(() => logs.find((l) => l.participant_id === participant.id && l.log_date === date), [
		logs,
		participant.id,
		date
	]);
	const [workout, setWorkout] = (0, import_react.useState)(false);
	const [cardio, setCardio] = (0, import_react.useState)(0);
	const [diet, setDiet] = (0, import_react.useState)(false);
	const [freeExtra, setFreeExtra] = (0, import_react.useState)(0);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (initialDate) setDate(initialDate);
		setWorkout(existing?.workout_done ?? false);
		setCardio(existing?.cardio_minutes ?? 0);
		setDiet(existing?.diet_followed ?? false);
		setFreeExtra(existing?.extra_free_meals ?? 0);
		setNotes(existing?.notes ?? "");
	}, [existing, initialDate]);
	const points = pointsForLog({
		workout_done: workout,
		cardio_minutes: cardio,
		diet_followed: diet
	});
	async function save() {
		setSaving(true);
		const payload = {
			participant_id: participant.id,
			log_date: date,
			workout_done: workout,
			cardio_minutes: cardio,
			diet_followed: diet,
			extra_free_meals: freeExtra,
			notes: notes || null
		};
		const { error } = await supabase.from("daily_logs").upsert(payload, { onConflict: "participant_id,log_date" });
		setSaving(false);
		if (error) toast.error("Erro ao salvar: " + error.message);
		else {
			toast.success(`Registro de ${participant.name} salvo (+${points} pts)`);
			onSaved();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			className: "pb-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl",
					children: participant.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					className: "gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3" }),
						" +",
						points,
						" pts"
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `d-${participant.id}`,
					className: "text-xs",
					children: "Data"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `d-${participant.id}`,
					type: "date",
					value: date,
					onChange: (e) => setDate(e.target.value),
					className: "mt-1"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: "Treino realizado"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "+2 pontos"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: workout,
						onCheckedChange: setWorkout
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-lg bg-secondary/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: "Cardio (minutos)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "ml-auto text-xs",
								children: [
									"+",
									cardioPoints(cardio),
									" pts"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [[
							0,
							10,
							20,
							30,
							45
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: cardio === m ? "default" : "outline",
							onClick: () => setCardio(m),
							className: "flex-1",
							children: m
						}, m)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							value: cardio,
							onChange: (e) => setCardio(Number(e.target.value) || 0),
							className: "w-20"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "size-4 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: "Dieta cumprida"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "+3 pontos"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: diet,
						onCheckedChange: setDiet
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-lg bg-destructive/10 border border-destructive/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: "Refeições livres EXTRAS"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-destructive",
								children: [
									"R$ ",
									25,
									" cada"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-2",
							children: "Você tem 1 refeição livre/semana grátis. Registre aqui só as extras."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								0,
								1,
								2,
								3
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: freeExtra === n ? "destructive" : "outline",
								onClick: () => setFreeExtra(n),
								className: "flex-1",
								children: n
							}, n))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `n-${participant.id}`,
					className: "text-xs",
					children: "Notas / comprovação"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: `n-${participant.id}`,
					value: notes,
					onChange: (e) => setNotes(e.target.value),
					placeholder: "Link da foto, refeições, treino...",
					className: "mt-1 min-h-[70px]"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: save,
					disabled: saving,
					className: "w-full font-semibold",
					children: saving ? "Salvando..." : existing ? "Atualizar dia" : "Salvar dia"
				})
			]
		})]
	});
}
function HistoryView({ participants, logs, startDate, onEdit }) {
	const dates = Array.from(new Set(logs.map((l) => l.log_date))).sort((a, b) => b.localeCompare(a));
	if (dates.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "p-8 text-center text-muted-foreground",
		children: [
			"Nenhum registro ainda. Comece a preencher a partir de ",
			startDate,
			"!"
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_repeat(2,1fr)] gap-px bg-border/40 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 bg-card font-semibold text-xs uppercase tracking-wider text-muted-foreground",
						children: "Data"
					}),
					participants.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 bg-card font-semibold text-xs uppercase tracking-wider text-muted-foreground",
						children: p.name
					}, p.id)),
					dates.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 bg-card font-medium",
						children: formatDate(d)
					}), participants.map((p) => {
						const l = logs.find((x) => x.participant_id === p.id && x.log_date === d);
						if (!l) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-card text-muted-foreground text-xs",
							children: "—"
						}, `${p.id}-${d}`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-card text-xs space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "secondary",
											className: "text-xs",
											children: ["+", pointsForLog(l)]
										}),
										l.workout_done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-3 text-primary" }),
										l.cardio_minutes > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-0.5 text-accent",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3" }),
												l.cardio_minutes,
												"m"
											]
										}),
										l.diet_followed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "size-3 text-success" }),
										l.extra_free_meals > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-0.5 text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3" }), l.extra_free_meals]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: "h-7 px-2 text-xs",
									onClick: () => onEdit(p.id, d),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, { className: "size-3 mr-1" }), "Editar"]
								})]
							}), l.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground truncate",
								children: l.notes
							})]
						}, `${p.id}-${d}`);
					})] }, d))
				]
			})
		})
	});
}
function formatDate(iso) {
	const [y, m, d] = iso.split("-");
	return `${d}/${m}/${y.slice(2)}`;
}
function RulesCard({ pot, initialPot, finesTotal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-2 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 card-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-5 text-accent" }), " Caixinha"]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-5xl font-bold gradient-text",
							children: ["R$ ", pot.toFixed(2)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted-foreground space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Aposta inicial: R$ ", initialPot.toFixed(2)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Multas acumuladas: R$ ", finesTotal.toFixed(2)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground pt-2 border-t border-border/40",
							children: [
								"O vencedor leva tudo — desde que cumpra pelo menos ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "10% de perda de peso" }),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5 cm na cintura" }),
								" ou evolução comprovada nas fotos."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Pontuação & Multas" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "text-sm space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-4 text-primary" }),
							label: "Treino realizado",
							val: "+2 pts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-accent" }),
							label: "Cardio 10 / 20 / 30+ min",
							val: "+1 / +2 / +3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "size-4 text-success" }),
							label: "Dieta do dia",
							val: "+3 pts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border/40 my-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-destructive" }),
							label: "Cada treino abaixo da meta (5/sem)",
							val: `R$ 25`,
							danger: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-destructive" }),
							label: "Cada refeição livre extra",
							val: `R$ 25`,
							danger: true
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Como comprovar" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid sm:grid-cols-3 gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-semibold flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "size-4 text-primary" }), " Treino"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Foto na academia, print do app ou vídeo + smartwatch. Até 23h59 do mesmo dia."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-semibold flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-accent" }), " Cardio"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Print do smartwatch ou app com tempo e data."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-semibold flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "size-4 text-success" }), " Dieta"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Foto das refeições principais ou registro em app compartilhado."
						})] })
					]
				})]
			})
		]
	});
}
function Rule({ icon, label, val, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: danger ? "destructive" : "secondary",
			children: val
		})]
	});
}
//#endregion
export { Home as component };
