/// <reference types="vite/client" />

type PaginateItemsInput = {
  isAsc: boolean;
  limit: number;
  afterCursor?: string;
  beforeCursor?: string;
  merchantId?: number;
};
