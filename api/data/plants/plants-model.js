const db = require("../db-config");

async function findPlantsForUser(user_id) {
    return db('plants').where({user_id})
  }
  
  function findBy(filter) {
    return db('plants').where(filter).first()
  }

  function addPlant(user_id, plant){
    return db('plants')
    .insert({
        ...plant,
        user_id
    })
    .then(()=>{
        return db('plants')
        .join('users', 'users.id','plants.user_id')
        .select('plants_id','plants.nickname','plants.species','plants.image','users.username')
        .orderBy('plants_id','desc')
        .where('users.id',user_id)
    })
}

function updatePlant(changes,plants_id) {
    return db('plants')
      .where({ plants_id })
      .update(changes)
    //   .then(result => {
    //     return result
    //   })
      .then(count => {
        return findBy({plants_id})
      })
  }

async function removePlant(plants_id){
    const result = await db('plants').where({plants_id}).first()
    const removed= await db('plants').where('plants_id',plants_id).del()
    return result
   
    // return db('items').where({item_id}).del()
      
}

  module.exports = {  findPlantsForUser, findBy, addPlant, updatePlant, removePlant };