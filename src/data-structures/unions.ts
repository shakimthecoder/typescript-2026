export function getTicketInfo(id: number | string): string {
    if(typeof id === "string") {
        const parsedId = id.split("-")[0]; //e.g. PROJECT-123
        const numberId = parseInt(parsedId);
        return `Processing ticket: ${numberId}`;
    }
    return `Processing ticket: ${id}`;
}

export function calculateApiCost(numReqs: number, tier?: string){
    if(tier == null){
        return numReqs * 0.1;
    }
    if(tier === "enterprise"){
        return numReqs * 0.05;
    }
    if(tier === "pro"){
        return numReqs * 0.03;
    }
    return numReqs * 0.1;
}

export function estimateResponseTime(promptLength = 100, modelType = "text"){
    let baseNumber = 0;
    let rateNumber = 0;
    if(modelType === "text"){
        baseNumber = 5;
        rateNumber = 0.01;
    } else if(modelType === "image"){
       baseNumber = 3;
       rateNumber= 0.02;
    } else if(modelType === "code"){
        baseNumber = 7;
        rateNumber = 0.03
    }
    return Math.round(baseNumber + rateNumber * promptLength);
}

