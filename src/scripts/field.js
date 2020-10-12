import { plantSeeds } from "./tractor.js"

let plantArray = []


export const usePlants = () => {
    return plantArray.slice()
}

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        plantArray.concat(seedObj) }
    else {
        plantArray.concat(seedObj) }
        return seedObj
    }

/*plantArray = plantSeeds(plantArray)

console.log(plantArray)*/