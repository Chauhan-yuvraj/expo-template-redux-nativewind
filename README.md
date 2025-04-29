<h1 align="center">📱 Expo Template – Redux + NativeWind + TypeScript</h1>

<p align="center">
  A modern, scalable starter template for Expo projects using <strong>TypeScript</strong>, <strong>Redux Toolkit</strong>, and <strong>NativeWind</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/chauhan-yuvraj/expo-template-redux-nativewind" alt="license">
  <img src="https://img.shields.io/github/stars/chauhan-yuvraj/expo-template-redux-nativewind?style=social" alt="stars">
</p>

---

## 🚀 Features

- ⚛️ **Expo SDK** — fast and reliable mobile development
- 🔷 **TypeScript** — strong typing support
- 🛠 **Redux Toolkit** — global state management
- 🌬 **NativeWind** — Tailwind CSS styling for React Native
- 🌐 **Expo Router** — file-based navigation

---

## 🧱 Tech Stack

| Name               | Description                             |
|--------------------|-----------------------------------------|
| [Expo](https://expo.dev/) | Framework for universal React apps |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Simplified Redux state logic |
| [NativeWind](https://www.nativewind.dev/) | Tailwind CSS for React Native |
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript |
| [Expo Router](https://expo.github.io/router/docs) | Navigation via file system |

---

## 📦 Getting Started

### 1. Create a New Project

```bash
npx create-expo-app my-app --template github:chauhan-yuvraj/expo-template-redux-nativewind
```
### 2. Install Dependencies
```bash
cd my-app
npm install
```
## 🧰 Project Structure

```bash
my-app/
├── app/                  # Routes (Expo Router)
├── src/
│   ├── store/            # Redux slices and store
│   └── hooks.ts          # Typed Redux hooks
├── global.css            # Tailwind CSS styles
├── tailwind.config.js    # Tailwind configuration
├── App.tsx               # App entry point

```
## 🎨 Tailwind Setup

```bash
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### global.css
``` bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📄 License
This project is licensed under the MIT License.

## 🤝 Contributing
Pull requests, issues, and suggestions are welcome!

## ⭐️ Show Your Support
If you found this template helpful, consider giving it a ⭐️ on GitHub.

### Happy coding! 💙



