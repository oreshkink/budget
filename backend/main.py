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


@app.get("/notes/", response_model=List[schemas.NoteOut])
def read_notes(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return repo.get_notes(db, skip=skip, limit=limit)


@app.post("/notes/", response_model=schemas.NoteOut)
def create_note(
    params: schemas.NoteIn,
    db: Session = Depends(get_db),
):
    note = repo.create_note(db, params.title)

    return note
