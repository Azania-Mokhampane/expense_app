export type IExpenses = {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

export type EnteredDataType = {
  title: string;
  amount: number;
  date: Date;
}

export type IExpForm = {
  onCancel: () => void;
  onSaveExpenseData: (enteredExpenseData: EnteredDataType) => void
};