# VaultGen

VaultGen is a small, opinionated tool to securely generate, store, and manage secrets (passwords, API keys, tokens) for personal projects and small teams. It provides a simple CLI and a lightweight library interface to create encrypted vaults, generate strong secrets, and retrieve them safely.

Key goals:
- Strong, configurable secret generation
- Local encrypted vault storage with optional remote sync
- Simple CLI and library API for integration in scripts and CI pipelines
- Clear auditability and easy backup/restore

Features
- Generate secure passwords and tokens with configurable length, character sets, and patterns
- Create encrypted vault files (AES-256/GCM) protected by a master passphrase
- Import/export vault entries in CSV/JSON formats
- Search and retrieve secrets from the CLI
- Optional integrations (examples): GitHub Actions, Docker

Quick Start
1. Clone the repository

   git clone https://github.com/Vikram2003-07/VaultGen.git
   cd VaultGen

2. Build or install

   - If this project has a language-specific build, follow the repo-specific instructions (e.g., make, npm install, go build). Replace the commands below with your project's build tools.

   make build

3. Initialize a vault

   ./vaultgen init --vault-file ~/.vaultgen/vault.dat

   You will be prompted to create a master passphrase. Keep it safe — this is required to decrypt your vault.

Generating a secret

   ./vaultgen generate --name "github.com/myuser/api" --length 32 --symbols --digits
   # The generated secret will be stored in your vault and printed to stdout if --show is used.

Listing and retrieving secrets

   ./vaultgen list
   ./vaultgen get --name "github.com/myuser/api" --show

Configuration

VaultGen stores vault files at a path you provide during init. By default, it uses ~/.vaultgen/vault.dat. The following environment variables can be used to override defaults:

- VAULTGEN_VAULT_FILE - path to the vault file
- VAULTGEN_CACHE_TTL - local decrypted cache TTL (e.g., 60s) for interactive use

Security notes
- The master passphrase is not stored. If you lose it, you cannot recover encrypted data.
- Vault files are encrypted with AES-256-GCM using a key derived from your passphrase using a strong KDF (scrypt/Argon2).
- For automated use, prefer using OS-native secret stores or a dedicated service rather than embedding the master passphrase in CI variables.

Examples
- Generate a 40-character password and copy to clipboard (macOS):

   ./vaultgen generate --name example.com --length 40 --copy

- Export vault entries to JSON:

   ./vaultgen export --format json --out backup.json

Library usage

The project exposes a minimal library API to integrate VaultGen in other tools. Example (pseudo-code):

```pseudo
import vaultgen
v = vaultgen.open(vault_path, passphrase)
secret = v.generate(name="service/api", length=24)
```

Contributing
- Open issues and PRs are welcome. Please follow the repo's contributing guidelines if present.
- Run tests before submitting changes: make test

Roadmap / TODO
- Add remote sync support (encrypted sync to S3/Blob storage)
- Add secure hardware-backed key storage (e.g., macOS Keychain, Windows DPAPI, Linux Secret Service)
- Provide official Docker image

License
- Add your preferred license (MIT, Apache-2.0, etc.) to LICENSE file. If no license file exists, the project is "All rights reserved" by default.

Maintainers
- Vikram2003-07

Acknowledgements
- Inspired by other local vault tools and password managers. Replace this section with project-specific credits.
