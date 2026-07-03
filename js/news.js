const pageSize = 10;
let currentPage = 1;

/**
 * 📌 文章索引（对应你20个文章页）
 * 你只需要在这里维护即可
 */
const articles = [
  {
    title: "印尼支付正在进入QRIS全面统一时代，企业如何抓住机会？",
    desc: "近年来，印尼支付体系正在经历快速标准化升级，其中最核心的变化就是QRIS（统一二维码支付系统）的全面普及。无论是线下商超、餐饮，还是线上电商平台，QRIS正在逐步成为主流支付入口。",
    url: "articles/article1.html"
  },
  {
    title: "聚合支付系统如何提升印尼电商平台转化率？",
    desc: "在印尼电商行业，支付环节是影响转化率的关键节点之一。研究表明，支付失败或流程复杂，会直接导致用户放弃订单。",
    url: "articles/article2.html"
  },
  {
    title: "印尼本地银行支付体系接入的核心挑战与解决方案",
    desc: "印尼银行体系结构复杂，不同银行接口标准差异较大，尤其是在清算和回调机制方面。",
    url: "articles/article3.html"
  },
  {
    title: "为什么印尼企业越来越依赖支付路由系统？",
    desc: "支付路由系统（Payment Routing）是现代聚合支付系统的核心能力之一，它的作用是自动选择最优支付通道。",
    url: "articles/article4.html"
  },
  {
    title: "印尼电子钱包市场全面解析与未来趋势",
    desc: "印尼是东南亚电子钱包使用率最高的国家之一，目前主流钱包包括GoPay、OVO、DANA以及ShopeePay。",
    url: "articles/article5.html"
  },
  {
    title: "什么是QRIS？为什么它正在成为印尼支付基础设施的核心？",
    desc: "QRIS（Quick Response Code Indonesian Standard）是由印尼央行推出的统一二维码支付标准，它的核心目标是将所有电子支付方式整合到一个二维码体系中。",
    url: "articles/article6.html"
  },
  {
    title: "支付风控系统在印尼市场中的重要性",
    desc: "随着数字支付的快速增长，印尼市场也面临越来越多的支付安全挑战，例如重复支付、异常交易与欺诈行为。",
    url: "articles/article7.html"
  },
  {
    title: "API支付系统如何帮助企业快速集成支付能力？",
    desc: "在现代支付架构中，API已经成为连接企业与支付系统的核心方式。",
    url: "articles/article8.html"
  },
  {
    title: "自动对账系统如何提升企业财务效率？",
    desc: "在传统支付模式中，对账通常依赖人工处理，不仅效率低，而且容易出错。",
    url: "articles/article9.html"
  },
  {
    title: "印尼支付系统架构解析：从前端到清结算全流程",
    desc: "一个完整的企业级支付系统通常由多个模块组成：",
    url: "articles/article10.html"
  },
  {
    title: "印尼跨境支付解决方案的核心挑战与突破路径",
    desc: "随着东南亚跨境电商与数字服务的增长，印尼市场对跨境支付的需求正在快速上升。但跨境支付在实际落地中仍然面临多个挑战，包括汇率波动、结算延迟以及本地支付方式不统一等问题。",
    url: "articles/article11.html"
  },
  {
    title: "为什么印尼O2O行业必须升级支付系统？",
    desc: "O2O行业（Online to Offline）在印尼发展迅速，例如外卖、出行与本地生活服务。",
    url: "articles/article12.html"
  },
  {
    title: "支付成功率优化的五大核心策略",
    desc: "支付成功率是衡量支付系统质量的核心指标之一，在印尼市场尤为重要。",
    url: "articles/article13.html"
  },
  {
    title: "高并发支付系统在印尼电商大促中的作用",
    desc: "印尼电商市场在大促期间（如双11、年终促销）会出现极高的交易峰值。",
    url: "articles/article14.html"
  },
  {
    title: "为什么企业需要升级到智能支付系统？",
    desc: "传统支付系统已经无法满足现代企业的增长需求，尤其是在多渠道支付环境下。",
    url: "articles/article15.html"
  },
  {
    title: "支付系统自动补单机制如何保障交易完整性？",
    desc: "在实际支付过程中，由于网络延迟、银行回调异常或第三方通道不稳定，经常会出现“用户已支付但订单未更新”的情况。这类问题如果不能及时处理，会直接影响用户体验与企业收入。",
    url: "articles/article16.html"
  },
  {
    title: "支付安全体系如何防止欺诈与异常交易？",
    desc: "随着数字支付规模扩大，支付安全问题成为企业最关注的核心之一。",
    url: "articles/article17.html"
  },
  {
    title: "API生态如何构建现代支付系统的核心竞争力？",
    desc: "在现代支付架构中，API已经成为整个系统的核心连接层。",
    url: "articles/article18.html"
  },
  {
    title: "支付系统如何实现实时监控与智能运维？",
    desc: "在高并发支付环境中，系统稳定性至关重要。实时监控系统可以帮助企业在问题发生之前提前预警。",
    url: "articles/article19.html"
  },
  {
    title: "印尼未来支付系统发展趋势：从聚合到智能化",
    desc: "印尼支付市场正在经历从“多通道并存”向“智能统一系统”的转型。未来支付系统的发展趋势主要体现在三个方向：",
    url: "articles/article20.html"
  }

  // 👉 一直加到20篇
];

function renderNews(page) {
  const container = document.getElementById("articleList");
  container.innerHTML = "";

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageData = articles.slice(start, end);

  pageData.forEach(item => {
    container.innerHTML += `
      <div class="news-item">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.url}">查看更多 →</a>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(articles.length / pageSize);
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button onclick="goPage(${i})" class="${i === currentPage ? 'active' : ''}">
        ${i}
      </button>
    `;
  }
}

function goPage(page) {
  currentPage = page;
  renderNews(page);
}

renderNews(currentPage);