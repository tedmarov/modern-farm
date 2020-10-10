import { plantSeeds } from "./tractor.js"

const plantArray = [
    
]


export const usePlants = () => {
    return plantArray.slice()
}

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        plantArray.push(seedObj) }
    else {
        plantArray.push(seedObj) }
        return seedObj
    }

plantArray = plantSeeds()