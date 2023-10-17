export enum Status {
  Pending = "Pending Approval",
  Approved = "Approved",
  Rejected = "Rejected",
}

export interface CircleImageProps {
  url: string;
  height: number;
  width: number;
  alt: string;
}

export interface TitleSearchProps {
  title: string;
  onChange: Function;
}

export interface PaymentTableItemProps {
  id: number;
  name: string;
  payDay: string;
  status: string;
  amount: number;
}

export interface StatusProps {
  type: Status;
}
