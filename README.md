
# Dreamable XExpert (Static HTML Version)

A fully static HTML, CSS, and JavaScript implementation for your XExpert and Billion Dollar Caption Pro models.

## 🚀 Features
- Two selectable models:
  - 🧠 XExpert
  - 💬 Billion Dollar Caption Pro
- User API key input stored in localStorage
- Professional dark chat UI
- Fully static — deploy anywhere (GitHub Pages, Vercel, Dreamable Cloud)

## 🧭 How to Use
1. Open `index.html` in your browser.
2. Click **🔑 API Key** to enter your Dreamable key.
3. Select **XExpert** or **Billion Dollar Caption Pro** from the dropdown.
4. Type your message and click **Send**.

## 🌐 Hosting
Host anywhere:
- **GitHub Pages** — push to repo
- **Vercel** — deploy as static site
- **Dreamable Cloud** — upload folder directly

## 🧱 Folder Structure
```
xexpert-html/
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
```

## 🪄 Customization
Update `script.js`:
```js
modelUrl = 'https://api.dreamable.in/xexpert';
modelUrl = 'https://api.dreamable.in/billion-caption';
```
Replace with your actual Dreamable API endpoints.
