export interface Product {
  product_id: string;
  product_code: string;
  category_id: string;
  subcategory_id: string;
  product_name: string;
  age_group_id: string;
  brand_id: string;
  product_image1: string;
  product_image2: string;
  full_description: string;
  short_description: string;
  barcode: string;
  barcode_image: string;
  product_sgst: string;
  product_cgst: string;
  recomm_gender: string;
  nat_of_prod: string;
  herb_type: string;
  is_featured: string;
  is_combo: string;
  is_today: string;
  is_offer: string;
  offer: string;
  user_ratings: string;
  almaa_ratings: string;
  status: string;
  created_date: string;
  updated: string;
  prod_attri_id: string;
  color_id: string;
  size_id: string;
  product_measuring_unit_id: string;
  product_purchase_price: string;
  product_mrp: string;
  unit_price: string;
  discount: string;
  selling_price: string;
  quantity: string;
  reordered_level: string;
  attstatus: string;
  created: string;
  isLiked?: boolean;
  qty?: number;
}
