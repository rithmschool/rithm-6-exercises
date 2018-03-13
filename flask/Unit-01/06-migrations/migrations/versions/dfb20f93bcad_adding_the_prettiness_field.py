"""adding the prettiness field

Revision ID: dfb20f93bcad
Revises: dd1f8c21579b
Create Date: 2018-03-12 18:32:13.286721

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dfb20f93bcad'
down_revision = 'dd1f8c21579b'
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
