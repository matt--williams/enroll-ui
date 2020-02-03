export interface WorkflowStateTransition {
  _id: string;
  from_state: string;
  to_state: string;
  event: string;
  transition_at: string;
  updated_at: string;
  created_at: string;
}
