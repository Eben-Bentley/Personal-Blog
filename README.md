# Personal Portfolio Website

Responsive personal portfolio website built with Astro and Tailwind CSS.

## Features

- **Theme Switching**: Choose from 4 color themes (Blue, Green, Orange, Mono) with light/dark mode support
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Tech Stack Display**: Interactive tech icons with hover tooltips
- **Projects Showcase**: Featured projects with GitHub links

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.16.6
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Language**: TypeScript
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```


## Project Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes
│   └── styles/         # Global CSS with Tailwind directives
├── public/             # Static assets
└── package.json
```

## Customization

### Updating Content

Edit `src/pages/index.astro` to update:
- Personal information
- Tech stack
- Projects
- Social links

### Changing Themes

Theme colors are defined in `src/styles/global.css` using CSS custom properties. Each theme has light and dark mode variants.

### Adding Projects

Add new projects to the `projects` array in `src/pages/index.astro`:

```javascript
{
  name: 'Project Name',
  description: 'Project description',
  githubUrl: 'https://github.com/username/repo',
  technologies: [
    { name: 'Tech', icon: 'icon-url' }
  ]
}
```

## License

MIT
