const articles = [
   { id: 1, title: "印尼支付正在进入QRIS全面统一时代，企业如何抓住机会？" },
   { id: 2, title: "聚合支付系统如何提升印尼电商平台转化率？" },
   { id: 3, title: "印尼本地银行支付体系接入的核心挑战与解决方案" },
   { id: 4, title: "为什么印尼企业越来越依赖支付路由系统？" },
   { id: 5, title: "印尼电子钱包市场全面解析与未来趋势" },
   { id: 6, title: "什么是QRIS？为什么它正在成为印尼支付基础设施的核心？" },
   { id: 7, title: "支付风控系统在印尼市场中的重要性" },
   { id: 8, title: "API支付系统如何帮助企业快速集成支付能力？" },
   { id: 9, title: "自动对账系统如何提升企业财务效率？" },
   { id: 10, title: "印尼支付系统架构解析：从前端到清结算全流程" },
   { id: 11, title: "印尼跨境支付解决方案的核心挑战与突破路径" },
   { id: 12, title: "为什么印尼O2O行业必须升级支付系统？" },
   { id: 13, title: "支付成功率优化的五大核心策略" },
   { id: 14, title: "高并发支付系统在印尼电商大促中的作用" },
   { id: 15, title: "为什么企业需要升级到智能支付系统？" },
   { id: 16, title: "支付系统自动补单机制如何保障交易完整性？" },
   { id: 17, title: "支付安全体系如何防止欺诈与异常交易？" },
   { id: 18, title: "API生态如何构建现代支付系统的核心竞争力？" },
   { id: 19, title: "支付系统如何实现实时监控与智能运维？" },
   { id: 20, title: "印尼未来支付系统发展趋势：从聚合到智能化" }
];

/**
 * 📌 随机打乱数组
 */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/**
 * 📌 随机取4篇（排除当前文章）
 */
function getRandomArticles(list, count = 4) {
  return shuffle([...list]).slice(0, count);
}

/**
 * 📌 渲染推荐阅读
 */
function renderRecommend() {
  const container = document.getElementById("recommendList");
  if (!container) return;

  const randomArticles = getRandomArticles(articles, 4);

  let html = `<h3>推荐阅读</h3>`;

  randomArticles.forEach(item => {
    html += `
      <div class="rec-item">
        <a href="article${item.id}.html">
          ${item.title}
        </a>
      </div>
    `;
  });

  container.innerHTML = html;
}

renderRecommend();

