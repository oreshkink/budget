from sqlalchemy import Column, Integer, String

from database.database import Base


class Note(Base):
    __tablename__ = "note"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
