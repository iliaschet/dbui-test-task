export type Person = {
  name: string;
  phone: string;
  email: string;
  country: string;
  online: boolean;
};

export interface Column {
  field: string;
  headerName: string;
  width?: number;
  type?: string;
  float?: string;
  border?: string;
}
