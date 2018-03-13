"""empty message

Revision ID: bc8d7bad38b0
Revises: fb525b712b86
Create Date: 2018-03-12 16:01:41.277051

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bc8d7bad38b0'
down_revision = 'fb525b712b86'
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('sunsets', 'prettiness', new_column_name= "beauty")



def downgrade():
    op.alter_column('sunsets', 'beauty', new_column_name="prettiness")

