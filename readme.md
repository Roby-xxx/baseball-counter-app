# ⚾ BCA - Baseball Counter App

**BCA (Baseball Counter App)** It’s a lightweight, fast, and installable web app (PWA) designed for umpires, coaches, scorekeepers, and baseball fans. It makes it easy to track pitch counts, the count at the plate, outs, innings, and the scoreboard during games **and it works completely offline**.

🔗 **Try the app online:** [https://roby-xxx.github.io/baseball-counter-app](https://roby-xxx.github.io/baseball-counter-app)

---

## ✨ Key Features

* **Scoreboard:** Inning-by-inning scoreboard with automatic totals and extra innings.
* **Pitch Counter:** Pitch and strike counter with Strike Rate calculation.
* **Simple Strike Counter:** Balls, strikes, outs, and innings tracking with manual reset (just like a physical umpire indicator).
* **Advanced Strike Counter:** Automatic updates: on the fourth ball, resets the count; on the third strike, resets the count and adds an out; on the third out, resets all counts and advances a half-inning. In all other cases, NEXT BATTER resets the count.
* **Modalità Chiara e Scura (Light/Dark Mode):** Interface optimized for maximum readability both in bright sunlight on the field and in low-light conditions.
* **Modalità Sempre Attiva (Stay awake):** Keeps the device screen awake, preventing it from turning off due to inactivity (indicated by the green LED in the top-right corner).
* **100% Offline (PWA):** Thanks to the Service Worker and locally cached assets, the app keeps working even in airplane mode or without an internet connection on the field.

---

## 📱 How to install the app on your phone

Skip the official app stores—install **BCA** directly from your phone's browser:

### On Android (Chrome)
1. Open the link app in Chrome.
2. Tap the **three dots** in the top-right corner.
3. Select **Install app** or **Add to Home screen**.

### On iPhone / iPad (Safari)
1. Open the link app in Safari.
2. Tap the **Share**.
3. Select **Add to Home Screen**.

---

## 🛠️ Tech Stack

* **HTML5 & JavaScript Vanilla:** Lightweight, responsive architecture with zero heavy dependencies.
* **Tailwind CSS (Locale):** Modern, responsive styling bundled locally to ensure offline functionality.
* **Font Locali (Inter):** Clean, high-legibility typography with tabular numbers, bundled locally to ensure offline functionality.
* **PWA (Manifest + Service Worker):** Local caching for offline use and native installation on mobile devices.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and customize it for your games!
