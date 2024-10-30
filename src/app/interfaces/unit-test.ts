export interface UnitTest {
  type:string;
  state:boolean;
  code:string;
  title:string;
  last_state_change:LastStateChange[];
  assigned_to:string;
}

export interface LastStateChange {
  date: string;
  state: boolean;
}
