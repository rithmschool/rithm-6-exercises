const catIpsum =
  "Sit on human they not getting up ever. Damn that dog ignore the squirrels, you'll never catch them anyway. Chase dog then run away find a way to fit in tiny box, stand in front of the computer screen. Meowzer stretch, so ignore the human until she needs to get up, then climb on her lap and sprawl. Attack dog, run away and pretend to be victim please stop looking at your phone and pet me for intently sniff hand. Twitch tail in permanent irritation chew the plant munch, munch, chomp, chomp litter kitter kitty litty little kitten big roar roar feed me eat grass, throw it back up and ask to go outside and ask to come inside and ask to go outside and ask to come inside.";
const cats = [
  'චᆽච',
  '^ↀᴥↀ^',
  '(=ↀωↀ=)',
  '(=ＴェＴ=)',
  '(^･ｪ･^)',
  '(ΦωΦ)',
  'โ๏∀๏ใ',
  '(⁎˃ᆺ˂)',
  '(ꀄꀾꀄ)',
  '=ộ⍛ộ='
];

function getRandomCat() {
  return cats[Math.floor(Math.random() * cats.length)];
}

function rootReducer(state = cats[getRandomCat()], action) {
  let newCat = getRandomCat();
  if (newCat === state) newCat = catIpsum;
  return action.type === 'MEOW' ? newCat : state;
}

const store = Redux.createStore(rootReducer);

$(document).ready(function() {
  let $catFace = $('#cat_face');
  $catFace.text(getRandomCat());

  $('#new_face').on('click', function() {
    store.dispatch({ type: 'MEOW' });
    let updatedState = store.getState();
    $catFace.text(store.getState());
  });
});
