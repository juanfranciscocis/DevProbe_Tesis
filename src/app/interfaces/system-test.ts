export interface SystemTest {
  title: string;
  description: string;
  steps: Step[];
  type: string;
  state: boolean;
}

interface Step{
  stepTitle: string;
  expectedResults: string;
  isComplete: boolean;
}
