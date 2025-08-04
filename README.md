# 🕵️‍♂️ Website Reputation Checker

A hacker-themed web app that checks the reputation of any website using the **Google Safe Browsing API**. Features a neon green glowing UI, Matrix-style video background, and real-time threat detection.

---

## 🚀 Features

- ✅ Real-time reputation checks via Google Safe Browsing API
- 🟢 Neon green hacker-style UI
- 🎥 Matrix-style flowing number video background
- 🧪 Built using pure HTML, CSS, and JavaScript
- 🔐 Flags sites as Safe ✅, Suspicious ⚠️, or Dangerous ❌

---

## 📁 Project Structure

```

reputation-checker/
├── index.html
├── styles.css (optional if using inline style)
├── script.js
├── matrix-bg.mp4  <-- your background video
└── README.md

````

---

## 🛠️ Setup & Usage

1. **Clone the repository**:
```
   git clone https://github.com/yourusername/reputation-checker.git
   cd reputation-checker
```

---

## 🔐 How to Use Google Safe Browsing API

1. Go to: [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Navigate to **APIs & Services > Library**
4. Search for and enable **Safe Browsing API**
5. Go to **APIs & Services > Credentials**
6. Click **"Create Credentials" > "API Key"**
7. Copy the key and paste it in your `script.js` file:

```javascript
const apiKey = "YOUR_API_KEY";
```

> ⚠️ Don't expose your API key in public deployments. Use a backend proxy for production.

---

## 📦 Technologies Used

* HTML5
* CSS3 (with glow effects & animations)
* JavaScript (ES6)
* Google Safe Browsing API

---

## 🧠 Future Improvements

* Secure backend API proxy
* History of checked URLs
* Progressive Web App (PWA) support
* Browser extension version
* Dark/light theme toggle

---

## 📸 Preview Screenshot

<img width="1260" height="908" alt="image" src="https://github.com/user-attachments/assets/748d69b6-35f0-4ee7-8f1e-370d2fdb36c7" />


---

## 📄 License

MIT License

---

> Developed with 💻 and ☕ by Darin Joy
