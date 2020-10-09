const fieldArray = [
    
]

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) == true) {
        fieldArray.push(seedObj) }
    else {
        fieldArray.push(seedObj) }
}

export const usePlants = () => {
    return fieldArray.slice()
}
