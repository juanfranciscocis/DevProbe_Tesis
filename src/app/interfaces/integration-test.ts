import {LastStateChange} from "./unit-test";

export interface IntegrationTest {
  type:string;
  state:boolean;
  code:string;
  title:string;
  last_state_change:LastStateChange[];
  assigned_to:string;
}
