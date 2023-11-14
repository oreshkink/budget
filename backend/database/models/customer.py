from sqlalchemy import Column, Integer, String

from database.database import Base


class Customer(Base):
    __tablename__ = "customer"

    id = Column(Integer, primary_key=True, index=True)
    login = Column(String, unique=True)
