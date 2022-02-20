
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
let op=[];
for (let i=0;i<grades.length;i++){
    if(grades[i]<38) op.push(grades[i]);
    else{
        const milestone=Math.ceil(grades[i]/5)*5;
        if(milestone-grades[i]<3){
            op.push(milestone);
        }else{
            op.push(grades[i]);
        }
    }
}
return op;
}