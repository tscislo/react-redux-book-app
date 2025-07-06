export type Order = {
    id: number;
} & OrderPlaced

export type OrderPlaced = {
  order?: {
    id: number;
    quantity: number;
  }[]
  first_name?: string;
  last_name?: string;
  city?: string;
  zip_code?: string;
}
