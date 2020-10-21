import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plan) => {
    plan.forEach(row => {
        row.forEach(plantType => {
            switch (plantType) {
                case "Asparagus":
                    addPlant(createAsparagus())
                    break
                case "Corn":
                    addPlant(createCorn())
                    break
                case "Potato":
                    addPlant(createPotato())
                    break
                case "Soybean":
                    addPlant(createSoybean())
                    break
                case "Sunflower":
                    addPlant(createSunflower())
                    break
                case "Wheat":
                    addPlant(createWheat())
                    break
                default:
                    break

            }
            console.log(plantType)
        })

})
}

/* Define and export plantSeeds
    Accept planting plan/define parameter as input */


// export const plantSeeds = () => {
//     let result = ""
//     if ()
//     else if
//     else if
//     else if
//     else if
//     else if
// }

// export const plantSeeds = (plantingPlan) =>  {
//     let plantedSeeds = {}
//     for (let i = 0; i < plantingPlan.length; i++) {
//         let subplantingPlan = plantingPlan[i];
//         for (let j = 0; j < subplantingPlan.length; j++) {
//         if (subplantingPlan[j] === "Asparagus") {
//             plantedSeeds = createAsparagus()
//             plantingPlan.concat(plantedSeeds); }
//         else if (subplantingPlan[j] === "Corn") {
//             plantedSeeds = createCorn() 
//             addPlant(plantedSeeds); }
//         else if (subplantingPlan[j] === "Potato") {
//             plantedSeeds = createPotato()
//             addPlant(plantedSeeds); }
//         else if (subplantingPlan[j] === "Soybean") {
//             plantedSeeds = createSoybean()
//             addPlant(plantedSeeds); }
//         else if (subplantingPlan[j] === "Sunflower") {
//             plantedSeeds = createSunflower()
//             addPlant(plantedSeeds); }
//         else (subplantingPlan[j] === "Wheat"); {
//             plantedSeeds = createWheat()
//             addPlant(plantedSeeds) }
//         } 
        
//     }
// console.log(yearlyPlan)
// return yearlyPlan

// }
