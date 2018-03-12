class Snack():
    count = 1

    def __init__(self, name, variety):
        self.name = name
        self.variety = variety
        self.id = Snack.count
        Snack.count += 1
