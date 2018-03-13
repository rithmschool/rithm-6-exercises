"""not nullable

Revision ID: 99c487d4a887
Revises: 46a55bc52c5a
Create Date: 2018-03-12 15:58:16.917015

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '99c487d4a887'
down_revision = '46a55bc52c5a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('meats', 'url',
               existing_type=sa.TEXT(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('meats', 'url',
               existing_type=sa.TEXT(),
               nullable=True)
    # ### end Alembic commands ###
