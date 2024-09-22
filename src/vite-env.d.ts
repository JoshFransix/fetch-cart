/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

type PaginateItemsInput = {
  isAsc: boolean;
  limit: number;
  afterCursor?: string;
  beforeCursor?: string;
  merchantId?: number;
};

interface itemVariants {
  __typename?: string;
  id: number;
  sku: string;
  name?: string | null;
  shopifyId?: string | null;
  merchantSku: string;
  merchantId: number;
  itemId: number;
  isEnabled: boolean;
  imageUrl: string;
  price: any;
  weight?: any | null;
  createdAt: any;
  lastModified: any;
  deletedAt?: any | null;
}

interface IProduct {
  __typename?: string;
  id: number;
  merchantId: number;
  name: string;
  shopifyId?: string | null;
  description?: string | null;
  currency: string;
  imageUrl?: string | null;
  createdAt: any;
  lastModified: any;
  itemVariants: itemVariants[];
}
