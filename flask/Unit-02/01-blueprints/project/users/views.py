from flask import Blueprint
from project.users.models import User

owners_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)
