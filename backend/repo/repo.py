from sqlalchemy.orm import Session

from database.models import Category


def get_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Category).offset(skip).limit(limit).all()
