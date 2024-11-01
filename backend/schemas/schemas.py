from datetime import datetime
from pydantic import BaseModel


class NoteOut(BaseModel):
    id: int
    title: str
    created_at: datetime | None


class NoteIn(BaseModel):
    title: str
