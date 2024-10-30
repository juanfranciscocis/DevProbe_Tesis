export interface SystemTest {
  title: string;
  description: string;
  steps: Step[];
  type: string;
  state: boolean;
  assigned_to: string;
}

interface Step{
  stepTitle: string;
  expectedResults: string;
  isComplete: boolean;
}
