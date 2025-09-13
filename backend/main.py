from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

app = FastAPI(title="Website API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class HealthResponse(BaseModel):
    status: str
    timestamp: datetime
    version: str

class MessageResponse(BaseModel):
    message: str
    data: Optional[dict] = None

# Routes
@app.get("/", response_model=MessageResponse)
async def root():
    """Root endpoint"""
    return MessageResponse(
        message="Welcome to the API",
        data={"endpoints": ["/health", "/api/hello", "/docs"]}
    )

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now(),
        version="1.0.0"
    )

@app.get("/api/hello", response_model=MessageResponse)
async def hello(name: Optional[str] = "World"):
    """Hello endpoint with optional name parameter"""
    return MessageResponse(
        message=f"Hello, {name}!",
        data={"timestamp": datetime.now().isoformat()}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)