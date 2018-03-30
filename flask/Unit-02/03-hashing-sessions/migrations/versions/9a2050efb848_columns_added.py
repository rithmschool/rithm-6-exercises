"""columns added 

Revision ID: 9a2050efb848
Revises: 550ff38fd9cc
Create Date: 2018-03-20 16:18:18.002768

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a2050efb848'
down_revision = '550ff38fd9cc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('password', sa.Text(), nullable=False))
    op.add_column('users', sa.Column('username', sa.Text(), nullable=False))
    op.create_unique_constraint(None, 'users', ['username'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.drop_column('users', 'username')
    op.drop_column('users', 'password')
    # ### end Alembic commands ###
