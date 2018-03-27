"""empty message

Revision ID: b4b0090943d7
Revises: c1f44404eb4e
Create Date: 2018-03-18 17:28:58.282717

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4b0090943d7'
down_revision = 'c1f44404eb4e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('msg_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['msg_id'], ['messages.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('message_tags',
    sa.Column('m_id', sa.Integer(), nullable=True),
    sa.Column('t_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['m_id'], ['messages.id'], ),
    sa.ForeignKeyConstraint(['t_id'], ['tags.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('message_tags')
    op.drop_table('tags')
    # ### end Alembic commands ###
