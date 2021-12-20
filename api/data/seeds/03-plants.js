exports.seed = function (knex) {
    return knex('plants').insert([
        {
          nickname:'planty',
          species:'cactus',
          image:'https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cactus-PNG-Transparent-Image-5.png',
          user_id:1
        },
        {
          nickname:'planty2',
          species:'cactus',
          image:'https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cactus-PNG-Transparent-Image-5.png',
          user_id:1
        },
        {
          nickname:'leafy',
          species:'Green leaf',
          image:'https://jooinn.com/images/house-plants-4.jpg',
          user_id:2
        }
      ])
}