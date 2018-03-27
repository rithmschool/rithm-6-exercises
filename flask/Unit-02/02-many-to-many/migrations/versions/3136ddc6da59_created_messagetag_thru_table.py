"""created MessageTag thru table

Revision ID: 3136ddc6da59
Revises: 6f54202679a7
Create Date: 2018-03-26 22:52:51.838616

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3136ddc6da59'
down_revision = '6f54202679a7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('messages_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('message_id', sa.Integer(), nullable=True),
    sa.Column('tag_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['message_id'], ['messages.id'], ondelete='cascade'),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ondelete='cascade'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_unique_constraint(None, 'users', ['username'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.drop_table('messages_tags')
    op.drop_table('tags')
    # ### end Alembic commands ###
