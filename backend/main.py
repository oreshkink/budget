import secrets
from typing import Annotated, List

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from database import database
from repo import repo
from schemas import schemas

app = FastAPI()
security = HTTPBearer()


def get_customer_login(credentials: Annotated[HTTPAuthorizationCredentials, Depends(security)]):
    return credentials.credentials


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/categories/", response_model=List[schemas.Category])
def read_categories(
    customer_login: Annotated[str, Depends(get_customer_login)],
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return repo.get_categories(db, skip=skip, limit=limit)
