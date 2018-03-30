"""create quality meats all over

Revision ID: b215be674772
Revises: 
Create Date: 2018-03-12 14:53:20.548458

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b215be674772'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('meats', sa.Column('quality', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('meats', 'quality')
    # ### end Alembic commands ###
