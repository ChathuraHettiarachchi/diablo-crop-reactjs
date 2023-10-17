import { EmployeeState } from "./../types/index";
// totalPay
const totalPay = (employee: any) => {
  const salary = employee.payRunHours * employee.hourlyRate;
  var otherPayments = 0;
  if (employee.payments.length > 1) {
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

export { totalPay, filterEmployee, getRandomInt };
