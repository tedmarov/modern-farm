
export const harvestPlants = (allPlanted) => {
    const plantsToBeSold = []

    allPlanted.forEach(plant => {
        let output = plant.output

        if (plant.type === "Corn") {
            output /= 2
        }

        for (let i = 0; i < output; i++) {
         plantsToBeSold.push(plant)
    }

    })
    return plantsToBeSold
}
//     for (let i = 0; i < seedArray.length; i++)

//     return seedArray
// }
