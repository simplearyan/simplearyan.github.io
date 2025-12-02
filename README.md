# SimpleAryan

A minimal, modern, and content-focused educational platform built for speed and readability.

## 🚀 Features

- **Performance First**: Built with [Astro](https://astro.build) for lightning-fast page loads.
- **Zen Mode**: A distraction-free reading experience that hides all UI elements.
- **PWA Ready**: Installable on mobile and desktop for an app-like experience.
- **Dark/Light Mode**: Seamless theme switching with system preference detection.
- **MDX Support**: Write content in Markdown with support for React components, Math (KaTeX), and Mermaid diagrams.
- **Custom Design**: Hand-crafted CSS with a focus on typography and whitespace (No heavy frameworks).
- **Responsive**: Optimized for all screen sizes, from mobile phones to large desktops.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: Vanilla CSS (Variables, Flexbox, Grid)
- **Content**: MDX (Markdown + JSX)
- **Icons**: SVG (Feather Icons / Custom)
- **Deployment**: GitHub Pages

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/SimpleAryan.git
    cd SimpleAryan
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:4321`.

## 🚀 Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

1.  Push your changes to the `main` or `astro` branch.
2.  The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3.  Ensure "GitHub Actions" is selected as the source in your repository's **Settings > Pages**.

## 📄 License

This project is licensed under the MIT License.
