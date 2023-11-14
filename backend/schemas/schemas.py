from pydantic import BaseModel


class Category(BaseModel):
    id: int
    title: str

    class Config:
        orm_mode = True
