from pydantic import BaseModel


class CategoryOut(BaseModel):
    id: int
    title: str


class CategoryIn(BaseModel):
    title: str
