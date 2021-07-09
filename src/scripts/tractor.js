import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//Stuck on sowing, npm run test was not returning right value

export const plantSeeds = (plantingPlan) =>  {
   for (let i = 0; i < plantingPlan.length; i++) {
        for (let j = 0; j < plantingPlan[i].length; j++) {
        if (plantingPlan[i][j] === "Asparagus")
        {addPlant(createAsparagus())} 
        else if (plantingPlan[i][j] === "Corn") {
        let plantedSeed = createCorn()
        addPlant(plantedSeed[0])
        addPlant(plantedSeed[1])}
        else if (plantingPlan[i][j] === "Potato")
        {addPlant(createPotato())} 
        else if (plantingPlan[i][j] === "Soybean")
        {addPlant(createSoybean())}
        else if (plantingPlan[i][j] === "Sunflower")
        {addPlant(createSunflower())}
        else if (plantingPlan[i][j] === "Wheat")
        {addPlant(createWheat())}
    }
}
return addPlant()
}


// for (let i = 0; i < plantingPlan.length; i++) {
//     for (let j = 0; j < plantingPlan[i].length; j++) {
//         let seedFinder = plantingPlan[i][j]
//     if (seedFinder === "Asparagus") {
//         let plantedSeed = createAsparagus()
//         addPlant(plantedSeed) }        
//     else if (seedFinder === "Corn") {
//         let plantedSeed = createCorn() 
//         addPlant(plantedSeed[0])
//         addPlant(plantedSeed[1]) }
//     else if (seedFinder === "Potato") {
//         let plantedSeed = createPotato()
//         addPlant(plantedSeed) }
//     else if (seedFinder === "Soybean") {
//         let plantedSeed = createSoybean()
//         addPlant(plantedSeed) }
//     else if (seedFinder === "Sunflower") {
//         let plantedSeed = createSunflower()
//         addPlant(plantedSeed) }
//     else (seedFinder === "Wheat"); {
//         let plantedSeed = createWheat()
//         addPlant(plantedSeed) }
//     } 
//     console.log(plantingPlan)
// return plantingPlan
// }

// export const plantSeeds = (plan) => {
// plan.forEach(row => {
// row.forEach(plantType => {
//     switch (plantType) {
//         case "Asparagus":
//             addPlant(createAsparagus())
//             break
//         case "Corn":
//             addPlant(createCorn())
//             break
//         case "Potato":
//             addPlant(createPotato())
//             break
//         case "Soybean":
//             addPlant(createSoybean())
//             break
//         case "Sunflower":
//             addPlant(createSunflower())
//             break
//         case "Wheat":
//             addPlant(createWheat())
//             break
//         default:
//             break
// }
// })
// })
// }
 
//             console.log(plantType)
//         })

// })
// }



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