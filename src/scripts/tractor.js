import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

/* Define and export plantSeeds
    Accept planting plan/define parameter as input */

const plantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

export const prepPlan = () => {
    return plantingPlan.slice()
}

export const plantSeeds = (plantingPlan) => {
    for (let index = 0; index < plantingPlan.length; index++) {
        if (plantingPlan[index] === "Asparagus") {
            createAsparagus() && plantArray.push(asparagusSeed)}
        else if (plantingPlan[index] === "Corn") {
            createCorn() && plantArray.push(cornSeed) }
        else if (plantingPlan[index] === "Potato") {
            createPotato() && plantArray.push(potatoSeed)}
        else if (plantingPlan[index] === "Soybean") {
            createSoybean() && plantArray.push(soybeanSeed)}
        else if (plantingPlan[index] === "Sunflower") {
            createSunflower() && plantArray.push(sunflowerSeed)}
        else { (plantingPlan[index] === "Wheat") 
            createWheat() && plantArray.push(wheatSeed)}
        }
    
}

