const grades = [73, 67, 38, 33];
const minimunFallingGrade = 38;

function gradingStudents(grades = []) {
  let newGrades = [];
  grades.forEach((item, index) => {
    if (item < minimunFallingGrade) {
      newGrades.push(item);
    }

    let nextMultipleBy5 = Math.ceil(item / 5) * 5;
    const isLessThanThree = nextMultipleBy5 - item < 3;

    if (isLessThanThree) {
      newGrades.push(nextMultipleBy5);
    } else {
      newGrades.push(item);
    }
  });
  console.log(newGrades);
}

gradingStudents(grades);

/**
 1- percorrer o array de notas;
 2- verificar qual o proximo multiplo de 5 a partir da nota do aluno;


 */
