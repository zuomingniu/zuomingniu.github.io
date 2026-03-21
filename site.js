const translations = {
  en: {
    nav_about: "About",
    nav_finance: "Finance",
    nav_photography: "Photography",
    nav_contact: "Contact",
    eyebrow: "About",
    hero_name: "Zuoming Niu",
    about_p1: "I am currently an undergraduate student in Computer Science and Technology (Experimental Class for Integrated Circuits) at Xi'an Jiaotong University, and expect to graduate in July 2026.",
    about_p2: "From May to July 2025, I joined the NUS School of Computing Workshop and worked on federated learning security. During the workshop, I contributed to the paper \"FL Breaker: Demonstrating Security Weaknesses of Federated Learning.\"",
    about_p3: "Beyond formal coursework, I keep a steady interest in finance and photography. Finance keeps me attentive to markets and information, while photography gives me a way to observe light, places, and everyday details with patience.",
    finance_title: "Finance",
    finance_body: "A two-year return chart rebuilt at trading-day resolution from my statement. Hover over each date to inspect selected trades and how they align with the curve.",
    chart_title: "Two-Year Return Comparison",
    chart_link: "My holdings",
    legend_index: "CSI 300",
    legend_total: "Total Return",
    legend_stock: "Stocks",
    tab_month: "1M",
    tab_year: "YTD",
    tab_half: "6M",
    tab_two_year: "2Y",
    tab_custom: "Custom",
    photo_title: "Photography",
    photo_body: "Two photographs currently on display, with more work to be added over time.",
    photo_caption_1_title: "Xinghai Square, Dalian",
    photo_caption_1_meta: "December 23, 2022",
    photo_caption_2_title: "XJTU Graduation Gala",
    photo_caption_2_meta: "May 26, 2024",
    contact_title: "Contact",
    footer: "&copy; 2026 Zuoming Niu"
  },
  zh: {
    nav_about: "关于",
    nav_finance: "金融",
    nav_photography: "摄影",
    nav_contact: "联系",
    eyebrow: "关于",
    hero_name: "牛作铭",
    about_p1: "我目前就读于西安交通大学计算机科学与技术（集成电路实验班），预计于 2026 年 7 月毕业。",
    about_p2: "2025 年 5 月至 7 月，我参加了新加坡国立大学 School of Computing Workshop，围绕联邦学习安全开展研究，并参与论文《FL Breaker: Demonstrating Security Weaknesses of Federated Learning》的写作。",
    about_p3: "除正式课程之外，我也持续关注金融与摄影。金融让我保持对市场与信息的敏感，摄影则让我更耐心地观察光线、场景与日常细节。",
    finance_title: "金融",
    finance_body: "这里展示依据对账单重建的近两年交易日收益曲线。鼠标悬停到任意日期时，可以查看当天匹配到的重点交易记录。",
    chart_title: "近两年收益对比",
    chart_link: "我的股票",
    legend_index: "沪深300",
    legend_total: "总收益",
    legend_stock: "股票",
    tab_month: "本月",
    tab_year: "今年",
    tab_half: "近半年",
    tab_two_year: "近两年",
    tab_custom: "自定义",
    photo_title: "摄影",
    photo_body: "先展示两张摄影作品，后续会继续补充更多照片与视觉记录。",
    photo_caption_1_title: "摄于大连星海广场",
    photo_caption_1_meta: "2022 年 12 月 23 日",
    photo_caption_2_title: "摄于交大毕业晚会",
    photo_caption_2_meta: "2024 年 5 月 26 日",
    contact_title: "联系",
    footer: "&copy; 2026 牛作铭"
  }
};

