# Package Json Utilities

Utilities for reading `package.json` files.

## Installation

```bash
npm install --save @gmjs/package-json
```

## Functions

- `readPackageJsonAsync(packageJsonDirectory: string): Promise<PackageJson>`
  - Description - Reads and parses the `package.json` file in the given directory (asynchronously).
  - Parameters
    - `packageJsonDirectory` - The directory containing the `package.json` file.
- `readPackageJsonSync(packageJsonDirectory: string): PackageJson`
  - Description - Reads and parses the `package.json` file in the given directory (synchronously).
  - Parameters
    - `packageJsonDirectory` - The directory containing the `package.json` file.
