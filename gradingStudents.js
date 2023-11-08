const grades = [73, 67, 38, 33];
const minimunFallingGrade = 38;

function gradingStudents(grades = []) {
  let newGrades = [];
  grades.forEach((item, index) => {
    if (item < minimunFallingGrade) {
      newGrades.push(item);
      return;
    }

    let nextMultipleBy5 = Math.ceil(item / 5) * 5;
    const isLessThanThree = nextMultipleBy5 - item < 3;

    if (isLessThanThree) {
      newGrades.push(nextMultipleBy5);
    } else {
      newGrades.push(item);
    }
  });
  return newGrades;
}

gradingStudents(grades);
