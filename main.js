const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = "bg-white/15 p-4 rounded-2xl flex justify-between items-center shadow-lg border border-white/10 hover:bg-white/20 transition";

  const span = document.createElement('span');
  span.textContent = text;
  span.className = "flex-1 text-lg";

  const btns = document.createElement('div');
  btns.className = "flex gap-2";

  const editBtn = document.createElement('button');
  editBtn.innerHTML = "✏️";
  editBtn.className = "px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:scale-95 transition";
  editBtn.onclick = () => editTask(span);

  const delBtn = document.createElement('button');
  delBtn.innerHTML = "🗑️";
  delBtn.className = "px-3 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-95 transition";
  delBtn.onclick = () => li.remove();

  btns.append(editBtn, delBtn);
  li.append(span, btns);
  list.appendChild(li);
  input.value = "";
}

function editTask(span) {
  const old = span.textContent;
  const newText = prompt("Yangi matn:", old);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}

addBtn.onclick = addTask;
input.addEventListener('keydown', (e) => { if (e.key === 'Enter') addTask(); });