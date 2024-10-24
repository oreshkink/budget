"""Change project idea

Revision ID: 93566f5f48a9
Revises: 37b4b11acc2b
Create Date: 2024-10-24 22:31:30.228885

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '93566f5f48a9'
down_revision: Union[str, None] = '37b4b11acc2b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('note',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_note_id'), 'note', ['id'], unique=False)
    op.drop_index('ix_category_id', table_name='category')
    op.drop_table('category')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='category_pkey'),
    sa.UniqueConstraint('title', name='category_title_key')
    )
    op.create_index('ix_category_id', 'category', ['id'], unique=False)
    op.drop_index(op.f('ix_note_id'), table_name='note')
    op.drop_table('note')
    # ### end Alembic commands ###
