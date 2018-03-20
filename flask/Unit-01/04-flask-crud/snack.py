# import random


class Snack():

    id = 1

    # the app works fine with random id gen but tests will not pass unless id begins at 1 and remains an int :/

    # ids = []

    # def create_id():
    #     if len(Snack.ids) < 1800:
    #         random_id = f'SNK-{str(random.randint(100, 999))}-{str(random.randint(100, 999))}'
    #         if random_id in Snack.ids:
    #             return Snack.create_id()
    #         else:
    #             Snack.ids.append(random_id)
    #             return random_id
    #     print('STOP EATING ALREADY! Delete snacks to continue.')

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        # self.id = Snack.create_id()
        self.id = Snack.id
        Snack.id += 1
