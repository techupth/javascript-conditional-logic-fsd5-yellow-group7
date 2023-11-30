function calculateStudentGrade(score) {
  // let grade;
  // switch (score) {
  //   case score >= 90 && score <= 100:
  //     grade = "A";
  //     break;
  //   case score >= 80 && score <= 89:
  //     grade = "B";
  //     break;
  //   case score >= 70 && score <= 79:
  //     grade = "C";
  //     break;
  //   case score >= 60 && score <= 69:
  //     grade = "D";
  //     break;
  //   case score >= 59:
  //     grade = "F";
  //     break;
  //     default :
  //     grade = "F";
  //     break;
  // }
  //   return grade
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 59) {
    return "F";
  } else {
    return "F";
  }
  // let grade = score >= 90 && score <= 100 ? "A" : score >= 80 && score <= 89 ? "B" : score >= 70 && score <= 79 ? "C" : score >= 60 && score <= 69 ? "D" : score >= 59 ? "F" : "F"
  // return grade
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
