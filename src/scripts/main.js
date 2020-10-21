// import { createCorn } from "./seeds/corn.js"
import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


const currentPlan = createPlan()
plantSeeds(currentPlan)

const plantedSeed = usePlants()