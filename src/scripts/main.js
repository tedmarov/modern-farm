import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

const cornSeed = createCorn()

const cornPlant = addPlant(cornSeed)
const cornField = usePlants(cornPlant)

console.log(cornField)