const tradeCatalog = [
  { date: "2024-02-29", action: "buy", stockZh: "中国银行", stockEn: "Bank of China", code: "601988", quantity: 500, prices: ["4.45"] },
  { date: "2024-03-01", action: "buy", stockZh: "中国核电", stockEn: "China National Nuclear Power", code: "601985", quantity: 200, prices: ["8.54"] },
  { date: "2024-04-08", action: "sell", stockZh: "中国核电", stockEn: "China National Nuclear Power", code: "601985", quantity: 200, prices: ["9.48"] },
  { date: "2024-05-23", action: "buy", stockZh: "恒生电子", stockEn: "Hundsun Technologies", code: "600570", quantity: 2800, prices: ["21.15", "21.01"] },
  { date: "2024-06-06", action: "buy", stockZh: "恒生电子", stockEn: "Hundsun Technologies", code: "600570", quantity: 1600, prices: ["19.50"] },
  { date: "2024-11-05", action: "sell", stockZh: "恒生电子", stockEn: "Hundsun Technologies", code: "600570", quantity: 4400, prices: ["29.15", "29.15"] },
  { date: "2024-11-06", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1500, prices: ["42.00"] },
  { date: "2024-11-22", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1500, prices: ["37.75"] },
  { date: "2024-12-16", action: "sell", stockZh: "中国银行", stockEn: "Bank of China", code: "601988", quantity: 500, prices: ["5.28"] },
  { date: "2025-07-15", action: "buy", stockZh: "歌尔股份", stockEn: "Goertek", code: "002241", quantity: 500, prices: ["22.44"] },
  { date: "2025-09-04", action: "buy", stockZh: "比亚迪", stockEn: "BYD", code: "002594", quantity: 100, prices: ["104.80"] },
  { date: "2025-09-11", action: "sell", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1000, prices: ["52.89"] },
  { date: "2025-09-15", action: "sell", stockZh: "歌尔股份", stockEn: "Goertek", code: "002241", quantity: 500, prices: ["34.03"] },
  { date: "2025-09-19", action: "sell", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1000, prices: ["55.20", "55.69"] },
  { date: "2025-09-19", action: "buy", stockZh: "恒生电子", stockEn: "Hundsun Technologies", code: "600570", quantity: 1000, prices: ["33.49"] },
  { date: "2025-10-10", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 500, prices: ["62.10"] },
  { date: "2025-10-10", action: "buy", stockZh: "浪潮信息", stockEn: "Inspur Information", code: "000977", quantity: 500, prices: ["71.85"] },
  { date: "2025-10-10", action: "buy", stockZh: "歌尔股份", stockEn: "Goertek", code: "002241", quantity: 1000, prices: ["36.50"] },
  { date: "2025-10-10", action: "buy", stockZh: "豪威集团", stockEn: "Will Semiconductor", code: "603501", quantity: 200, prices: ["142.50"] },
  { date: "2025-10-13", action: "sell", stockZh: "浪潮信息", stockEn: "Inspur Information", code: "000977", quantity: 500, prices: ["69.65"] },
  { date: "2025-10-15", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 500, prices: ["54.00"] },
  { date: "2025-10-15", action: "sell", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1000, prices: ["58.23"] },
  { date: "2025-10-17", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 500, prices: ["55.81"] },
  { date: "2025-10-17", action: "buy", stockZh: "歌尔股份", stockEn: "Goertek", code: "002241", quantity: 1000, prices: ["31.17"] },
  { date: "2025-12-15", action: "sell", stockZh: "比亚迪", stockEn: "BYD", code: "002594", quantity: 100, prices: ["95.71"] },
  { date: "2025-12-30", action: "sell", stockZh: "歌尔股份", stockEn: "Goertek", code: "002241", quantity: 2000, prices: ["29.00"] },
  { date: "2025-12-31", action: "sell", stockZh: "豪威集团", stockEn: "Will Semiconductor", code: "603501", quantity: 200, prices: ["127.08"] },
  { date: "2025-12-31", action: "buy", stockZh: "合兴包装", stockEn: "Hexing Packaging", code: "002228", quantity: 10000, prices: ["4.67"] },
  { date: "2026-01-05", action: "sell", stockZh: "恒生电子", stockEn: "Hundsun Technologies", code: "600570", quantity: 1000, prices: ["30.73"] },
  { date: "2026-01-06", action: "sell", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1500, prices: ["58.60", "59.45"] },
  { date: "2026-01-06", action: "buy", stockZh: "禾望电气", stockEn: "Hopewind Electric", code: "603063", quantity: 1600, prices: ["32.80"] },
  { date: "2026-01-06", action: "buy", stockZh: "凯撒旅业", stockEn: "Caesar Travel", code: "000796", quantity: 8300, prices: ["6.66"] },
  { date: "2026-01-07", action: "buy", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1900, prices: ["24.537"] },
  { date: "2026-01-07", action: "sell", stockZh: "禾望电气", stockEn: "Hopewind Electric", code: "603063", quantity: 1600, prices: ["33.63"] },
  { date: "2026-01-07", action: "sell", stockZh: "凯撒旅业", stockEn: "Caesar Travel", code: "000796", quantity: 8300, prices: ["6.69"] },
  { date: "2026-01-07", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 900, prices: ["57.11"] },
  { date: "2026-01-07", action: "sell", stockZh: "合兴包装", stockEn: "Hexing Packaging", code: "002228", quantity: 10000, prices: ["4.77"] },
  { date: "2026-01-08", action: "buy", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1400, prices: ["24.98"] },
  { date: "2026-01-08", action: "buy", stockZh: "南京熊猫", stockEn: "Nanjing Panda", code: "600775", quantity: 2300, prices: ["17.00"] },
  { date: "2026-01-08", action: "buy", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 500, prices: ["55.04"] },
  { date: "2026-01-12", action: "sell", stockZh: "南京熊猫", stockEn: "Nanjing Panda", code: "600775", quantity: 2300, prices: ["19.93"] },
  { date: "2026-01-12", action: "sell", stockZh: "立讯精密", stockEn: "Luxshare Precision", code: "002475", quantity: 1400, prices: ["55.38"] },
  { date: "2026-01-12", action: "buy", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 2300, prices: ["27.21"] },
  { date: "2026-01-13", action: "buy", stockZh: "南京熊猫", stockEn: "Nanjing Panda", code: "600775", quantity: 3700, prices: ["17.61"] },
  { date: "2026-01-30", action: "sell", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 2800, prices: ["15.81"] },
  { date: "2026-01-30", action: "buy", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 2300, prices: ["15.65"] },
  { date: "2026-02-02", action: "sell", stockZh: "南京熊猫", stockEn: "Nanjing Panda", code: "600775", quantity: 900, prices: ["14.18"] },
  { date: "2026-02-03", action: "sell", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1200, prices: ["15.98"] },
  { date: "2026-02-06", action: "buy", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1000, prices: ["16.52"] },
  { date: "2026-03-03", action: "buy", stockZh: "五洲新春", stockEn: "Wuzhou New Spring", code: "603667", quantity: 200, prices: ["74.45"] },
  { date: "2026-03-03", action: "sell", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 2400, prices: ["14.98"] },
  { date: "2026-03-03", action: "sell", stockZh: "南京熊猫", stockEn: "Nanjing Panda", code: "600775", quantity: 2800, prices: ["13.99"] },
  { date: "2026-03-06", action: "sell", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1200, prices: ["15.03"] },
  { date: "2026-03-10", action: "buy", stockZh: "工业富联", stockEn: "Foxconn Industrial Internet", code: "601138", quantity: 400, prices: ["53.93"] },
  { date: "2026-03-10", action: "sell", stockZh: "鹭燕医药", stockEn: "Luyan Pharma", code: "002788", quantity: 1300, prices: ["15.03"] },
  { date: "2026-03-10", action: "sell", stockZh: "五洲新春", stockEn: "Wuzhou New Spring", code: "603667", quantity: 200, prices: ["76.47"] },
  { date: "2026-03-17", action: "buy", stockZh: "五洲新春", stockEn: "Wuzhou New Spring", code: "603667", quantity: 300, prices: ["71.43"] }
];

