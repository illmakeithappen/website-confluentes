# CLAUDE.md - Project Assistant Instructions

## Project Overview
Confluentes - A modern real estate and property services website built with FastAPI backend and React TypeScript frontend. Features a sophisticated UI with animations, custom cursor, and responsive design.

## Project Structure
```
.
├── backend/              # FastAPI backend
│   ├── main.py          # Main API application
│   ├── requirements.txt # Python dependencies
│   ├── Dockerfile       # Docker configuration
│   └── venv/            # Python virtual environment
├── frontend/            # React TypeScript frontend
│   ├── src/
│   │   ├── App.tsx      # Main React component with routing
│   │   ├── App.css      # Global application styles
│   │   ├── index.css    # Root styles and CSS variables
│   │   ├── assets/      # Static assets
│   │   │   └── confluentes-logo.svg
│   │   └── components/  # React components
│   │       ├── Navigation.tsx    # Navigation bar component
│   │       ├── Hero.tsx          # Hero section component
│   │       ├── About.tsx         # About section component
│   │       ├── Services.tsx      # Services section component
│   │       ├── Properties.tsx    # Properties section component
│   │       ├── Contact.tsx       # Contact section component
│   │       ├── Footer.tsx        # Footer component
│   │       ├── LoadingScreen.tsx # Loading animation component
│   │       ├── CustomCursor.tsx  # Custom cursor effect
│   │       ├── PageTransition.tsx # Page transition animations
│   │       └── ScrollToTop.tsx   # Scroll to top utility
│   ├── package.json     # Node dependencies
│   └── Dockerfile       # Docker configuration
├── docker-compose.yml   # Local development with Docker
└── render.yaml         # Render deployment configuration
```

## Tech Stack
- **Backend**: FastAPI, Uvicorn, Pydantic, Python 3.11
- **Frontend**: React 18, TypeScript, React Router DOM, Axios
- **Styling**: Custom CSS with animations, gradients, glassmorphism, and custom cursor
- **UI Features**: Loading animations, page transitions, smooth scrolling, responsive design
- **Deployment**: Docker, Render

## Development Commands

### Backend
```bash
cd backend
pip3 install -r requirements.txt  # Install dependencies
python3 main.py  # Run server on http://localhost:8000
```

API documentation automatically available at http://localhost:8000/docs

### Frontend
```bash
cd frontend
npm install  # Install dependencies
npm start    # Run dev server on http://localhost:3000
npm run build  # Build for production
```

### Docker Development
```bash
docker-compose up  # Run both services with Docker
```
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Testing & Validation
Before committing:
```bash
# Backend
cd backend
python3 -m pytest  # If tests exist
python3 -m mypy main.py  # Type checking if configured

# Frontend
cd frontend
npm run test  # Run tests
npm run build  # Ensure build works
```

## API Endpoints
- `GET /` - Root endpoint with API information
- `GET /health` - Health check endpoint
- `GET /api/hello?name={name}` - Greeting endpoint with optional name parameter
- `GET /docs` - Swagger/OpenAPI documentation (auto-generated)

## Environment Variables

### Backend (.env)
```
ENV=development|production
PORT=8000  # Render provides this automatically
API_KEY=your-api-key  # If needed
DATABASE_URL=postgresql://...  # If using database
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000  # Backend API URL
```

## Git Repository Setup

### Creating and pushing to a new remote repository
1. **Create remote repository** (choose one method):
   ```bash
   # Using GitHub CLI
   gh repo create website-confluentes --public
   
   # Or create manually on GitHub/GitLab/Bitbucket
   # (Don't initialize with README, .gitignore, or license)
   ```

2. **Add remote origin**:
   ```bash
   # For HTTPS
   git remote add origin https://github.com/YOUR_USERNAME/website-confluentes.git
   
   # For SSH
   git remote add origin git@github.com:YOUR_USERNAME/website-confluentes.git
   ```

3. **Push to remote**:
   ```bash
   git push -u origin main
   ```

## Deployment to Render
1. Push code to GitHub
2. Connect GitHub repo to Render
3. Render will automatically detect the `render.yaml` configuration
4. Deploy both services (backend and frontend)
5. Services will be deployed automatically on subsequent pushes

### Render Configuration
The `render.yaml` file configures:
- Backend service (Web Service)
- Frontend service (Static Site)
- Environment variables
- Build and start commands

## Important Notes
- Use `python3` and `pip3` commands (not `python` or `pip`) on macOS
- CORS is configured for localhost:3000 and localhost:5173
- Backend runs on port 8000, frontend on port 3000
- Docker images are optimized for production
- Frontend uses Nginx for production serving
- API documentation auto-generated at /docs endpoint
- Virtual environment (venv) is optional for local development

## Component Architecture

### Key Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Landing section with animated text and call-to-action
- **About**: Company information and mission statement
- **Services**: Service offerings with card-based layout
- **Properties**: Property showcase section
- **Contact**: Contact form and company information
- **Footer**: Site footer with links and copyright
- **LoadingScreen**: Initial loading animation with logo
- **CustomCursor**: Interactive custom cursor that follows mouse
- **PageTransition**: Smooth transitions between route changes
- **ScrollToTop**: Utility to reset scroll position on navigation

## Common Tasks

### Adding a new API endpoint
1. Add the route in `backend/main.py`
2. Create Pydantic models if needed
3. Update CORS if required
4. Test with `curl` or through `/docs`

### Adding a new React component
1. Create component files in `frontend/src/components/`
2. Create matching CSS file for styles
3. Import in App.tsx or relevant parent component
4. Add TypeScript interfaces/types as needed
5. Follow existing component patterns for consistency

### Updating dependencies
```bash
# Backend
cd backend && pip3 freeze > requirements.txt

# Frontend
cd frontend && npm update
```

## Troubleshooting
- **Backend won't start**: Check Python version (3.11+) and venv activation
- **Frontend won't start**: Clear node_modules and reinstall (`rm -rf node_modules && npm install`)
- **CORS errors**: Check allowed origins in backend/main.py
- **Docker fails**: Ensure Docker daemon is running
- **Port conflicts**: Check if ports 3000 or 8000 are already in use

## Project Conventions
- Use TypeScript for all frontend code
- Use Pydantic for API validation
- Follow REST conventions for endpoints
- Keep sensitive data in .env files (never commit these)
- Test locally before deploying
- Use meaningful commit messages
- Document API changes in this file

## CSS Architecture
- Each component has its own CSS file
- Global styles defined in index.css and App.css
- CSS variables for consistent theming (defined in index.css)
- Responsive design with mobile-first approach
- Animation and transition utilities
- Custom properties for colors, spacing, and typography