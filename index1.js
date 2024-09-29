function generateGrade(marks) {
    let grade;  // Declare a variable to store the grade
    
        // Check the marks and assign the corresponding grade
        if (marks > 79) {
            grade = "A";  // Marks greater than 79 get an "A"
        } 
        else if (marks >= 60 && marks <= 79) {
            grade = "B";  // Marks between 60 and 79 get a "B"
        } 
        else if (marks >= 49 && marks <= 59) {
            grade = "C";  // Marks between 49 and 59 get a "C"
        } 
        else if (marks >= 40 && marks <= 49) {
            grade = "D";  // Marks between 40 and 49 get a "D"
        } 
        else if (marks < 40) {
            grade = "E";  // Marks less than 40 get an "E"
        }
    
        return grade;  // Return the assigned grade
    }
    
    // Test the function with a sample mark
    let studentMarks = 50;  // Example marks input
    console.log("grade:", generateGrade(studentMarks));  // Print the grade for the given marks
    