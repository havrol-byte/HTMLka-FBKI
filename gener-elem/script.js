const app = document.getElementById('app');

app.innerHTML = `
  <h2>Мой динамический маркированный список</h2>
  <p>Введите данные и нажмите кнопку, затем дополняйте через диалоговые окна.</p>
  <div class="input-group">
    <input type="text" id="itemInput" placeholder="Введите элемент списка и нажмите Добавить">
    <button id="addButton">Добавить элемент</button>
  </div>
  <ul id="dynamicList" class="custom-list"></ul>
`;

const input = document.getElementById('itemInput');
const button = document.getElementById('addButton');
const list = document.getElementById('dynamicList');

const itemClasses = ['item-style1', 'item-style2', 'item-style3'];

function addItem(text) {
  if (!text.trim()) return;
  
  const li = document.createElement('li');
  li.className = 'custom-list-item ' + itemClasses[list.children.length % itemClasses.length];
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
}

button.addEventListener('click', () => {
  addItem(input.value);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem(input.value);
  }
});