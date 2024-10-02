from typing import List

from fastapi import Depends, FastAPI
from fastapi.security import HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import database
from repo import repo
from schemas import schemas

app = FastAPI()
security = HTTPBearer()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/categories/", response_model=List[schemas.CategoryOut])
def read_categories(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return repo.get_categories(db, skip=skip, limit=limit)


@app.post("/categories/", response_model=schemas.CategoryOut)
def create_category(
    params: schemas.CategoryIn,
    db: Session = Depends(get_db),
):
    category = repo.create_category(db, params.title)

    return category
