# ad-javascripts

A collection of JavaScript utilities for managing and bypassing adblock detection banner systems.

## Overview

This project provides tools and scripts to handle adblock detection and banner systems commonly found on websites. It includes methods to detect adblock implementations and provide workarounds for users who have ad blockers enabled.

## Features

- **Adblock Detection**: Identify when adblock extensions are active
- **Banner Management**: Handle and bypass adblock detection banners
- **Cross-browser Support**: Compatible with major browsers (Chrome, Firefox, Safari, Edge)
- **Lightweight**: Minimal dependencies and optimized for performance

## Installation

Clone the repository:

```bash
git clone https://github.com/VisibleSpawn/ad-javascripts.git
cd ad-javascripts
```

## Usage

Include the scripts in your HTML:

```html
<script src="path/to/script.js"></script>
```

### Basic Example

```javascript
// Detect if adblock is enabled
if (detectAdblock()) {
  // Show adblock banner or alternative content
  showAdblockBanner();
}
```

## Project Structure

```
ad-javascripts/
├── README.md
├── src/
│   ├── detection.js
│   ├── banners.js
│   └── utils.js
└── examples/
    └── index.html
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

These tools are provided for educational purposes. Use responsibly and in accordance with website terms of service and applicable laws.
