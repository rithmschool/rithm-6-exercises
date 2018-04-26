"""added location

Revision ID: 2246b0cf66be
Revises: e25c4c339e0b
Create Date: 2018-03-12 19:26:24.303052

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2246b0cf66be'
down_revision = 'e25c4c339e0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('sunsets', sa.Column('location', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sunsets', 'location')
    # ### end Alembic commands ###