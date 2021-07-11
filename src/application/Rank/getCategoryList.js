const getCategoryList = (data)=>{
    const officialRank = [],globalRank = []
    data.forEach(item=>{
        if(item.tracks && item.tracks.length>0){
            officialRank.push(item)
        }else{
            globalRank.push(item)
        }
    })
    return {officialRank,globalRank}
}
export default getCategoryList