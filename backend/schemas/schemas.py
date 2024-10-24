from pydantic import BaseModel


class NoteOut(BaseModel):
    id: int
    title: str


class NoteIn(BaseModel):
    title: str
