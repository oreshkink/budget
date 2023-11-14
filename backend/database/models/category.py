from sqlalchemy import Column, Integer, String

from database.database import Base


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True)
