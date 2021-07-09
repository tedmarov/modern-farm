import { createAsparagus } from "./seeds/asparagus"
import { createSunflower } from "./seeds/sunflower"

export const harvestPlants = (allHarvested) => {
    let veggiesToBeSold = []
    for (const veggie of allHarvested) {

    return plantsToBeSold
        if (veggie.type != "Corn") {
            for (let i = 0; i < veggie.output; i++) {
                if (veggie.type == "Potato") {
                    let seed = createPotato()
                    veggiesToBeSold.push(seed)
                }
                else if (veggie.type == "Soybean") {
                    let seed = createSoybean()
                    veggiesToBeSold.push(seed)
                }
                else if (veggie.type == "Sunflower") {
                    let seed = createSunflower()
                    veggiesToBeSold.push(seed)
                }
                else if (veggie.type == "Wheat") {
                    let seed = createWheat()
                    veggiesToBeSold.push(seed)
                }
                else if (veggie.type == "Asparagus") {
                    let seed = createAsparagus()
                    veggiesToBeSold.push(seed)
                }
            }
        }
        else {
            for (let q = 0; q < veggie.output /2 ; q++) {
                let seed = createCorn2()
                veggiesToBeSold.push(seed)
            }
        }

    }
    
    return veggiesToBeSold
}

