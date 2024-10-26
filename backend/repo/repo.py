from typing import List

from sqlalchemy.orm import Session

from database.models import Note


def get_notes(db: Session, skip: int = 0, limit: int = 100) -> List[Note]:
    return db.query(Note).offset(skip).limit(limit).all()


def create_note(db: Session, title: str) -> Note:
    note = Note(title=title)

    db.add(note)
    db.commit()
    db.refresh(note)

    return note


def remove_note(db: Session, id: int):
    note = db.get(Note, id)
    db.delete(note)
    db.commit()