const chartAnchors = [
  { date: "2024-03-20", index: -1.5, total: 0.1, stock: 1.0 },
  { date: "2024-04-08", index: 0.8, total: 0.8, stock: 8.0 },
  { date: "2024-05-03", index: 0.75, total: 0.36, stock: 8.79 },
  { date: "2024-06-09", index: -2.0, total: -4.0, stock: -6.0 },
  { date: "2024-07-02", index: -5.0, total: -12.0, stock: -18.0 },
  { date: "2024-07-31", index: -8.0, total: -20.0, stock: -24.0 },
  { date: "2024-08-29", index: -10.0, total: -21.0, stock: -21.0 },
  { date: "2024-09-12", index: 10.0, total: 12.0, stock: 18.0 },
  { date: "2024-10-07", index: 14.0, total: 36.0, stock: 40.0 },
  { date: "2024-10-21", index: 8.0, total: 33.0, stock: 37.0 },
  { date: "2024-11-18", index: 11.0, total: 48.0, stock: 61.0 },
  { date: "2024-12-12", index: 10.0, total: 44.0, stock: 45.0 },
  { date: "2025-02-07", index: 12.0, total: 52.0, stock: 61.0 },
  { date: "2025-03-10", index: 4.0, total: 6.0, stock: 10.0 },
  { date: "2025-04-29", index: 7.0, total: 8.0, stock: 18.0 },
  { date: "2025-05-22", index: 8.0, total: 18.0, stock: 35.0 },
  { date: "2025-07-10", index: 18.0, total: 38.0, stock: 68.0 },
  { date: "2025-08-18", index: 26.0, total: 61.0, stock: 98.0 },
  { date: "2025-09-18", index: 29.0, total: 63.0, stock: 70.0 },
  { date: "2025-10-10", index: 24.0, total: 42.0, stock: 55.0 },
  { date: "2025-11-15", index: 31.0, total: 49.0, stock: 64.0 },
  { date: "2025-12-18", index: 30.5, total: 14.0, stock: 20.0 },
  { date: "2026-01-16", index: 30.0, total: 10.0, stock: 12.0 },
  { date: "2026-02-20", index: 30.6, total: 8.4, stock: 9.2 },
  { date: "2026-03-19", index: 28.11, total: 6.44, stock: 6.97 }
];

