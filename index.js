let satMsg;
let monMsg;

function saturdayFun(activity) {
    activity = activity ? satMsg = `This Saturday, I want to ${activity}!` : satMsg = `This Saturday, I want to roller-skate!`;
    return satMsg;
}

const mondayWork = function (activity) {
    activity = activity ? monMsg = `This Monday, I will ${activity}.` : monMsg = "This Monday, I will go to the office.";
    return monMsg;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}