# Add a class for a snack here!
class Snack():
    id = 1

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        # categories are: savory, sweet, sour, spicy, bitter
        self.id = Snack.id
        Snack.id += 1

    @classmethod
    def find_snack(cls, snacks_list, snack_id):
        try:
            found_snack = next(
                snack for snack in snacks_list if snack.id == snack_id)
            return found_snack
        except:
            return None
