"""adding prettiness field

Revision ID: 8ed12ae8043f
Revises: 204586704dff
Create Date: 2018-03-12 18:30:35.449712

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8ed12ae8043f'
down_revision = '204586704dff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('sunsets', sa.Column('prettiness', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sunsets', 'prettiness')
    # ### end Alembic commands ###
