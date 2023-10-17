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

export { totalPay };
