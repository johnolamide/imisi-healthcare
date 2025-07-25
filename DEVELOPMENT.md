# Development Guide

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com-johnolamide:johnolamide/imisi-healthcare.git
cd imisi-healthcare
```

2. Switch to the dev branch:
```bash
git checkout dev
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (WaitlistModal, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Landing page sections
├── pages/               # Page components (Home)
├── hooks/               # Custom React hooks (for future use)
├── utils/               # Utility functions (for future use)
├── assets/              # Images, fonts, icons
├── styles/              # Global styles and Tailwind config
├── contexts/            # React contexts (for future auth)
├── services/            # API services (for future backend)
└── types/               # TypeScript types (for future use)
```

## Key Features

### Responsive Design
- Mobile-first approach
- Responsive breakpoints for all devices
- Touch-friendly interactions

### Smooth Animations
- Framer Motion for page transitions
- Scroll-triggered animations
- Interactive hover effects
- Loading animations

### Modern Tech Stack
- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **TailwindCSS** for utility-first styling
- **React Router** for client-side routing
- **Framer Motion** for animations
- **Satoshi font** for typography

### Component Architecture
- Modular and reusable components
- Separated concerns (layout, sections, common)
- Prepared for future dashboard integration
- Easy to extend and maintain

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages

## Future Enhancements

### Dashboard Integration
The current structure is prepared for adding:
- User authentication
- Dashboard pages
- User management
- API integrations

### Backend Integration
Ready for connecting to:
- REST APIs
- GraphQL endpoints
- Authentication services
- Database connections

## Contributing

1. Create a new branch from `dev`
2. Make your changes
3. Test thoroughly
4. Submit a pull request to `dev` branch

## Branch Structure

- `main`: Production-ready code with documentation
- `dev`: Development branch with the React application

## Support

For questions or issues, contact:
- Email: imisihealthcare@gmail.com
- GitHub Issues: [Create an issue](https://github.com/johnolamide/imisi-healthcare/issues)
