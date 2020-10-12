// import { createCorn } from "./seeds/corn.js"
import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

export const yearlyPlan = createPlan()

//  const cornSeed = createCorn()
//  console.log(cornSeed)

usePlants(yearlyPlan)
addPlant(yearlyPlan)
console.log(plantSeeds(yearlyPlan))
