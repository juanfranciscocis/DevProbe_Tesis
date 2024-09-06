export interface UnitTest {
  type:string;
  state:boolean;
  code:string;
  title:string;
  last_state_change:LastStateChange[];
}

export interface LastStateChange {
  date: string;
  state: boolean;
}
