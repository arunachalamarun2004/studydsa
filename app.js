// ============================================================
//  DSA Roadmap App — app.js
// ============================================================

const days = [
  { day:1, title:"Arrays — foundations", badge:"b-purple", label:"Phase 1: Arrays",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Arrays are the base of everything. Understand indexing, memory, and traversal before anything else.",
    theory:["Understand how arrays are stored in memory (contiguous blocks)","Learn 0-based indexing, length, and bounds","Traversal: for loop, while loop, for-each","Common operations: insert at end O(1), insert at middle O(n), delete O(n)","Understand what time complexity means using array examples"],
    problems:[{n:"Find the maximum element in array",d:"easy"},{n:"Reverse an array in-place",d:"easy"},{n:"Check if array is sorted",d:"easy"},{n:"Move all zeros to end",d:"easy"}],
    logic:["Do 10 number series questions on IndiaBIX","Example: 2, 4, 8, 16, ? → pattern: ×2 → answer: 32","Try to identify the pattern in under 10 seconds"] },

  { day:2, title:"Arrays — searching & prefix sums", badge:"b-purple", label:"Phase 1: Arrays",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Linear search is O(n). Binary search is O(log n) but needs sorted array. Prefix sums avoid repeated summation.",
    theory:["Linear search: scan every element","Binary search: divide and conquer on sorted array — learn the template","Prefix sum array: precompute cumulative sums for range queries","Subarray sum using prefix: sum(i,j) = prefix[j] - prefix[i-1]"],
    problems:[{n:"Binary search (classic)",d:"easy"},{n:"Search insert position",d:"easy"},{n:"Range sum query using prefix sum",d:"easy"},{n:"Subarray sum equals k",d:"med"}],
    logic:["Do 10 odd-one-out questions","Example: 3, 5, 7, 9, 11 → all prime except 9 → 9 is odd one out","Focus on WHY something doesn't belong"] },

  { day:3, title:"Two pointers technique", badge:"b-purple", label:"Phase 1: Arrays",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Two pointers removes the need for nested loops in many problems. Always ask: can I use two indices instead of two loops?",
    theory:["Concept: use two indices (left, right) instead of nested loops","Inward two pointers: both start at ends, move toward center","Same direction: slow and fast pointer on same array","When to use: sorted array, pair problems, removing duplicates"],
    problems:[{n:"Two sum II (sorted array)",d:"easy"},{n:"Remove duplicates from sorted array",d:"easy"},{n:"Container with most water",d:"med"},{n:"3-sum",d:"med"}],
    logic:["Seating arrangement puzzles: A sits left of B, C sits right of D...","Draw a diagram, fill positions step by step","This trains spatial/logical reasoning directly"] },

  { day:4, title:"Sliding window", badge:"b-purple", label:"Phase 1: Arrays",
    time:["Morning: 1.5 hrs","Evening: 2 hrs","Logic puzzle: 15 min"],
    note:"Sliding window is the most frequently tested pattern in Infosys SP/DSE. Master the expand/shrink template.",
    theory:["Fixed window: window size k, slide one step at a time","Variable window: expand right, shrink left when condition breaks","Template: while(condition violated) shrink left; expand right","When to use: contiguous subarray/substring with some property"],
    problems:[{n:"Maximum sum subarray of size k",d:"easy"},{n:"Longest substring without repeating characters",d:"med"},{n:"Minimum size subarray sum",d:"med"},{n:"Fruits into baskets",d:"med"}],
    logic:["Blood relation problems: A is B's father, C is A's sister...","Draw a family tree diagram as you read","Trains conditional reasoning"] },

  { day:5, title:"Strings — full deep dive", badge:"b-purple", label:"Phase 1: Arrays",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Strings are arrays of characters. All array techniques apply. Master frequency maps — they solve 40% of string problems.",
    theory:["String as char array: iterate, charAt, substring","Frequency map: count occurrences using hash map","Palindrome: two-pointer from both ends","Anagram: same frequency map means anagram","String builder for efficient concatenation"],
    problems:[{n:"Valid anagram",d:"easy"},{n:"Palindrome check",d:"easy"},{n:"Longest palindromic substring",d:"med"},{n:"Group anagrams",d:"med"},{n:"Valid parentheses",d:"easy"}],
    logic:["Coding/decoding: A=1, B=2 style problems","Decode: 8-5-12-12-15 → HELLO","Trains pattern substitution thinking"] },

  { day:6, title:"Hash maps & sets — deep dive", badge:"b-teal", label:"Phase 2: Hashing",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"A hash map gives O(1) average lookup. Every time you're doing a search inside a loop, ask: can I replace this with a hash map?",
    theory:["Hash map: key → value storage, O(1) get/put/contains","Hash set: unique elements, O(1) lookup","Collision handling concept (no need to code, just understand)","When to use: frequency count, seen-before check, complement search","HashMap vs array for frequency: use map when values are large/negative"],
    problems:[{n:"Two sum (hash map approach)",d:"easy"},{n:"First unique character in string",d:"easy"},{n:"Contains duplicate",d:"easy"},{n:"Longest consecutive sequence",d:"med"}],
    logic:["Direction-based puzzles: walk N 5km, turn right 3km, where are you?","Draw on paper. Trains spatial + logical thinking","5 puzzles — time yourself: 2 min each"] },

  { day:7, title:"Week 1 revision + mini mock", badge:"b-teal", label:"Phase 2: Hashing",
    time:["Morning: 1 hr revision","Mock test: 90 min","Evening: review 1 hr"],
    note:"Revision day. No new topics. Identify your weakest area from days 1-6 and spend extra time there.",
    theory:["Re-read your notes on: two pointers, sliding window, hash map","For each topic, write the pattern in 1 sentence from memory","List the problems you couldn't solve — attempt them again"],
    problems:[{n:"Kadane's algorithm — max subarray",d:"med"},{n:"4-sum",d:"med"},{n:"Minimum window substring",d:"hard"}],
    logic:["Attempt 20 mixed aptitude questions (IndiaBIX)","Time yourself: 30 seconds per question","Review wrong answers — understand WHY you were wrong"] },

  { day:8, title:"Linked lists — operations", badge:"b-amber", label:"Phase 3: Linked Lists",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Linked lists test your ability to manipulate pointers. Draw every step on paper — this is non-negotiable for linked list problems.",
    theory:["Node structure: value + next pointer","Traversal: while(node != null) follow next","Insert at head: newNode.next = head; head = newNode","Delete node: prev.next = curr.next","Dummy node technique: simplifies edge cases"],
    problems:[{n:"Reverse a linked list",d:"easy"},{n:"Middle of linked list",d:"easy"},{n:"Merge two sorted lists",d:"easy"},{n:"Remove nth node from end",d:"med"}],
    logic:["Arrangement puzzles: books on shelf, tallest to shortest...","Write constraints → fill positions systematically","5 puzzles, 3 min each"] },

  { day:9, title:"Linked lists — advanced", badge:"b-amber", label:"Phase 3: Linked Lists",
    time:["Morning: 1.5 hrs","Evening: 2 hrs","Logic puzzle: 15 min"],
    note:"Floyd's cycle detection is a must-know. The fast/slow pointer trick appears in many forms beyond just cycles.",
    theory:["Fast and slow pointer (Floyd's algorithm)","Cycle detection: fast moves 2, slow moves 1, they meet if cycle exists","Find start of cycle: reset one pointer to head, move both at speed 1","Palindrome linked list: find middle, reverse second half, compare","Intersection of two lists"],
    problems:[{n:"Detect cycle in linked list",d:"easy"},{n:"Find start of cycle",d:"med"},{n:"Palindrome linked list",d:"easy"},{n:"Intersection of two linked lists",d:"easy"}],
    logic:["Syllogism: All A are B. Some B are C. What can you conclude?","Use Venn diagrams to reason through","10 questions — standard exam format"] },

  { day:10, title:"Stacks & queues", badge:"b-amber", label:"Phase 3: Linked Lists",
    time:["Morning: 1.5 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Stack = LIFO. Queue = FIFO. Many problems disguise themselves — when you see 'matching' or 'nearest', think stack.",
    theory:["Stack: push, pop, peek, isEmpty — all O(1)","Valid parentheses: push open, pop+match on close","Monotonic stack: maintain increasing or decreasing order","Queue: enqueue at rear, dequeue from front","Implement queue using two stacks — common interview question"],
    problems:[{n:"Valid parentheses",d:"easy"},{n:"Min stack",d:"med"},{n:"Next greater element",d:"med"},{n:"Daily temperatures",d:"med"}],
    logic:["Number ranking puzzles: A scores more than B, C less than D...","Arrange in order from the clues — linear reasoning","10 puzzles"] },

  { day:11, title:"Recursion & backtracking", badge:"b-coral", label:"Phase 4: Recursion",
    time:["Morning: 2 hrs","Evening: 1.5 hrs","Logic puzzle: 15 min"],
    note:"Recursion is the hardest mental shift. Spend extra time today. Draw the call tree for EVERY problem — do not skip this.",
    theory:["Recursion = function calls itself with a smaller problem","Base case: the condition that stops recursion","Recursive case: reduce the problem and call again","Call stack: understand how frames stack and unstack","Backtracking: try a choice, recurse, undo choice if it fails"],
    problems:[{n:"Fibonacci with memoisation",d:"easy"},{n:"Power(x, n)",d:"med"},{n:"Generate all subsets",d:"med"},{n:"Generate all permutations",d:"med"}],
    logic:["Decision tree puzzles: if A then B, if not A then C...","Map out all branches like a flow chart","Directly matches backtracking logic"] },

  { day:12, title:"Binary trees", badge:"b-coral", label:"Phase 4: Recursion",
    time:["Morning: 1.5 hrs","Evening: 2 hrs","Logic puzzle: 15 min"],
    note:"Most tree problems are solved with recursion. The key insight: a tree problem = solve for left subtree + right subtree + current node.",
    theory:["Tree node: value, left child, right child","Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root)","Height of tree: 1 + max(height(left), height(right))","Level-order (BFS) using a queue","Check balanced: |height(left) - height(right)| <= 1 at every node"],
    problems:[{n:"Maximum depth of binary tree",d:"easy"},{n:"Invert binary tree",d:"easy"},{n:"Same tree",d:"easy"},{n:"Level order traversal",d:"med"},{n:"Validate BST",d:"med"}],
    logic:["Family tree reasoning: who is the uncle of X?","5 multi-step family relation problems","Builds hierarchical reasoning used in tree problems"] },

  { day:13, title:"Graphs — BFS & DFS", badge:"b-coral", label:"Phase 4: Recursion",
    time:["Morning: 2 hrs","Evening: 2 hrs","Logic puzzle: 15 min"],
    note:"Graphs are trees with cycles and no fixed root. BFS finds shortest paths. DFS explores all paths. Both are essential.",
    theory:["Graph representations: adjacency list (preferred) vs matrix","BFS: use queue, visit level by level, good for shortest path","DFS: use recursion or stack, go deep before backtracking","Visited array: must track visited nodes to avoid infinite loops","Grid as graph: each cell is a node, 4 neighbors (up/down/left/right)"],
    problems:[{n:"Number of islands",d:"med"},{n:"Flood fill",d:"easy"},{n:"Clone graph",d:"med"},{n:"Course schedule (cycle detect)",d:"med"}],
    logic:["Route/map problems: shortest path from A to B given constraints","Trace BFS mentally: which node do you visit first, second?","5 problems — time 3 min each"] },

  { day:14, title:"Dynamic programming — foundations", badge:"b-blue", label:"Phase 5: DP",
    time:["Morning: 2 hrs","Evening: 2 hrs","Logic puzzle: 15 min"],
    note:"DP = recursion + memory. If you can write a recursive solution, you can convert it to DP. Always start recursive, then optimise.",
    theory:["DP applies when: overlapping subproblems + optimal substructure","Top-down (memoisation): recursion + cache results in array/map","Bottom-up (tabulation): build up from base cases using a table","Steps: 1) define state  2) recurrence relation  3) base cases  4) answer","1D DP examples: climbing stairs, house robber, fibonacci"],
    problems:[{n:"Climbing stairs",d:"easy"},{n:"House robber",d:"med"},{n:"Coin change",d:"med"},{n:"Longest increasing subsequence",d:"med"}],
    logic:["Optimisation puzzles: max coins with given constraints","Map directly to DP thinking: what is the state? what is the choice?","5 puzzles"] },

  { day:15, title:"Full mock test + complete review", badge:"b-blue", label:"Phase 5: DP",
    time:["Mock test 1: 90 min","Review: 1 hr","Mock test 2: 60 min","Final notes: 30 min"],
    note:"This is your benchmark day. Treat both mock tests as the real exam — no breaks, no hints, timed strictly.",
    theory:["Before mock: review your personal notes from all 14 days","After mock 1: analyse each problem — which pattern? where did you slow down?","Check time complexity of every solution you wrote","List your top 3 weak topics for focused revision in Days 16+"],
    problems:[{n:"Mock test 1: attempt 3 random medium problems in 90 min",d:"med"},{n:"Mock test 2: HackerRank problem solving assessment",d:"med"},{n:"Attempt 1 hard problem — just for exposure",d:"hard"}],
    logic:["Full 30-question aptitude mock on IndiaBIX","Time: 25 minutes total","Review every wrong answer with explanation"] }
];

// ---- State ----
let ck = {};
let curDay = 0;
let currentUser = '';

// ---- Init ----
function init() {
  try { ck = JSON.parse(localStorage.getItem('dsa15_ck') || '{}'); } catch(e) { ck = {}; }
  currentUser = localStorage.getItem('dsa15_user') || '';

  if (!currentUser) {
    showNameModal();
  } else {
    setUserChip(currentUser);
  }

  buildNav();
  renderDay();
}

// ---- Persist ----
function save() {
  try { localStorage.setItem('dsa15_ck', JSON.stringify(ck)); } catch(e) {}
  saveToLeaderboard();
}

// ---- Progress calculation ----
function calcOverallPct() {
  let total = 0, done = 0;
  days.forEach((d, di) => {
    total += d.theory.length + d.problems.length + d.logic.length;
    done  += d.theory.filter((_,i)  => ck[di+'t'+i]).length
           + d.problems.filter((_,i) => ck[di+'p'+i]).length
           + d.logic.filter((_,i)   => ck[di+'l'+i]).length;
  });
  return total ? Math.round(done / total * 100) : 0;
}

function isDayComplete(di) {
  const d = days[di];
  const total = d.theory.length + d.problems.length + d.logic.length;
  const done  = d.theory.filter((_,i)  => ck[di+'t'+i]).length
              + d.problems.filter((_,i) => ck[di+'p'+i]).length
              + d.logic.filter((_,i)   => ck[di+'l'+i]).length;
  return done === total;
}

// ---- Stats bar ----
function updateStats() {
  let totalT=0, doneT=0, totalP=0, doneP=0;
  days.forEach((d, di) => {
    totalT += d.theory.length + d.logic.length;
    doneT  += d.theory.filter((_,i) => ck[di+'t'+i]).length + d.logic.filter((_,i) => ck[di+'l'+i]).length;
    totalP += d.problems.length;
    doneP  += d.problems.filter((_,i) => ck[di+'p'+i]).length;
  });
  document.getElementById('tasks-done').textContent = doneT;
  document.getElementById('probs-done').textContent = doneP;
  const pct = calcOverallPct();
  document.getElementById('ovr-pct').textContent = pct + '%';
  document.getElementById('global-bar').style.width = pct + '%';
}

// ---- Navigation ----
function buildNav() {
  const c = document.getElementById('day-nav');
  c.innerHTML = '';
  days.forEach((d, i) => {
    const btn = document.createElement('button');
    let cls = 'dn';
    if (i === curDay) cls += ' on';
    else if (isDayComplete(i)) cls += ' comp';
    btn.className = cls;
    btn.textContent = 'D' + d.day;
    btn.setAttribute('aria-label', 'Day ' + d.day);
    btn.onclick = () => { curDay = i; buildNav(); renderDay(); };
    c.appendChild(btn);
  });
}

// ---- Render day ----
function renderDay() {
  const d = days[curDay];
  document.getElementById('cur-day').textContent = 'Day ' + d.day;
  updateStats();

  const total = d.theory.length + d.problems.length + d.logic.length;
  const done  = d.theory.filter((_,i)  => ck[curDay+'t'+i]).length
              + d.problems.filter((_,i) => ck[curDay+'p'+i]).length
              + d.logic.filter((_,i)   => ck[curDay+'l'+i]).length;
  const pct = Math.round(done / total * 100);

  const timeChips  = d.time.map(t => `<span class="time-chip">⏱ ${t}</span>`).join('');
  const theoryHTML = d.theory.map((t, i) => taskRow('t', i, t, ck[curDay+'t'+i])).join('');
  const probHTML   = d.problems.map((p, i) => probRow(i, p, ck[curDay+'p'+i])).join('');
  const logicHTML  = d.logic.map((l, i) => taskRow('l', i, l, ck[curDay+'l'+i])).join('');

  const prev = curDay > 0
    ? `<button class="nav-btn" onclick="goDay(${curDay-1})">← Day ${curDay}</button>` : '';
  const next = curDay < days.length - 1
    ? `<button class="nav-btn" onclick="goDay(${curDay+1})">Day ${curDay+2} →</button>` : '';

  document.getElementById('day-content').innerHTML = `
    <div class="day-card">
      <div class="day-header">
        <div>
          <div class="day-title">Day ${d.day} — ${d.title}</div>
          <div class="day-topic"><span class="badge ${d.badge}">${d.label}</span></div>
        </div>
      </div>
      <div class="time-row">${timeChips}</div>
      <div class="note-box">${d.note}</div>

      <div class="section-block">
        <div class="sec-title">📚 Concepts to study</div>
        <div class="task-list">${theoryHTML}</div>
      </div>

      <div class="section-block">
        <div class="sec-title">💻 Problems to solve</div>
        <div class="task-list">${probHTML}</div>
      </div>

      <div class="section-block">
        <div class="sec-title">🧩 Logical thinking (15 min)</div>
        <div class="task-list">${logicHTML}</div>
      </div>

      <div class="pbar-wrap">
        <div class="pbar" style="width:${pct}%"></div>
      </div>
      <div class="pbar-label">${done}/${total} tasks complete — ${pct}%</div>
    </div>
    <div class="nav-btns">${prev}${next}</div>
  `;
}

function taskRow(type, i, text, checked) {
  return `
    <label class="task${checked ? ' done' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="tog('${type}',${i},this)">
      <span>${text}</span>
    </label>`;
}

function probRow(i, p, checked) {
  return `
    <label class="task${checked ? ' done' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="tog('p',${i},this)">
      <span style="flex:1">${p.n}</span>
      <span class="prob-diff ${p.d}">${p.d}</span>
    </label>`;
}

// ---- Toggle checkbox ----
function tog(type, idx, el) {
  const key = curDay + type + idx;
  ck[key] = el.checked;
  save();
  const lbl = el.closest('.task');
  lbl.classList.toggle('done', el.checked);

  // Update progress bar inline
  const d = days[curDay];
  const total = d.theory.length + d.problems.length + d.logic.length;
  const done  = d.theory.filter((_,i)  => ck[curDay+'t'+i]).length
              + d.problems.filter((_,i) => ck[curDay+'p'+i]).length
              + d.logic.filter((_,i)   => ck[curDay+'l'+i]).length;
  const pct = Math.round(done / total * 100);
  const bar = document.querySelector('.pbar');
  if (bar) bar.style.width = pct + '%';
  const label = document.querySelector('.pbar-label');
  if (label) label.textContent = `${done}/${total} tasks complete — ${pct}%`;

  updateStats();
  buildNav();
}

function goDay(i) { curDay = i; buildNav(); renderDay(); }

// ---- Leaderboard (localStorage-based) ----
const LB_KEY = 'dsa15_leaderboard';

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem(LB_KEY) || '[]'); } catch(e) { return []; }
}

