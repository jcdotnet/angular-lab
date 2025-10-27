export interface RegisterModel {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  password: string | null;
  confirmPassword: string | null;
  token?: string
  refreshToken?: string
}