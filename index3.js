function calculateNetSalary(grossSalary) {
    let payeeTax;  // To store the tax (Payee)
    let nhifDeduction;  // To store the NHIF deduction
    let nssfDeduction = 200;  // Fixed NSSF deduction based on Kenyan law

    // Step 1: Calculate Payee (Tax) using KRA tax bands
    if (grossSalary <= 24000) {
        payeeTax = grossSalary * 0.1;  // 10% tax for the first KSh 24,000
    } else if (grossSalary <= 32333) {
        payeeTax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);  // 10% for first 24,000, 25% for the rest
    } else {
        payeeTax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);  // 10%, 25%, and 30% bands
    }

    console.log("Payee Tax:", payeeTax);  // Log the Payee Tax

    // Step 2: Calculate NHIF Contribution
    if (grossSalary <= 5999) {
        nhifDeduction = 150;  // NHIF for salary <= 5,999
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;  // NHIF for salary between 6,000 and 7,999
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;  // NHIF for salary between 8,000 and 11,999
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;  // NHIF for salary between 12,000 and 14,999
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;  // NHIF for salary between 15,000 and 19,999
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;  // NHIF for salary between 20,000 and 24,999
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;  // NHIF for salary between 25,000 and 29,999
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;  // NHIF for salary between 30,000 and 34,999
    } else {
        nhifDeduction = 1000;  // NHIF for salary above 35,000
    }

    console.log("NHIF Deduction:", nhifDeduction);  // Log the NHIF Deduction

    // Step 3: Log the NSSF Deduction
    console.log("NSSF Deduction:", nssfDeduction);  // NSSF deduction is always fixed at 200

    // Step 4: Calculate the Net Salary
    let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
    console.log("Net Salary:", netSalary);  // Log the Net Salary

    return netSalary;
}

// Example usage:
let grossSalary = 50000;  // Example gross salary
let netSalary = calculateNetSalary(grossSalary);
console.log("Final Net Salary:", netSalary);  // This will output the final net salary after deductions
