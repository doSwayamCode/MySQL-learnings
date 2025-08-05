const topics = {
  "00 - DB Creation": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/Beginner%20-%20Parks_and_Rec_Create_db.sql",
  "01 - SELECT statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/01%20SELECT%20statements.sql",
  "02 - WHERE statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/02%20WHERE%20statements.sql",
  "03 - ORDER and GROUP BY statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/03%20ORDER%20and%20GROUP%20BY%20statements.sql",
  "04 - HAVING vs WHERE statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/04%20HAVING%20vs%20WHERE%20statements.sql",
  "05 - LIMIT and ALIASING statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/05%20LIMIT%20and%20ALIASING%20statements.sql",
  "06 - JOINS statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/06%20JOINS%20statements.sql",
  "07 - UNION statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/07%20UNION%20statements.sql",
  "08 - STRING statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/08%20STRING%20statements.sql",
  "09 - CASE statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/09%20CASE%20statements.sql",
  "10 - SUBQUERIES statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/10%20SUBQUERIES%20statements.sql",
  "11 - WINDOW statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/11%20WINDOW%20statements.sql",
  "12 - CTE statement (Advanced SQL starts)": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/12%20CTE%20statement%20(adv%20SQL%20starts).sql",
  "13 - TEMPORARY table statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/13%20TEMPORARY%20table%20statements.sql",
  "14 - STORED procedures statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/14%20STORES%20procedures%20statements.sql",
  "15 - TRIGGERS and EVENTS statements": "https://raw.githubusercontent.com/doSwayamCode/MySQL-learnings/refs/heads/main/15%20TRIGGERS%20and%20EVENTS%20statements.sql",
};

const nav = document.getElementById("topic-nav");
const pagination = document.getElementById("pagination");
const content = document.getElementById("content");
const searchInput = document.getElementById("searchInput");

let filteredTopics = Object.keys(topics);
let currentPage = 1;
const buttonsPerPage = 5;

function renderButtons() {
  nav.innerHTML = "";
  pagination.innerHTML = "";

  const start = (currentPage - 1) * buttonsPerPage;
  const end = start + buttonsPerPage;
  const pageTopics = filteredTopics.slice(start, end);

  pageTopics.forEach(topic => {
    const btn = document.createElement("button");
    btn.innerText = topic;
    btn.onclick = () => loadTopic(topic);
    nav.appendChild(btn);
  });

  const totalPages = Math.ceil(filteredTopics.length / buttonsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pbtn = document.createElement("button");
    pbtn.innerText = i;
    pbtn.classList.toggle("active", i === currentPage);
    pbtn.onclick = () => {
      currentPage = i;
      renderButtons();
    };
    pagination.appendChild(pbtn);
  }
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  filteredTopics = Object.keys(topics).filter(topic =>
    topic.toLowerCase().includes(term)
  );
  currentPage = 1;
  renderButtons();
});

function loadTopic(topic) {
  fetch(topics[topic])
    .then(res => res.text())
    .then(code => {
      content.innerHTML = `
        <h2>${topic}</h2>
        <pre><button class="copy-btn">Copy</button><code class="language-sql">${escapeHtml(code)}</code></pre>
      `;
      Prism.highlightAll();
      addCopyEvent();
    })
    .catch(() => {
      content.innerHTML = `<h2>${topic}</h2><p>Failed to load code. Please try again later.</p>`;
    });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  return text.replace(/[&<>]/g, char => map[char]);
}

function addCopyEvent() {
  const copyBtn = document.querySelector(".copy-btn");
  const codeBlock = document.querySelector("code");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(codeBlock.textContent)
      .then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => (copyBtn.innerText = "Copy"), 2000);
      });
  });
}

renderButtons();
