
function score_to_grade(score){
  if(score==""){
    throw new Error("empty");
  }
  if(score<0){
    throw new Error("too low");
  }
  if(score>100){
    throw new Error("too high");
  }
  if(isNaN(score)){
    throw new Error("not a number");
  }
  if(score<60){
    return "D";
  }
  else if(score<70){
    return "C";
  }
  else if(score<80){
    return "B";
  }
  else if(score<90){
    return "A";
  }
  else if(score<=100){
    return "S";
  }
}
