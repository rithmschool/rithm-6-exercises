"""replaced with prettiness with beauty

Revision ID: 2bef4aba4df4
Revises: d8bcb41083c6
Create Date: 2018-03-12 16:38:11.777190

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bef4aba4df4'
down_revision = 'd8bcb41083c6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('sunsets', 'prettiness', new_column_name='beauty')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('sunsets', 'beauty', new_column_name='prettiness')
    # ### end Alembic commands ###
