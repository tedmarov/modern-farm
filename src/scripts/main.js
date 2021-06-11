import { createCorn } from "./seeds/corn.js"
import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const plantedSeeds = plantSeeds(yearlyPlan)

console.log(plantedSeeds)