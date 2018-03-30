"""adding location column

Revision ID: b660d20fc69b
Revises: 6c93d8c78c6d
Create Date: 2018-03-12 15:04:04.231989

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b660d20fc69b'
down_revision = '6c93d8c78c6d'
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