function saveToLeaderboard() {
  if (!currentUser) return;
  const pct = calcOverallPct();
  let lb = getLeaderboard();
  const idx = lb.findIndex(u => u.name.toLowerCase() === currentUser.toLowerCase());
  if (idx >= 0) { lb[idx].pct = pct; lb[idx].updated = Date.now(); }
  else lb.push({ name: currentUser, pct, updated: Date.now() });
  lb.sort((a,b) => b.pct - a.pct);
  lb = lb.slice(0, 50); // keep top 50
  try { localStorage.setItem(LB_KEY, JSON.stringify(lb)); } catch(e) {}
}

function openLeaderboard() {
  saveToLeaderboard();
  renderLeaderboard();
  document.getElementById('lb-backdrop').classList.add('show');
  // Force reflow then show modal with animation
  const modal = document.getElementById('lb-modal');
  modal.style.display = 'block';
  requestAnimationFrame(() => modal.classList.add('show'));
}

function closeLeaderboard() {
  document.getElementById('lb-backdrop').classList.remove('show');
  const modal = document.getElementById('lb-modal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = '', 200);
}

function renderLeaderboard() {
  const lb = getLeaderboard().slice(0, 10);
  const list = document.getElementById('lb-list');
  if (!lb.length) {
    list.innerHTML = '<div class="lb-empty">No entries yet. Complete some tasks to appear here! 🚀</div>';
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  const rankCls = ['gold','silver','bronze'];
  list.innerHTML = lb.map((u, i) => {
    const isMe = currentUser && u.name.toLowerCase() === currentUser.toLowerCase();
    const initial = u.name.charAt(0).toUpperCase();
    const rankLabel = medals[i] || (i+1);
    const rankClass = rankCls[i] || '';
    return `
      <div class="lb-row${isMe ? ' me' : ''}">
        <div class="lb-rank ${rankClass}">${rankLabel}</div>
        <div class="lb-avatar">${initial}</div>
        <div class="lb-name${isMe ? ' me-label' : ''}">${escHtml(u.name)}</div>
        <div class="lb-bar-wrap"><div class="lb-bar" style="width:${u.pct}%"></div></div>
        <div class="lb-pct">${u.pct}%</div>
      </div>`;
  }).join('');
}

// ---- Name modal ----
function showNameModal() {
  document.getElementById('name-backdrop').classList.add('show');
  const modal = document.getElementById('name-modal');
  modal.style.display = 'block';
  requestAnimationFrame(() => modal.classList.add('show'));
  setTimeout(() => document.getElementById('name-input').focus(), 250);

  document.getElementById('name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitName();
  });
}

function submitName() {
  const val = document.getElementById('name-input').value.trim();
  if (!val) { document.getElementById('name-input').focus(); return; }
  currentUser = val;
  localStorage.setItem('dsa15_user', val);
  setUserChip(val);
  saveToLeaderboard();

  document.getElementById('name-backdrop').classList.remove('show');
  const modal = document.getElementById('name-modal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = '', 200);
}

function changeUser() {
  // Reset name — re-show prompt
  document.getElementById('name-input').value = currentUser;
  showNameModal();
}

function setUserChip(name) {
  document.getElementById('user-display').textContent = name;
  document.getElementById('user-avatar').textContent  = name.charAt(0).toUpperCase();
}

// ---- Utility ----
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- Kick off ----
init();
