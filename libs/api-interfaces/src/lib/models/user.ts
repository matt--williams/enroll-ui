export interface HbxUser {
  _id: string;
  hints: boolean;
  preferred_language: string;
  approved: boolean;
  email: string;
  encrypted_password: string;
  sign_in_count: number;
  roles: string[]; // enum array?
  oim_id: string;
  idp_verified: boolean;
  authentication_token: string;
  updated_at: string;
  created_at: string;
  last_sign_in_at: string;
  current_sign_in_at: string;
  last_sign_in_ip: string;
  current_sign_in_ip: string;
  last_portal_visited: string;
  failed_attempts: number;
  reset_password_token?: any;
  reset_password_sent_at?: any;
  locked_at?: any;
  unlock_token?: any;
  identity_final_decision_code?: string;
  identity_response_code: string;
  identity_response_description_text: string;
  identity_final_decision_transaction_id: string;
  identity_verified_date: string;
}
