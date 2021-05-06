'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let currentScore = 0

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function check(score){
    return score <= currentScore
}

function climbingLeaderboard(ranked, player) {
    // Write your code here
   
    const answer = []

    const dataArr = new Set(ranked); /*DELETE DUPLICATES*/ 
    let singleArr = [...dataArr];
    let i=0
    


while(i < player.length){
    currentScore=player[i]
    let indexScore = singleArr.findIndex(check)
     console.log(indexScore)
    if(indexScore == - 1){
        answer.push(singleArr.length+1)
    }
    else{
        answer.push(indexScore+1)
    }
   
    i++
}
    
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