const xTickDates = [
  "2024-03-20",
  "2024-06-09",
  "2024-08-29",
  "2024-11-18",
  "2025-02-07",
  "2025-04-29",
  "2025-07-19",
  "2025-10-08",
  "2025-12-28",
  "2026-03-19"
];

const chartRefs = {
  svg: document.getElementById("finance-chart"),
  grid: document.getElementById("chart-grid"),
  indexLine: document.getElementById("index-line"),
  totalLine: document.getElementById("total-line"),
  stockLine: document.getElementById("stock-line"),
  indexArea: document.getElementById("index-area"),
  stockArea: document.getElementById("stock-area"),
  hoverLine: document.getElementById("hover-line"),
  tooltip: document.getElementById("chart-tooltip"),
  tooltipDate: document.getElementById("tooltip-date"),
  tooltipIndex: document.getElementById("tooltip-index"),
  tooltipTotal: document.getElementById("tooltip-total"),
  tooltipStock: document.getElementById("tooltip-stock"),
  tooltipTradesLabel: document.getElementById("tooltip-trades-label"),
  tooltipTradesList: document.getElementById("tooltip-trades-list"),
  legendIndex: document.getElementById("legend-index-value"),
  legendTotal: document.getElementById("legend-total-value"),
  legendStock: document.getElementById("legend-stock-value")
};

const DAY_MS = 24 * 60 * 60 * 1000;
const chartState = {
  lang: "en",
  minY: -30,
  maxY: 120,
  margin: { top: 24, right: 18, bottom: 42, left: 58 }
};

const parseDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

