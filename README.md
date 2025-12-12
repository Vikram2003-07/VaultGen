
# VaultGen

VaultGen is a deterministic, client-side password generator that uses SHA-256 to generate strong passwords from a master key. The same master key always produces the same password, so you can regenerate passwords without storing them anywhere.

## How It Works

1. Enter a master-key (a memorable but strong password/passphrase) in the VaultGen input field.
2. Click "Generate".
3. VaultGen computes a SHA-256 hash of the master key and derives a strong password deterministically from that hash.
4. The same master key always produces the same password — no password is stored anywhere.

Note: VaultGen is stateless — the master key never leaves your browser and is never persisted.

#
![VaultGen Web Interface](https://github.com/Vikram2003-07/VaultGen/blob/e511fc6aacc5d56a817109c47ff5f3cdd638b596/Screenshot%202025-12-13%20011928.png)

## Key Features

- Deterministic password generation (same master key → same password)
- Strong password generation using SHA-256
- Client-side only — your master key is never stored or transmitted
- Clean, modern dark-themed UI
- Lightweight Next.js application (runs completely in the browser)
- Simple to run locally and easy to deploy

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind
- Hashing: SHA-256
- Runtime: Node.js


## Prerequisites

Please make sure that these Softwares are installed in your System.
- Node.js v18 or later — https://nodejs.org/
- Git — https://git-scm.com/


## Installation of Project

1. Clone the repository
   ```bash
   git clone https://github.com/Vikram2003-07/VaultGen.git
   ```

2. Navigate into the project
   ```bash
   cd VaultGen
   ```

3. Install dependencies
   ```bash
   npm install
   ```

## Run Locally (Development)

Start the development server:
```bash
npm run dev
```

Open your browser and visit:
```
http://localhost:3000
```

## Usage Tips

- Use a long, unique master key (passphrase) for higher security.
- Consider adding an account/site identifier as part of the master key (e.g., "my-master-key:github.com") if you want per-site deterministic passwords while still deriving everything from a single memorized secret.
- If you lose your master key, you will not be able to regenerate your passwords.

## Security Notes

- The master key is never stored or sent to any server.
- Passwords are generated using SHA-256; security depends on the secrecy and strength of your master key.
- Treat the master key like a primary secret — if it is compromised, all derived passwords are compromised.
- Consider using a password manager for storing site-specific generated passwords if needed.

## Project Structure

```
├── app / pages        # Routes & UI
├── components         # Reusable components
├── public             # Static assets
├── screenshots        # App screenshots
├── styles             # Styling files
├── package.json
└── README.md
```

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin my-feature`
5. Open a Pull Request

Please keep changes small and focused. Include tests and update documentation where appropriate.

## Troubleshooting

- If you see build errors, ensure you are running Node.js v18+.
- If the UI does not update after changes, try restarting the dev server.
- Open an issue on the repository with steps to reproduce if you encounter a bug.

## License

All Rights Reserved.

## Maintainer

Vikram2003-07  
GitHub: https://github.com/Vikram2003-07
