# Add a class for a snack here!


class Snack():

    id = 1

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        self.id = Snack.id
        Snack.id += 1
