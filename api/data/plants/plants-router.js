const router = require("express").Router();
const Plants = require('../plants/plants-model')

router.get("/:user_id", async (req, res, next) => {
    Plants.findPlantsForUser(req.params.user_id)
      .then((allUsersPlants) => {
        res.status(200).json(allUsersPlants);
      })
      .catch(next);
  });

  router.post('/:user_id',(req, res, next)=>{
    const plant=req.body
    const {user_id}= req.params
    Plants.addPlant(user_id,plant)
        .then(allPlantsByUser=>{
            res.status(201).json({message:"this user have items listed below",addedPlant:allPlantsByUser[0],allPlantsByUser})
        })
        .catch(next)
})

router.put('/updateitem/:plants_id', (req,res,next)=>{
    const changes=req.body
    Plants.updatePlant(changes,req.params.plants_id)
    .then(updatedPlant=>{
        if(updatedPlant){
            res.status(200).json(updatedPlant)
        } else {
            res.json({message:"there are no plant with that id to update"})
        }
    })
    .catch(next)
})

router.delete('/deleteitem/:plants_id', (req, res, next)=>{
    const{plants_id}=req.params

    Plants.removePlant(plants_id)
    .then(p=>{
        if(p){
            res.json({message:`plants_id ${plants_id} is removed`, removed:p})
        }
        else{
            res.status(404).json({message:"Could not find any plant with provided plants_id"})
        }
    })
    .catch(next)
})
  module.exports = router