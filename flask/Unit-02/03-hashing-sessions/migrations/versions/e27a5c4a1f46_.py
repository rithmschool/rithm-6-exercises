"""empty message

Revision ID: e27a5c4a1f46
Revises: b4b0090943d7
Create Date: 2018-03-19 14:32:21.872751

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e27a5c4a1f46'
down_revision = 'b4b0090943d7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.Text(), nullable=True))
    op.add_column('users', sa.Column('password', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'username')
    op.drop_column('users', 'password')
    # ### end Alembic commands ###