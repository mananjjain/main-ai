
const apiModal = document.getElementById('apiModal');
const keyBtn = document.getElementById('keyBtn');
const saveKeyBtn = document.getElementById('saveKeyBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const apiKeyInput = document.getElementById('apiKeyInput');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatWindow = document.getElementById('chatWindow');
const modelSelect = document.getElementById('modelSelect');

let apiKey = localStorage.getItem('dreamable_api_key') || null;

function openModal() { apiModal.classList.remove('hidden'); }
function closeModal() { apiModal.classList.add('hidden'); }
keyBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key) return alert('Please enter your API key');
  localStorage.setItem('dreamable_api_key', key);
  apiKey = key;
  alert('API key saved successfully!');
  closeModal();
});

function appendMessage(role, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', role);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  if (!apiKey) return alert('Please enter your API key first.');

  appendMessage('user', text);
  userInput.value = '';

  const selectedModel = modelSelect.value;
  appendMessage('bot', 'Thinking...');

  let modelUrl = '';
  if (selectedModel === 'xexpert') {
    modelUrl = 'https://api.dreamable.in/xexpert';
  } else if (selectedModel === 'caption') {
    modelUrl = 'https://api.dreamable.in/billion-caption';
  }

  try {
    const res = await fetch(modelUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ prompt: text })
    });
    const data = await res.json();
    chatWindow.lastElementChild.textContent = data.output || 'No response';
  } catch (err) {
    chatWindow.lastElementChild.textContent = 'Error: ' + err.message;
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
