function superbowlWin(record){
    function win(something){
        if (something.result === "W")
        return something.result;
    else
        return undefined;}
    let answer = record.find(win);
    if (answer === undefined)
        return answer
    else
    return answer.year;
    }