"""adding about_me column

Revision ID: 98ce06c2791f
Revises: e6d6750361b9
Create Date: 2018-03-15 22:07:28.681327

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '98ce06c2791f'
down_revision = 'e6d6750361b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('about_me', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'about_me')
    # ### end Alembic commands ###