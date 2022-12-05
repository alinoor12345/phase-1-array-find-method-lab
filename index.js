// code your solution here
//returns a year the denver broncos won the superbowl
//returns undefined as the year if the record has no win objects

function superbowlWin(record){
    let winYear = record.find(function (win){
    return win.result === "W"})
    if (winYear !== undefined){
        return winYear.year
    } else {
        return undefined
    }

}superbowlWin(record)
