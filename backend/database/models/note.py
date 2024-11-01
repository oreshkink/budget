import datetime
from sqlalchemy import Column, Integer, String, DateTime

from database.database import Base


class Note(Base):
    __tablename__ = "note"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
