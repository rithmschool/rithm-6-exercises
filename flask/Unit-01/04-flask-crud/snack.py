class Snack():

    id = 1

    def __init__(self, name, kind):
        self.id = Snack.id
        self.name = name
        self.kind = kind
        Snack.id += 1
