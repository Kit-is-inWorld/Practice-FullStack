let score = 70
function getGrade(score){
if(score >= 80){
    console.log('A');    
}else if(score >=50 ) {
    console.log('B');
} else {
    console.log('F');
    
}
}
console.log(getGrade(80)); // A
console.log(getGrade(60)); // B
console.log(getGrade(30)); // F