import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"

/* Define and export plantSeeds
    Accept planting plan/define parameter as input */

let yearlyPlan = []
yearlyPlan = createPlan(yearlyPlan)

export const plantSeeds = (yearlyPlan) =>  {
    let newPlant = []
    for (let i = 0; i < yearlyPlan.length; i++) {
        let subYearlyPlan = yearlyPlan[i];
        for (let j = 0; j < subYearlyPlan.length; j++) {
        if (subYearlyPlan[j] === "Asparagus") {
            newPlant = createAsparagus()
            addPlant(newPlant); }
        else if (subYearlyPlan[j] === "Corn") {
            newPlant = createCorn()
            addPlant(newPlant); }
        else if (subYearlyPlan[j] === "Potato") {
            newPlant = createPotato()
            addPlant(newPlant); }
        else if (subYearlyPlan[j] === "Soybean") {
            newPlant = createSoybean()
            addPlant(newPlant); }
        else if (subYearlyPlan[j] === "Sunflower") {
            newPlant = createSunflower()
            addPlant(newPlant); }
        else (subYearlyPlan[j] === "Wheat"); {
            newPlant = createWheat()
            addPlant(newPlant) }
        } 
        
    }
return yearlyPlan

}


/*     if (plantingPlan.forEach(plantingPlan === "Asparagus")) {
    createAsparagus() && plantingPlan.push(asparagusSeed) 
console.log(plantingPlan) }
    else if (plantingPlan.forEach(plantingPlan === "Corn")) {
    createCorn() && plantingPlan.push(cornSeed) }
    else if (plantingPlan.forEach(plantingPlan === "Potato")) {
        createPotato() && plantingPlan.push(cornPotato) }
    else if (plantingPlan.forEach(plantingPlan === "Soybean")) {
        createSoybean() && plantingPlan.push(cornSoybean) }
    else if (plantingPlan.forEach(plantingPlan === "Sunflower")) {
        createSunflower() && plantingPlan.push(cornSunflower) }
    else (plantingPlan.forEach(plantingPlan === "Wheat")); {
        createWheat() && plantingPlan.push(wheatSeed) }
    }            
    


    
} 
console.log(subPlantingPlan)
*/