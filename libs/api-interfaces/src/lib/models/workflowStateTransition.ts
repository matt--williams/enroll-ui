export interface WorkflowStateTransition<T, K = {}> {
  _id: string;
  from_state: T;
  to_state: T;
  event?: K;
  transition_at: string;
  updated_at?: string;
  created_at?: string;
}
