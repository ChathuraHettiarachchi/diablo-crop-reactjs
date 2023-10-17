export const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Pay Runs",
    href: "#",
  },
  {
    label: "Employees",
    href: "#",
  },
  {
    label: "Reports",
    href: "#",
  },
  {
    label: "Settings",
    href: "#",
  },
];

export const payField = (title: string, amount: any, description: string) => {
  return {
    id: 0,
    name: title,
    description: description,
    amount: amount,
  };
};
