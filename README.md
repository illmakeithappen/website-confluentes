# FastAPI + React Website

A modern web application with FastAPI backend and React frontend, ready for deployment on Render.

## Project Structure

```
.
├── backend/          # FastAPI backend
│   ├── main.py      # Main API application
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/         # React frontend  
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── render.yaml      # Render deployment config
```

## Local Development

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
python main.py
```

The API will be available at http://localhost:8000
API documentation at http://localhost:8000/docs

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

The app will be available at http://localhost:3000

### Using Docker Compose

```bash
docker-compose up
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check endpoint
- `GET /api/hello?name={name}` - Hello endpoint with optional name

## Deployment on Render

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Render will automatically detect the `render.yaml` configuration
4. Deploy both services (backend and frontend)

### Environment Variables

Backend:
- `ENV` - Environment (development/production)
- `PORT` - Port number (Render provides this)

Frontend:
- `REACT_APP_API_URL` - Backend API URL

## Technologies

- **Backend**: FastAPI, Uvicorn, Pydantic
- **Frontend**: React, TypeScript, Axios
- **Deployment**: Docker, Render
- **Styling**: CSS with gradient backgrounds and glassmorphism effects