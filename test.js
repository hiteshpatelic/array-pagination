const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let page = 2, limit = 5;
const filterData = []

let totalPages = 1, totallengthOfArray = data.length;
if (totallengthOfArray <= limit) totalPages = 0

for (let i = 0; i <= (totallengthOfArray / limit).toFixed(0); i++) {
    totallengthOfArray = totallengthOfArray - limit
    totalPages = totalPages + 1
}

let startloop = 0, lastpage

if (data.length > (limit * page)) {
    startloop = limit * page
    for (let i = startloop; i < (startloop + limit); i++) {
        if (data[i])
            filterData.push(data[i]);
            else{
                lastpage = true
            }
    }
}else{
    for (let i = 0; i < data.length; i++) {
        if (data[i])
            filterData.push(data[i]);
           
    }
}
const responseObject = {
    data: filterData,
    totalDocument: data.length,
    totalPages,
    curruntPage:page
}
if(data.length >= (limit * page)){
    responseObject.nextPage = true
    responseObject.previousPage = true
}
if(page ===0){
    responseObject.previousPage = false
    responseObject.nextPage = true
}
if(lastpage ){
    responseObject.previousPage = true
    responseObject.nextPage = false
}


console.log(responseObject);
