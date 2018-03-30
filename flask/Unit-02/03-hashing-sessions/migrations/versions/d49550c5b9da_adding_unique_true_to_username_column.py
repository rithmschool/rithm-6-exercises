"""adding unique=true to username column

Revision ID: d49550c5b9da
Revises: 00e6cb317720
Create Date: 2018-03-19 15:56:10.864180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd49550c5b9da'
down_revision = '00e6cb317720'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'username',
               existing_type=sa.TEXT(),
               nullable=False)
    op.create_unique_constraint(None, 'users', ['username'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.alter_column('users', 'username',
               existing_type=sa.TEXT(),
               nullable=True)
    # ### end Alembic commands ###