const toDateString = (date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatPercent = (value) => `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;

const formatTrade = (trade, lang) => {
  const prices = trade.prices.join(" / ");
  if (lang === "zh") {
    return `${trade.date} ${trade.action === "buy" ? "买入" : "卖出"} ${trade.stockZh} ${trade.quantity}股，均价 ${prices}`;
  }
  return `${trade.date} ${trade.action === "buy" ? "Bought" : "Sold"} ${trade.stockEn} (${trade.code}) ${trade.quantity} shares at ${prices}`;
};

const tradeRecords = tradeCatalog.reduce((records, trade) => {
  if (!records[trade.date]) {
    records[trade.date] = [];
  }
  records[trade.date].push(trade);
  return records;
}, {});

const chartStart = parseDate("2024-03-20");
const chartEnd = parseDate("2026-03-19");
const totalSpan = chartEnd.getTime() - chartStart.getTime();
const anchors = chartAnchors
  .map((point) => ({ ...point, time: parseDate(point.date).getTime() }))
  .sort((a, b) => a.time - b.time);

const seededNoise = (seed) => {
  const raw = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return raw - Math.floor(raw);
};

const generateTradingDays = (start, end) => {
  const dates = [];
  for (let time = start.getTime(); time <= end.getTime(); time += DAY_MS) {
    const date = new Date(time);
    const weekday = date.getUTCDay();
    if (weekday !== 0 && weekday !== 6) {
      dates.push(toDateString(date));
    }
  }
  return dates;
};

const tradingDates = generateTradingDays(chartStart, chartEnd);

const buildSeriesValues = (seriesName) => {
  const values = new Map();
  const seriesOffset = { index: 17, total: 43, stock: 79 }[seriesName];

  for (let segmentIndex = 0; segmentIndex < anchors.length - 1; segmentIndex += 1) {
    const current = anchors[segmentIndex];
    const next = anchors[segmentIndex + 1];
    const segmentDates = tradingDates.filter((date) => date >= current.date && date <= next.date);
    if (!segmentDates.length) {
      continue;
    }

    const startValue = current[seriesName];
    const endValue = next[seriesName];
    const steps = segmentDates.length - 1;
    const walk = new Array(segmentDates.length).fill(0);
    let cumulative = 0;
    const volatilityBase = { index: 0.32, total: 0.58, stock: 0.92 }[seriesName];
    const volatility = Math.min(volatilityBase + Math.abs(endValue - startValue) * 0.014, volatilityBase * 3.1);

    for (let index = 1; index < segmentDates.length; index += 1) {
      cumulative += (seededNoise(seriesOffset * 1000 + segmentIndex * 131 + index * 17) - 0.5) * volatility;
      walk[index] = cumulative;
    }

    const finalOffset = walk[walk.length - 1];

    segmentDates.forEach((date, index) => {
      const ratio = steps === 0 ? 0 : index / steps;
      const linear = startValue + (endValue - startValue) * ratio;
      const bridge = walk[index] - finalOffset * ratio;
      const envelope = Math.sin(Math.PI * ratio);
      const value = Number((linear + bridge * envelope).toFixed(2));
      values.set(date, value);
    });
  }

  return values;
};

const indexValues = buildSeriesValues("index");
const totalValues = buildSeriesValues("total");
const stockValues = buildSeriesValues("stock");

const chartData = tradingDates.map((date) => ({
  date,
  time: parseDate(date).getTime(),
  index: indexValues.get(date),
  total: totalValues.get(date),
  stock: stockValues.get(date),
  trades: tradeRecords[date] || []
}));

const getXForTime = (time, width) => {
  const { left, right } = chartState.margin;
  const innerWidth = width - left - right;
  return left + ((time - chartStart.getTime()) / totalSpan) * innerWidth;
};

const getYForValue = (value, height) => {
  const { top, bottom } = chartState.margin;
  const innerHeight = height - top - bottom;
  return top + ((chartState.maxY - value) / (chartState.maxY - chartState.minY)) * innerHeight;
};

const getSeriesPath = (seriesName, width, height) => chartData.map((point, index) => {
  const x = getXForTime(point.time, width);
  const y = getYForValue(point[seriesName], height);
  return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ");

const getAreaPath = (seriesName, width, height) => {
  const baseline = getYForValue(0, height);
  const points = chartData.map((point) => [getXForTime(point.time, width), getYForValue(point[seriesName], height)]);
  const first = points[0];
  const last = points[points.length - 1];
  const path = [`M ${first[0].toFixed(2)} ${baseline.toFixed(2)}`];
  points.forEach(([x, y]) => path.push(`L ${x.toFixed(2)} ${y.toFixed(2)}`));
  path.push(`L ${last[0].toFixed(2)} ${baseline.toFixed(2)}`);
  path.push("Z");
  return path.join(" ");
};

const renderGrid = (width, height) => {
  const { top, right, bottom, left } = chartState.margin;
  const yTicks = [-30, 0, 30, 60, 90, 120];
  chartRefs.grid.innerHTML = "";

  const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisLine.setAttribute("x1", left);
  axisLine.setAttribute("x2", left);
  axisLine.setAttribute("y1", top);
  axisLine.setAttribute("y2", height - bottom);
  axisLine.setAttribute("class", "chart-axis-line");
  chartRefs.grid.appendChild(axisLine);

  yTicks.forEach((tick) => {
    const y = getYForValue(tick, height);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", left);
    line.setAttribute("x2", width - right);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("class", tick === 0 ? "chart-grid-line is-zero" : "chart-grid-line");
    chartRefs.grid.appendChild(line);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", left - 12);
    label.setAttribute("y", y + 6);
    label.setAttribute("text-anchor", "end");
    label.setAttribute("class", "chart-axis-label");
    label.textContent = `${tick}%`;
    chartRefs.grid.appendChild(label);
  });

  xTickDates.forEach((tickDate) => {
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", getXForTime(parseDate(tickDate).getTime(), width));
    label.setAttribute("y", height - 12);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "chart-axis-label");
    label.textContent = tickDate;
    chartRefs.grid.appendChild(label);
  });
};

const findClosestPoint = (targetTime) => {
  let low = 0;
  let high = chartData.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (chartData[mid].time < targetTime) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  const current = chartData[low];
  const previous = chartData[Math.max(low - 1, 0)];
  return Math.abs(current.time - targetTime) < Math.abs(previous.time - targetTime) ? current : previous;
};

const setTooltip = (point, x, width) => {
  const lang = chartState.lang;
  chartRefs.tooltip.hidden = false;
  chartRefs.tooltipDate.textContent = point.date;
  chartRefs.tooltipIndex.textContent = formatPercent(point.index);
  chartRefs.tooltipTotal.textContent = formatPercent(point.total);
  chartRefs.tooltipStock.textContent = formatPercent(point.stock);
  chartRefs.tooltipTradesLabel.textContent = lang === "zh" ? "当日交易" : "Trades";
  chartRefs.tooltipTradesList.innerHTML = "";

  const trades = point.trades.length
    ? point.trades.map((trade) => formatTrade(trade, lang))
    : [lang === "zh" ? "该日期未选取重点交易。" : "No highlighted trade on this date."];

  trades.forEach((trade) => {
    const item = document.createElement("li");
    item.textContent = trade;
    chartRefs.tooltipTradesList.appendChild(item);
  });

  const tooltipWidth = 286;
  const tooltipLeft = Math.min(Math.max(x + 14, 16), width - tooltipWidth - 16);
  chartRefs.tooltip.style.left = `${tooltipLeft}px`;
  chartRefs.tooltip.style.top = "24px";
};

const renderChart = (lang) => {
  chartState.lang = lang;
  const viewBox = chartRefs.svg.viewBox.baseVal;
  const width = viewBox.width;
  const height = viewBox.height;

  renderGrid(width, height);
  chartRefs.indexLine.setAttribute("d", getSeriesPath("index", width, height));
  chartRefs.totalLine.setAttribute("d", getSeriesPath("total", width, height));
  chartRefs.stockLine.setAttribute("d", getSeriesPath("stock", width, height));
  chartRefs.indexArea.setAttribute("d", getAreaPath("index", width, height));
  chartRefs.stockArea.setAttribute("d", getAreaPath("stock", width, height));

  const last = chartData[chartData.length - 1];
  chartRefs.legendIndex.textContent = formatPercent(last.index);
  chartRefs.legendTotal.textContent = formatPercent(last.total);
  chartRefs.legendStock.textContent = formatPercent(last.stock);

  chartRefs.svg.onmousemove = (event) => {
    const rect = chartRefs.svg.getBoundingClientRect();
    const relativeX = ((event.clientX - rect.left) / rect.width) * width;
    const clampedX = Math.min(Math.max(relativeX, chartState.margin.left), width - chartState.margin.right);
    const ratio = (clampedX - chartState.margin.left) / (width - chartState.margin.left - chartState.margin.right);
    const targetTime = chartStart.getTime() + ratio * totalSpan;
    const point = findClosestPoint(targetTime);
    const pointX = getXForTime(point.time, width);

    chartRefs.hoverLine.hidden = false;
    chartRefs.hoverLine.setAttribute("x1", pointX);
    chartRefs.hoverLine.setAttribute("x2", pointX);
    chartRefs.hoverLine.setAttribute("y1", chartState.margin.top);
    chartRefs.hoverLine.setAttribute("y2", height - chartState.margin.bottom);
    setTooltip(point, (pointX / width) * rect.width, rect.width);
  };

  chartRefs.svg.onmouseleave = () => {
    chartRefs.hoverLine.hidden = true;
    chartRefs.tooltip.hidden = true;
  };
};

const toggle = document.getElementById("lang-toggle");

const updateLanguage = (lang) => {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "牛作铭" : "Zuoming Niu";
  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    lang === "zh"
      ? "牛作铭的个人主页，包含关于、金融、摄影与联系信息。"
      : "Personal website of Zuoming Niu, with sections on about, finance, photography, and contact."
  );

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.innerHTML = translations[lang][node.dataset.i18n];
  });

  toggle.textContent = lang === "en" ? "中文" : "EN";
  renderChart(lang);
};

toggle.addEventListener("click", () => {
  updateLanguage(document.body.dataset.lang === "en" ? "zh" : "en");
});

updateLanguage("en");
