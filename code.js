function convertToAdjList(adjMatrix) {
    for (let i = 0; i < adjMatrix.length; i++){
        let tmp = [];
        for(let e = 0; e < adjMatrix[i].length; e++){
            if(adjMatrix[i][e]){
                tmp.push(e);
            }
        }
        adjMatrix.splice(i, 1, tmp);
    }
    return adjMatrix;
}

function ListToMatrix(adjList){
    for (let n = 0; n < adjList.length; n++){
        let tmp = [];
        for (let i = 0; i < adjList.length; i++){
            tmp.push(0);
        }
        for(let e = 0; e < adjList[n].length; e++){
            tmp[adjList[n][e]] = 1
        }
        adjList.splice(n, 1, tmp);
    }
    return adjList;
}
