import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants, plantArray } from "./field.js"
import { plantSeeds } from "./tractor.js"


plantSeeds()
addPlant()
usePlants()

 console.log(plantArray)