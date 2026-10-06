// Calculate the average ratings

export function averageScore(ratings: number[]){
    if(ratings.length === 0) return 0;
    return ratings.reduce((rating, sum) => {
        return rating + sum
    }, 0) / ratings.length;
}

// 
export function formatLabels(...labels: string[]){
    if(labels.length === 0) return "No Labels";
    if(labels.length === 1) return `Label ${labels[0]}`
    return `Labels ${labels.join(", ")}`
}