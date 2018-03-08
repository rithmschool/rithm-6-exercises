import random


class Snack():

    ids = []

    def create_id():
        if len(Snack.ids) < 1800:
            random_id = f'SNK-{str(random.randint(100, 999))}-{str(random.randint(100, 999))}'
            if random_id in Snack.ids:
                return Snack.create_id()
            else:
                Snack.ids.append(random_id)
                return random_id
        print('STOP EATING ALREADY! Delete snacks to continue.')

    def get_snack(id):
        return next(snack for snack in snacks if snack.id == id)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        self.id = Snack.create_id()
