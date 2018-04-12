"""attempt to migrate cascade

Revision ID: 0382c4b2654f
Revises: d57c7317d98b
Create Date: 2018-03-19 18:10:11.334015

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0382c4b2654f'
down_revision = 'd57c7317d98b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('message_tags_message_id_fkey', 'message_tags', type_='foreignkey')
    op.drop_constraint('message_tags_tag_id_fkey', 'message_tags', type_='foreignkey')
    op.create_foreign_key(None, 'message_tags', 'tags', ['tag_id'], ['id'], ondelete='cascade')
    op.create_foreign_key(None, 'message_tags', 'messages', ['message_id'], ['id'], ondelete='cascade')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'message_tags', type_='foreignkey')
    op.drop_constraint(None, 'message_tags', type_='foreignkey')
    op.create_foreign_key('message_tags_tag_id_fkey', 'message_tags', 'tags', ['tag_id'], ['id'])
    op.create_foreign_key('message_tags_message_id_fkey', 'message_tags', 'messages', ['message_id'], ['id'])
    # ### end Alembic commands ###