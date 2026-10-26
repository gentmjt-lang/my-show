export const zh = {
	nav: {
		work: '作品',
		about: '关于',
		contact: '联系',
		home: '首页',
		skip: '跳到主要内容',
	},
	home: {
		tagline: '全栈开发 · 技术咨询',
		headline: '把复杂系统讲清楚，再交付可靠产品。',
		support:
			'面向客户的项目卷宗：讲清做过什么、为何那样做、结果如何。',
		ctaWork: '查看作品',
		ctaContact: '预约咨询',
		featured: '精选案例',
		viewAll: '全部作品',
	},
	work: {
		title: '作品',
		intro: '按项目查阅交付边界、决策与结果。',
		all: '全部',
		empty: '暂无案例。',
	},
	case: {
		role: '角色',
		client: '客户',
		industry: '行业',
		year: '年份',
		duration: '周期',
		team: '团队',
		contributions: '我负责的部分',
		outcomes: '结果亮点',
		status: '状态',
		statusShipped: '已上线',
		statusPrototype: '原型',
		statusConcept: '概念',
		more: '更多项目',
		back: '返回作品列表',
		live: '线上地址',
	},
	about: {
		title: '关于',
		headline: '全栈交付，技术咨询，把方案落到可维护的系统。',
		intro:
			'我是程序员小马哥。帮助团队把产品构想拆成可实现的架构与交付路径——从前端体验到后端与部署，再到上线后的演进。',
		capabilitiesTitle: '能力边界',
		capabilities: [
			'全栈 Web 应用：设计与实现前后端，落地可部署的产品',
			'技术咨询：架构评审、技术选型、性能与可维护性诊断',
			'0→1 与改版：从需求澄清到可上线的迭代交付',
		],
		collabTitle: '合作方式',
		collab:
			'项目制交付或阶段性咨询均可。通常从一次对齐会开始：确认问题、边界与成功标准，再给出明确的工作范围与节奏。',
		proofTitle: '可信证明（占位）',
		proof:
			'真实客户与行业背书将在此更新。当前作品页为 mock 案例，用于验证站点结构与叙事模型。',
		cta: '开始对话',
	},
	contact: {
		title: '联系',
		intro: '项目合作、技术咨询或架构讨论，欢迎来信。',
		email: '邮箱',
		wechat: '微信',
		note: '以下为占位联系方式，上线前请替换为真实信息。',
		mailto: '发送邮件',
	},
	footer: {
		rights: '项目卷宗',
		contact: '联系',
	},
	meta: {
		homeTitle: '首页',
		homeDesc: '程序员小马哥 — 全栈开发与技术咨询作品集',
		workTitle: '作品',
		workDesc: '项目案例列表：问题、决策与结果',
		aboutTitle: '关于',
		aboutDesc: '背景、能力边界与合作方式',
		contactTitle: '联系',
		contactDesc: '通过邮箱或微信联系',
	},
} as const;

export type Dictionary = typeof zh;
