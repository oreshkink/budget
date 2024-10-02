from typing import List

from sqlalchemy.orm import Session

from database.models import Category


def get_categories(db: Session, skip: int = 0, limit: int = 100) -> List[Category]:
    return db.query(Category).offset(skip).limit(limit).all()


def create_category(db: Session, title: str) -> Category:
    category = Category(title=title)

    db.add(category)
    db.commit()
    db.refresh(category)

    return category
