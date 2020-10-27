# coding=utf-8
from enum import Enum
from sqlalchemy import Column, String, Integer, ForeignKey
from marshmallow import Schema, fields
from datetime import datetime

from .entity import Entity, EntitySchema, Base, Session


class Country(Entity, Base):
    __tablename__ = 'countries'

    name = Column(String, nullable=False)
    last_updated_by = Column(Integer, ForeignKey('users.id'), nullable=False)

    def __init__(self, name, created_by):
        Entity.__init__(self)
        self.name = name
        self.last_updated_by = created_by

    def create(self, session):

        session.add(self)
        session.commit()

        return self

    def update(self, session, updated_by, **kwargs):
        self.updated_at = datetime.now()
        self.last_updated_by = updated_by

        for key, value in kwargs.items():
            if hasattr(self, key):
                setattr(self, key, value)

        session.add(self)
        session.commit()


class CountrySchema(EntitySchema):
    name = fields.String()


class CountryInsertSchema(Schema):
    name = fields.String()
    created_by = fields.Integer()


class CountryAttributes(Enum):
    NAME = 'name'

    def __str__(self):
        return str(self.value)
