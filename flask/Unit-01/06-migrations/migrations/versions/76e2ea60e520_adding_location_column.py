"""adding location column

Revision ID: 76e2ea60e520
Revises: 11a102988ccb
Create Date: 2018-03-12 15:09:21.414963

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '76e2ea60e520'
down_revision = '11a102988ccb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pizza', sa.Column('location', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pizza', 'location')
    # ### end Alembic commands ###