

class Animal(Mongoose):

  def save():
    # connect o mongo and actually save

  @classmethod
  def pre(hook-name, my-fn):
    # add my-fn to stuff-to-do before hook

  @

fido = Animal()

# "save", "update", "remove"

animalSchema.pre("save", fun-to-call)  // adding fn-to-call to a "before save" hook


fido.save()
  => find all Animal.pre("save") fns & call them in order
  => do the real save w/ mongo
  => find all post
