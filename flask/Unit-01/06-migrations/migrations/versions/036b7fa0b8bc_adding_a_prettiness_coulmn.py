"""adding a prettiness coulmn

Revision ID: 036b7fa0b8bc
Revises: 76e2ea60e520
Create Date: 2018-03-12 15:27:08.949092

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '036b7fa0b8bc'
down_revision = '76e2ea60e520'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pizza', sa.Column('prettiness', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pizza', 'prettiness')
    # ### end Alembic commands ###
