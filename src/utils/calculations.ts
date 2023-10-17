import { EmployeeState } from "./../types/index";
// totalPay
const totalPay = (employee: any) => {
  const salary = employee.payRunHours * employee.hourlyRate;
  var otherPayments = 0;
  if (employee?.payments?.length > 1) {
    employee.payments.map(
      (i: { amount: number }) => (otherPayments += i.amount),
    );
  }
  return salary + otherPayments;
};

const filterEmployee = (id: number, data: EmployeeState[]) => {
  const result = data.filter((i) => i.employeeId == id);
  return result[0];
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

// calculate fortnight
const calculateIncomeTax = (
  numberOfHours: number,
  hourlyPay: number,
  weeksPerCycle: number,
) => {
  // Calculate annual income based on weeksPerCycle
  const annualIncome = numberOfHours * hourlyPay * (52 / weeksPerCycle);

  // Calculate income tax for the given annual income
  let tax = 0;

  // based on data https://taxsummaries.pwc.com/new-zealand/individual/taxes-on-personal-income
  if (annualIncome <= 14000) {
    tax = annualIncome * 0.105;
  } else if (annualIncome <= 48000) {
    tax = 1470 + (annualIncome - 14000) * 0.175;
  } else if (annualIncome <= 70000) {
    tax = 7420 + (annualIncome - 48000) * 0.3;
  } else {
    tax = 14020 + (annualIncome - 70000) * 0.33;
  }

  // Calculate fortnightly tax by dividing the annual tax by weeksPerCycle
  const fortnightlyTax = tax / (52 / weeksPerCycle);

  return fortnightlyTax;
};

export { totalPay, filterEmployee, getRandomInt, calculateIncomeTax };
