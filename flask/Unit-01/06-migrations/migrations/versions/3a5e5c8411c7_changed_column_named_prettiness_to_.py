"""changed column named \'prettiness\' to \'beauty\'

Revision ID: 3a5e5c8411c7
Revises: 65dcfd23fa81
Create Date: 2018-03-12 14:23:27.955157

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3a5e5c8411c7'
down_revision = '65dcfd23fa81'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('sunsets', 'prettiness', new_column_name='beauty', existing_type=sa.TEXT(),
     type_=sa.Integer(), existing_nullable=True, postresql_using='beauty::integer' )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.add_column('sunsets', sa.Column('prettiness', sa.TEXT(), autoincrement=False, nullable=True))
    op.alter_column('prettiness', 'sunsets', new_column_name='prettiness', existing_type=sa.INTEGER(),
     type_=sa.TEXT(), existing_nullable=False )
    # op.drop_column('sunsets', 'beauty')
    # ### end Alembic commands ###