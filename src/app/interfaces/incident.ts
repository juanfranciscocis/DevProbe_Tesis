export interface Incident {
  title: string;
  description: string;
  urgency: string;
  org_impact: string;

  incidentCommander: string;
  operations_lead: string;
  communications_lead: string;
  operation_team: string[];

  date: string;

  state: string;

  report?:Report[];

  iAmIn?: boolean;

  postmortem?: {
    wentWrong: string;
    canBeLearned: string;
    howToPrevent: string;
  }



}

interface Report {
  comment: string;
  from: string;
}
