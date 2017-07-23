
module.exports = (knex) => {
const obj = {};

obj.getItinerary = function(user_id){
//   let user_id = req.session.userId
//   console.log("ITINERARY USER ID: ", user_id);
//   knex('itineraries')
//   .where('user_id', user_id)
//   // .and('date', date)
// }

obj.getFavorite = function(user_id){
  knex('favorite')
  .where('user_id', user_id)
}
// card is an array of card objects
obj.makeItinerary = function(day, title ,user_id, cards){
  knex('itinerary')
  .insert({
    title: title,
    intinerary_day: day,
    user_id: user_id
  })
  .returning('id')
  .then(function (id) {
    return Promise.all(cards.map((card) => {
      return knex('itinerary_cards')
      .insert({
        start_time: card.start_time,
        intinerary_id: id,
        card_id: card.id
      })
    }))
  })
}

  obj.favCards = function(user) {
    return knex('favorites')
      .leftJoin('cards', 'favorites.card_id', '=', 'cards.id')
      .where('favorites.user_id', user)
  }

  obj.itineraryCards = function(id) {
    return knex('itinerary_cards')
    .insert({
        start_time: 9,
        intinerary_id: 1,
        favorite_id: favorite.id, 
        card_id: card.id
      })
  }

return obj;
}

