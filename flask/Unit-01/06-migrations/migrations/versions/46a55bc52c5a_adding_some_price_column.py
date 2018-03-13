"""adding some price column

Revision ID: 46a55bc52c5a
Revises: b215be674772
Create Date: 2018-03-12 15:54:31.876966

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '46a55bc52c5a'
down_revision = 'b215be674772'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('meats', sa.Column('price', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('meats', 'price')
    # ### end Alembic commands ###
