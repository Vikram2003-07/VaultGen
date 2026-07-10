# 🔐 VaultGen

### Deterministic Client-Side Password Generator
*A secure password vault generator that creates strong, unique passwords and accessible only with a Master Key*

---

## 🚀 Live Demo

Visit the live website: **[https://vault-gen.vercel.app](https://vault-gen.vercel.app)**

---

## 📸 Preview

![VaultGen Web Interface](https://github.com/Vikram2003-07/VaultGen/blob/969726fed5010656fa059cc999b1273a1a7a5925/Screenshot%202025-12-13%20011928.png)

---

## ✨ Features

- 🔑 **Deterministic Passwords** — Same master key always generates the same password
- 🛡️ **Client-Side Only** — Your master key never leaves your browser
- 🔒 **SHA-256 Hashing** — Industry-standard cryptographic hashing
- 🎨 **Beautiful Dark UI** — Modern, sleek interface with glowing effects
- 📱 **Responsive Design** — Works perfectly on all devices
- ⚡ **Lightweight** — Fast and efficient, runs entirely in the browser
- 🔄 **Easy Copy** — One-click copy to clipboard with visual feedback

---

## 🧠 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    VaultGen Workflow                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌──────────┐  │
│   │  Master Key  │ ──▶ |   SHA-256    │ ──▶  │ Password │  │
│   │  (Your Input)│      │    Hash      │      │ Output   │  │
│   └──────────────┘      └──────────────┘      └──────────┘  │
│                                                             │
│   ✓ Same input → Same output                                │
│   ✓ No storage required                                     │
│   ✓ 100% client-side                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

1. **Enter** your master key (a memorable password or passphrase)
2. **Click** "Generate" 
3. **VaultGen** computes a SHA-256 hash of your master key
4. **Extract** the first 26 characters as your strong password
5. **Copy** and use it anywhere!

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js) | React Framework |
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react) | UI Library |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css) | Styling |
| ![SHA-256](https://img.shields.io/badge/-SHA--256-Crypto-yellow?style=flat-square) | Hashing Algorithm |
| ![Web Crypto API](https://img.shields.io/badge/-Web_Crypto_API-333333?style=flat-square) | Browser Crypto |

</div>

---

## 📦 Installation

### Prerequisites

- **Node.js** v18 or later — [Download](https://nodejs.org/)
- **Git** — [Download](https://git-scm.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Vikram2003-07/VaultGen.git

# 2. Navigate to the project directory
cd VaultGen

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser and visit: **`http://localhost:3000`**

---

## 💻 Usage Tips

- 🗝️ **Use a strong master key** — The longer and more unique, the better
- 🏷️ **Add site identifiers** — Include the site name in your master key (e.g., `mykey:github.com`) for per-site passwords
- 🔄 **No need to remember** — Just remember your master key, and you can regenerate any password
- ⚠️ **Don't lose your master key** — Without it, you cannot regenerate your passwords

---

## 🔒 Security Notes

<div align="center">

| ✓ Safe | ✗ Not Safe |
|--------|------------|
| Master key never stored | Using common words as master key |
| Client-side only | Sharing your master key |
| SHA-256 hashing | Using the same master key everywhere without modification |
| Browser-based encryption | Not changing master key for important accounts |

</div>

> **Important:** Treat your master key like your most sensitive password. If compromised, all derived passwords are compromised.

---

## 📁 Project Structure

```
VaultGen/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.jsx      # Root layout
│   └── page.jsx        # Main page component
├── public/             # Static assets
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── README.md          # This file
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b my-feature`
3. **Commit** your changes: `git commit -m "Add feature"`
4. **Push** to the branch: `git push origin my-feature`
5. **Open** a Pull Request

Please keep changes focused and include appropriate tests.

---

## ❓ Troubleshooting

- **Build errors?** — Ensure Node.js v18+ is installed
- **UI not updating?** — Try restarting the development server
- **Found a bug?** — Open an issue with reproduction steps

---

## 📄 License

All Rights Reserved.

---

## 👤 Maintainer

**Vikram2003-07**  
GitHub: [https://github.com/Vikram2003-07](https://github.com/Vikram2003-07)

---

<div align="center">

### ⭐ Show your support!

If you find VaultGen useful, please consider giving it a star on GitHub!

*Built with ❤️ using Next.js and Tailwind CSS*

</div>
