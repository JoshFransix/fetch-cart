/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Decimal: { input: any; output: any };
  GraphqlCursor: { input: any; output: any };
  GraphqlPoint: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type AddOrdersToCourierSheetInput = {
  orderIds: Array<Scalars["Int"]["input"]>;
  sheetId: Scalars["Int"]["input"];
};

export type AddRackLevelsInput = {
  id: Scalars["Int"]["input"];
  levels: Scalars["Int"]["input"];
};

export type AddressShopifyInput = {
  address1: Scalars["String"]["input"];
  address2?: InputMaybe<Scalars["String"]["input"]>;
  city: Scalars["String"]["input"];
  company?: InputMaybe<Scalars["String"]["input"]>;
  country: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  province?: InputMaybe<Scalars["String"]["input"]>;
  provinceCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type AddressSimilarityItem = {
  __typename?: "AddressSimilarityItem";
  address: CustomerAddress;
  score: Scalars["Int"]["output"];
};

export type AssignMerchantToInventoryInput = {
  ballotIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  boxIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  merchantId: Scalars["Int"]["input"];
  rackIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type AssignPackageToCourierInput = {
  ids: Array<Scalars["Int"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type BallotPage = {
  __typename?: "BallotPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Ballot>;
};

export type BallotPaginationInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BoxPage = {
  __typename?: "BoxPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Box>;
};

export type BoxPaginationInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourierPageInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CourierSheetPage = {
  __typename?: "CourierSheetPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<CourierSheet>;
};

export enum CourierSheetStatus {
  Completed = "completed",
  InProgress = "inProgress",
  WaitingForAdminApproval = "waitingForAdminApproval",
  WaitingForFinanceApproval = "waitingForFinanceApproval",
}

export type CreateBallotInput = {
  level: Scalars["Int"]["input"];
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  rackId: Scalars["Int"]["input"];
};

export type CreateBoxInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateCompoundItemInput = {
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  merchantSku?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  variantNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  variantOptionAttributes?: InputMaybe<Array<CreateItemVariantInput>>;
  variantOptions?: InputMaybe<Array<Array<CreateVariantOptionInput>>>;
};

export type CreateCourierSheetInput = {
  orderIds: Array<Scalars["Int"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type CreateCustomerAddressInput = {
  apartmentFloor?: InputMaybe<Scalars["String"]["input"]>;
  buildingNumber?: InputMaybe<Scalars["String"]["input"]>;
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  customerId?: InputMaybe<Scalars["Int"]["input"]>;
  governorateId?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress: Scalars["String"]["input"];
  zipCode?: InputMaybe<Scalars["String"]["input"]>;
  zoneId: Scalars["Int"]["input"];
};

export type CreateCustomerInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateDiscountInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateDomesticShippingInput = {
  base?: InputMaybe<Scalars["Decimal"]["input"]>;
  govId: Scalars["Int"]["input"];
  orderType?: InputMaybe<OrderType>;
  postDecimal?: InputMaybe<Scalars["Decimal"]["input"]>;
  total: Scalars["Decimal"]["input"];
  vatDecimal?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type CreateDomesticZoneInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateEmployeeInput = {
  commission: Scalars["Decimal"]["input"];
  currency: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  salary: Scalars["Decimal"]["input"];
  type: EmployeeType;
};

export type CreateExpenseInput = {
  amount?: InputMaybe<Scalars["Decimal"]["input"]>;
  approvedById?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  fromAccountId: Scalars["Int"]["input"];
  receipt?: InputMaybe<Scalars["String"]["input"]>;
  type: ExpenseType;
};

export type CreateFinancialAccountInput = {
  balance?: InputMaybe<Scalars["Decimal"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  type: FinancialAccountType;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateHubInput = {
  governorateId: Scalars["Int"]["input"];
  location: Scalars["GraphqlPoint"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateInventoryInput = {
  ballotPerRack?: InputMaybe<Scalars["Int"]["input"]>;
  boxPerBallot?: InputMaybe<Scalars["Int"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["GraphqlPoint"]["input"]>;
  module?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  numberOfRacks?: InputMaybe<Scalars["Int"]["input"]>;
  rackLevel?: InputMaybe<Scalars["Int"]["input"]>;
  zoneId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateInventoryItemHistoryInput = {
  amount: Scalars["Int"]["input"];
  description: Scalars["String"]["input"];
  itemInBoxId: Scalars["Int"]["input"];
  type: ItemHistoryEnum;
};

export type CreateInventoryRentInput = {
  currency: Scalars["String"]["input"];
  merchantId: Scalars["Int"]["input"];
  pricePerUnit: Scalars["Decimal"]["input"];
  sqaureMeter?: InputMaybe<Scalars["Int"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  type: InventoryRentType;
};

export type CreateInventoryRentTransactionInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateInventorySupportInput = {
  governorateId: Scalars["Int"]["input"];
  inventoryId: Scalars["String"]["input"];
  zoneId: Scalars["Int"]["input"];
};

export type CreateItemInBoxInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateItemReturnHistoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateItemVariantInput = {
  imageUrl: Scalars["String"]["input"];
  itemId?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  merchantSku?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type CreateMerchantAddressInput = {
  apartmentFloor?: InputMaybe<Scalars["String"]["input"]>;
  buildingNumber?: InputMaybe<Scalars["String"]["input"]>;
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  governorateId?: InputMaybe<Scalars["Int"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress: Scalars["String"]["input"];
  zipCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateMerchantInput = {
  address?: InputMaybe<CreateMerchantAddressInput>;
  addressId?: InputMaybe<Scalars["Int"]["input"]>;
  bankName?: InputMaybe<Scalars["String"]["input"]>;
  bankNumber?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  includesVat: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  overShipping?: InputMaybe<Scalars["Decimal"]["input"]>;
  ownerBirthdate?: InputMaybe<Scalars["String"]["input"]>;
  ownerEmail?: InputMaybe<Scalars["String"]["input"]>;
  ownerName?: InputMaybe<Scalars["String"]["input"]>;
  ownerPhone?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
  threshold?: InputMaybe<Scalars["Decimal"]["input"]>;
  withoutFinancialAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateMerchantItemsInput = {
  items: Array<CreateCompoundItemInput>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateMerchantShippingListInput = {
  list: Array<CreateDomesticShippingInput>;
  merchantId: Scalars["Int"]["input"];
};

export type CreateMerchantVisitHistoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateMerchantVisitInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateOrderInput = {
  addressId: Scalars["Int"]["input"];
  canOpen?: InputMaybe<Scalars["Boolean"]["input"]>;
  deliveryPart?: InputMaybe<Scalars["Boolean"]["input"]>;
  fragile?: InputMaybe<Scalars["Boolean"]["input"]>;
  merchantCustomerId: Scalars["Int"]["input"];
  merchantId: Scalars["Int"]["input"];
  orderDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  orderItems: Array<OrderItemInput>;
  original?: InputMaybe<Scalars["Boolean"]["input"]>;
  otherId?: InputMaybe<Scalars["String"]["input"]>;
  paymentType?: InputMaybe<PaymentType>;
  previousOrderId?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  returnAmount?: InputMaybe<Scalars["Decimal"]["input"]>;
  returnOrderItems?: InputMaybe<Array<OrderItemInput>>;
  type?: InputMaybe<OrderType>;
  weight?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type CreateOrderItemInput = {
  count: Scalars["Int"]["input"];
  itemVariantId: Scalars["Int"]["input"];
  orderId: Scalars["Int"]["input"];
  partialCount?: InputMaybe<Scalars["Int"]["input"]>;
  unitDiscount: Scalars["Decimal"]["input"];
  unitPrice: Scalars["Decimal"]["input"];
};

export type CreateOrderRelationInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateRequestInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateRequestStatusHistoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateReturnPackageHistoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateReturnPackageInput = {
  orderItemIds: Array<Scalars["Int"]["input"]>;
  toInventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  toMerchantId?: InputMaybe<Scalars["Int"]["input"]>;
  type: ReturnPackageType;
};

export type CreateRolesInput = {
  roles: Array<Scalars["Int"]["input"]>;
};

export type CreateSheetOrderStatusHistoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateShopifyOrderInput = {
  childOrder?: InputMaybe<CreateShopifyOrderInput>;
  createdAt: Scalars["DateTime"]["input"];
  currencyCode: Scalars["String"]["input"];
  customerDetails: CustomerShopifyInput;
  fullyPaid: Scalars["Boolean"]["input"];
  id: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  orderItems: Array<OrderItemShopifyInput>;
  orderType: Scalars["String"]["input"];
  paymentGatewayNames: Array<Scalars["String"]["input"]>;
  previousOrderId?: InputMaybe<Scalars["String"]["input"]>;
  shippingDetails: AddressShopifyInput;
  synced: Scalars["Boolean"]["input"];
  totalPrice: Scalars["String"]["input"];
};

export type CreateShopifyOrderListInput = {
  merchantId: Scalars["Int"]["input"];
  orders: Array<CreateShopifyOrderInput>;
};

export type CreateShopifySessionInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["input"];
};

export type CreateUserInput = {
  birthdate: Scalars["DateTime"]["input"];
  email: Scalars["String"]["input"];
  employeeInfo?: InputMaybe<CreateEmployeeInput>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  type: UserType;
};

export type CreateVariantOptionInput = {
  colorCode?: InputMaybe<Scalars["String"]["input"]>;
  value: Scalars["String"]["input"];
};

export type Customer = {
  __typename?: "Customer";
  details?: Maybe<MerchantCustomer>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  nameSuggestions: Array<MerchantCustomer>;
  phone?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerDetailsArgs = {
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CustomerNameSuggestionsArgs = {
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CustomerPage = {
  __typename?: "CustomerPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Customer>;
};

export type CustomerShopifyInput = {
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  verifiedEmail: Scalars["Boolean"]["input"];
};

export type DeliverReturnPackageInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type Discount = {
  __typename?: "Discount";
  createdAt: Scalars["DateTime"]["output"];
  endDiscount: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  startDiscount: Scalars["DateTime"]["output"];
  type: DiscountType;
};

export enum DiscountType {
  Fixed = "fixed",
  FreeShipping = "freeShipping",
  Percentage = "percentage",
}

export type DomesticGovernorate = {
  __typename?: "DomesticGovernorate";
  arabicName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type DomesticShipping = {
  __typename?: "DomesticShipping";
  base: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  extra: Scalars["Decimal"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  post: Scalars["Decimal"]["output"];
  total: Scalars["Decimal"]["output"];
  vat: Scalars["Decimal"]["output"];
};

export type DomesticZone = {
  __typename?: "DomesticZone";
  governorateId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  nameAr: Scalars["String"]["output"];
};

export type Employee = {
  __typename?: "Employee";
  commission: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  salary: Scalars["Decimal"]["output"];
  type: EmployeeType;
  user: User;
};

/** Types of employees in the organization */
export enum EmployeeType {
  Admin = "admin",
  Courier = "courier",
  CustomerService = "customerService",
  Finance = "finance",
  Inventory = "inventory",
}

export type EventListenObject = {
  __typename?: "EventListenObject";
  message: Scalars["String"]["output"];
};

export enum ExpenseType {
  Advertising = "advertising",
  CleaningServices = "cleaningServices",
  CourierComission = "courierComission",
  DeliveryExpenses = "deliveryExpenses",
  EquipmentPurchase = "equipmentPurchase",
  Fuel = "fuel",
  Insurance = "insurance",
  Interest = "interest",
  InternetServices = "internetServices",
  LegalFees = "legalFees",
  LoanRepayments = "loanRepayments",
  Maintenance = "maintenance",
  Marketing = "marketing",
  MembershipFees = "membershipFees",
  Miscellaneous = "miscellaneous",
  OfficeEquipment = "officeEquipment",
  OfficeFurniture = "officeFurniture",
  OfficeRent = "officeRent",
  OfficeSupplies = "officeSupplies",
  PackagingMaterials = "packagingMaterials",
  PostalFees = "postalFees",
  ProfessionalDevelopment = "professionalDevelopment",
  ProfessionalServices = "professionalServices",
  Rent = "rent",
  Salary = "salary",
  SalaryBonus = "salaryBonus",
  SalaryOvertime = "salaryOvertime",
  SecurityServices = "securityServices",
  SoftwareSubscriptions = "softwareSubscriptions",
  Taxes = "taxes",
  Telecommunication = "telecommunication",
  Training = "training",
  TravelExpenses = "travelExpenses",
  Utilities = "utilities",
  VehicleLease = "vehicleLease",
  VehicleMaintenance = "vehicleMaintenance",
  WarehouseRent = "warehouseRent",
  WasteDisposal = "wasteDisposal",
}

export type ExpensesPage = {
  __typename?: "ExpensesPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Expense>;
};

export enum FinancialAccountType {
  Bank = "bank",
  Department = "department",
  Hub = "hub",
  Merchant = "merchant",
  User = "user",
}

export type FinancialAccountsPage = {
  __typename?: "FinancialAccountsPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<FinancialAccount>;
};

export type FinancialTotalInput = {
  category?: InputMaybe<TransactionCategory>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  statuses?: InputMaybe<Array<TransactionStatusType>>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type FinancialTransactionPage = {
  __typename?: "FinancialTransactionPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<FinancialTransaction>;
};

export type FinancialTransactionPaginationInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  fromAccountId?: InputMaybe<Scalars["Int"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  fromMyAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  myHubOnly?: Scalars["Boolean"]["input"];
  otherAccountId?: InputMaybe<Scalars["Int"]["input"]>;
  paginateById?: InputMaybe<Scalars["Boolean"]["input"]>;
  sheetOrderId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TransactionStatusType>;
  toAccountId?: InputMaybe<Scalars["Int"]["input"]>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  type?: InputMaybe<TransactionType>;
};

export type FinancialTransactionTotal = {
  __typename?: "FinancialTransactionTotal";
  count: Scalars["Int"]["output"];
  currency?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["Decimal"]["output"]>;
};

export type FindCustomerInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  myCustomers?: Scalars["Boolean"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type FindInventoryInput = {
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FindItemsWithShopifyIdInput = {
  ids: Array<Scalars["String"]["input"]>;
};

export type Hub = {
  __typename?: "Hub";
  createdAt: Scalars["DateTime"]["output"];
  governorateId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  location?: Maybe<Scalars["GraphqlPoint"]["output"]>;
  name: Scalars["String"]["output"];
  users: Array<User>;
};

export type HubsPage = {
  __typename?: "HubsPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Hub>;
};

export type ImageInput = {
  url: Scalars["String"]["input"];
};

export type ImageNodes = {
  nodes: Array<ImageInput>;
};

export type ImportNewItemInput = {
  ballotId?: InputMaybe<Scalars["Int"]["input"]>;
  ballotLevel?: InputMaybe<Scalars["Int"]["input"]>;
  ballotName?: InputMaybe<Scalars["String"]["input"]>;
  boxId?: InputMaybe<Scalars["Int"]["input"]>;
  boxName?: InputMaybe<Scalars["String"]["input"]>;
  count: Scalars["Int"]["input"];
  inventoryId: Scalars["Int"]["input"];
  itemVariantId: Scalars["Int"]["input"];
  minCount?: Scalars["Int"]["input"];
  ownedByOneMerchant?: InputMaybe<Scalars["Boolean"]["input"]>;
  rackId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type InventoryPage = {
  __typename?: "InventoryPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Inventory>;
};

export type InventoryRent = {
  __typename?: "InventoryRent";
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  lastBill?: Maybe<Scalars["DateTime"]["output"]>;
  lastModified: Scalars["DateTime"]["output"];
  merchantId: Scalars["Int"]["output"];
  pricePerUnit: Scalars["Decimal"]["output"];
  sqaureMeter?: Maybe<Scalars["Decimal"]["output"]>;
  startDate: Scalars["DateTime"]["output"];
  type: InventoryRentType;
};

export type InventoryRentTransaction = {
  __typename?: "InventoryRentTransaction";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  merchantId: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  type: InventoryRentType;
};

export type InventoryRentTransactionPage = {
  __typename?: "InventoryRentTransactionPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<InventoryRentTransaction>;
};

export type InventoryRentTransactionPageInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  afterDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Types of inventory rent */
export enum InventoryRentType {
  Ballot = "ballot",
  Box = "box",
  Inventory = "inventory",
  Item = "item",
  Meter = "meter",
  Order = "order",
  Rack = "rack",
}

export type InventoryReturn = {
  __typename?: "InventoryReturn";
  createdAt: Scalars["DateTime"]["output"];
  hubId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  inventoryId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  orderItem: OrderItem;
  orderItemId: Scalars["Int"]["output"];
  packageId?: Maybe<Scalars["Int"]["output"]>;
  restockedToId?: Maybe<Scalars["Int"]["output"]>;
  status: InventoryReturnStatus;
};

export type InventoryReturnPage = {
  __typename?: "InventoryReturnPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Order>;
};

export enum InventoryReturnStatus {
  Idle = "idle",
  ReturnedToBox = "returnedToBox",
}

export type ItemCountInput = {
  count: Scalars["Int"]["input"];
  id: Scalars["Int"]["input"];
  type?: InputMaybe<ItemHistoryEnum>;
};

/** Types of item history */
export enum ItemHistoryEnum {
  Export = "export",
  Import = "import",
  OrderPick = "orderPick",
  OrderReturn = "orderReturn",
  Return = "return",
}

export type ItemHistoryPage = {
  __typename?: "ItemHistoryPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<InventoryItemHistory>;
};

export type ItemInBoxPage = {
  __typename?: "ItemInBoxPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<ItemInBox>;
};

export type ItemInBoxPageInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  inventoryIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ItemInput = {
  createdAt: Scalars["DateTime"]["input"];
  currency: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  itemVariants: Array<ItemVariantInput>;
  lastModified: Scalars["DateTime"]["input"];
  merchantId: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
  shopifyId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ItemPage = {
  __typename?: "ItemPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Item>;
};

export type ItemReturn = {
  __typename?: "ItemReturn";
  count: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  hubId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  merchantId: Scalars["Int"]["output"];
  orderItem: OrderItem;
  orderItemId: Scalars["Int"]["output"];
  packageId?: Maybe<Scalars["Int"]["output"]>;
};

export type ItemReturnHistory = {
  __typename?: "ItemReturnHistory";
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["output"];
};

export type ItemReturnPage = {
  __typename?: "ItemReturnPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Order>;
};

export type ItemVariant = {
  __typename?: "ItemVariant";
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  imageUrl: Scalars["String"]["output"];
  isEnabled: Scalars["Boolean"]["output"];
  item: Item;
  itemId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchant: Merchant;
  merchantId: Scalars["Int"]["output"];
  merchantSku: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  price: Scalars["Decimal"]["output"];
  selectedOptions: Array<ItemVariantOption>;
  shopifyId?: Maybe<Scalars["String"]["output"]>;
  sku: Scalars["String"]["output"];
  weight?: Maybe<Scalars["Decimal"]["output"]>;
};

export type ItemVariantInput = {
  deletedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["Int"]["input"];
  imageUrl: Scalars["String"]["input"];
  isEnabled: Scalars["Boolean"]["input"];
  itemId: Scalars["Int"]["input"];
  itemVariantOptions: Array<ItemVariantOptionInput>;
  merchantId: Scalars["Int"]["input"];
  merchantSku: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Decimal"]["input"];
  shopifyId?: InputMaybe<Scalars["String"]["input"]>;
  sku: Scalars["String"]["input"];
  weight?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type ItemVariantOption = {
  __typename?: "ItemVariantOption";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  itemVariant: ItemVariant;
  itemVariantId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  variantName: VariantName;
  variantNameId: Scalars["Int"]["output"];
  variantOption: VariantOption;
  variantOptionId: Scalars["Int"]["output"];
};

export type ItemVariantOptionInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["Int"]["input"];
  itemVariant?: InputMaybe<ItemVariantInput>;
  itemVariantId?: InputMaybe<Scalars["Int"]["input"]>;
  lastModified?: InputMaybe<Scalars["DateTime"]["input"]>;
  variantName: Vname;
  variantNameId?: InputMaybe<Scalars["Int"]["input"]>;
  variantOption: Voption;
  variantOptionId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ItemVariantPage = {
  __typename?: "ItemVariantPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<ItemVariant>;
};

export type LinkCurrentCustomerAddressInput = {
  addressId: Scalars["Int"]["input"];
  customerId: Scalars["Int"]["input"];
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LinkMerchantCustomerInput = {
  customerId: Scalars["Int"]["input"];
  customerName: Scalars["String"]["input"];
  merchantId: Scalars["Int"]["input"];
};

export type LinkShopifyInput = {
  merchantId: Scalars["Int"]["input"];
  shop: Scalars["String"]["input"];
};

export type Listener = {
  __typename?: "Listener";
  /** Example field (placeholder) */
  exampleField: Scalars["Int"]["output"];
};

export type MerchantCustomer = {
  __typename?: "MerchantCustomer";
  createdAt: Scalars["DateTime"]["output"];
  customer?: Maybe<Customer>;
  customerId: Scalars["Int"]["output"];
  customerName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  merchantId: Scalars["Int"]["output"];
};

export type MerchantCustomerAddress = {
  __typename?: "MerchantCustomerAddress";
  addressId: Scalars["Int"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  details: CustomerAddress;
  merchantId: Scalars["Int"]["output"];
};

export type MerchantCustomerAddressPage = {
  __typename?: "MerchantCustomerAddressPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<MerchantCustomerAddress>;
};

export type MerchantCustomerAddressPaginationInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  customerId: Scalars["Int"]["input"];
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MerchantDomesticShipping = {
  __typename?: "MerchantDomesticShipping";
  createdAt: Scalars["DateTime"]["output"];
  domesticShipping?: Maybe<DomesticShipping>;
  domesticShippingId: Scalars["Int"]["output"];
  governorate: DomesticGovernorate;
  governorateId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchantId: Scalars["Int"]["output"];
  merchantJoined?: Maybe<Merchant>;
  orderType: OrderType;
};

export type MerchantPage = {
  __typename?: "MerchantPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Merchant>;
};

export type MerchantPaymentTransactionInput = {
  allTransactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  merchantIds: Array<Scalars["Int"]["input"]>;
  transactionIds: Array<Scalars["Int"]["input"]>;
};

export type MerchantVisit = {
  __typename?: "MerchantVisit";
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  fromDate: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchantId: Scalars["Int"]["output"];
  status: MerchantVisitStatus;
  toDate: Scalars["DateTime"]["output"];
  type: MerchantVisitType;
};

export type MerchantVisitHistory = {
  __typename?: "MerchantVisitHistory";
  createdAt: Scalars["DateTime"]["output"];
  status: MerchantVisitStatus;
  visitId: Scalars["Int"]["output"];
};

export enum MerchantVisitStatus {
  AssignedToCourier = "assignedToCourier",
  Canceled = "canceled",
  Completed = "completed",
  OnTheWay = "onTheWay",
  Rescheduled = "rescheduled",
  Returned = "returned",
  Scheduled = "scheduled",
  SuppliesDelivered = "suppliesDelivered",
}

export enum MerchantVisitType {
  OrderPickup = "orderPickup",
  OrderReturns = "orderReturns",
  SupplyPickup = "supplyPickup",
}

export type Mutation = {
  __typename?: "Mutation";
  addOrdersToCourierSheet: Scalars["JSONObject"]["output"];
  addRackLevels: Scalars["JSONObject"]["output"];
  assignMerchantToInventory: Scalars["JSONObject"]["output"];
  assignPackagesToCourier: Scalars["JSONObject"]["output"];
  completeMerchantPayments: Scalars["JSONObject"]["output"];
  createBallot: Ballot;
  createBox: Box;
  createCompoundMerchantItems: Scalars["JSONObject"]["output"];
  createCourierSheet: Scalars["JSONObject"]["output"];
  createCustomer: Scalars["JSONObject"]["output"];
  createDiscount: Discount;
  createDomesticZone: DomesticZone;
  createEmployee: Employee;
  createExpense: Scalars["JSONObject"]["output"];
  createFinancialAccount: Scalars["JSONObject"]["output"];
  createHub: Scalars["JSONObject"]["output"];
  createInventory: Scalars["JSONObject"]["output"];
  createInventoryHistory: InventoryItemHistory;
  createInventoryRent: Scalars["JSON"]["output"];
  createInventoryRentTransaction: InventoryRentTransaction;
  createInventorySupport: InventorySupport;
  createItemInBox: ItemInBox;
  createItemReturnHistory: ItemReturnHistory;
  createMerchant?: Maybe<Scalars["Int"]["output"]>;
  createMerchantDomesticShipping: Scalars["JSONObject"]["output"];
  createMerchantItemSingles: Scalars["Boolean"]["output"];
  createMerchantVisit: MerchantVisit;
  createMerchantVisitHistory: MerchantVisitHistory;
  createNewCustomerAddress: Scalars["Int"]["output"];
  createOrder: Scalars["JSONObject"]["output"];
  createOrderItem: OrderItem;
  createOrderRelation: OrderRelation;
  createRequest: Request;
  createRequestStatusHistory: RequestStatusHistory;
  createReturnPackage: Scalars["JSONObject"]["output"];
  createReturnPackageHistory: ReturnPackageHistory;
  createRole: Role;
  createSheetOrderStatusHistory: SheetOrderStatusHistory;
  createShopifyOrders: Scalars["JSONObject"]["output"];
  createShopifySession: ShopifySession;
  createUser: Scalars["JSON"]["output"];
  deleteCourierSheet: Scalars["JSONObject"]["output"];
  deliverInventoryPackage: Scalars["JSONObject"]["output"];
  exportItem: Scalars["Boolean"]["output"];
  importItem: Scalars["Boolean"]["output"];
  importNewItem: Scalars["JSONObject"]["output"];
  linkCurrentCustomerAddress: Scalars["Boolean"]["output"];
  linkMerchantCustomer: Scalars["Boolean"]["output"];
  linkShopToMerchant: Scalars["JSONObject"]["output"];
  processMerchantPayments: Scalars["JSONObject"]["output"];
  removeBallot: Ballot;
  removeBox: Box;
  removeDiscount: Discount;
  removeDomesticZone: DomesticZone;
  removeEmployee: Employee;
  removeFinancialAccount: FinancialAccount;
  removeInventory: Inventory;
  removeInventoryHistory: InventoryItemHistory;
  removeInventoryRent: InventoryRent;
  removeInventoryRentTransaction: InventoryRentTransaction;
  removeInventoryReturn: InventoryReturn;
  removeInventorySupport: InventorySupport;
  removeItemInBox: ItemInBox;
  removeItemReturnHistory: ItemReturnHistory;
  removeListener: Listener;
  removeMerchantAssignmentFromInventory: Scalars["JSONObject"]["output"];
  removeMerchantCustomer: MerchantCustomer;
  removeMerchantCustomerAddress: MerchantCustomerAddress;
  removeMerchantVisit: MerchantVisit;
  removeMerchantVisitHistory: MerchantVisitHistory;
  removeOrder: Order;
  removeOrderItem: OrderItem;
  removeOrderRelation: OrderRelation;
  removeRack: Rack;
  removeRequest: Request;
  removeRequestStatusHistory: RequestStatusHistory;
  removeReturnPackageHistory: ReturnPackageHistory;
  removeRole: Role;
  removeSheetOrder: SheetOrder;
  removeSheetOrderStatusHistory: SheetOrderStatusHistory;
  removeShopSubscription: Scalars["JSONObject"]["output"];
  removeShopifySession: ShopifySession;
  removeUser: Scalars["Boolean"]["output"];
  removeUserRole: UserRole;
  requestOrderReturn: Scalars["JSONObject"]["output"];
  sendAnyFinancialTransaction: Scalars["JSONObject"]["output"];
  sendFinancialTransaction: Scalars["JSONObject"]["output"];
  signIn: UserTokenResponse;
  signInFromShopify: Scalars["JSONObject"]["output"];
  syncShopifyProducts: Scalars["JSONObject"]["output"];
  transferAnyCourierCollectionFunds: Scalars["JSONObject"]["output"];
  transferCourierCollectionFunds: Scalars["JSONObject"]["output"];
  transferReturnPackage: Scalars["JSONObject"]["output"];
  updateAnyFinancialTransaction: Scalars["JSONObject"]["output"];
  updateBallotName: Scalars["JSONObject"]["output"];
  updateBox: Box;
  updateBoxName: Scalars["JSONObject"]["output"];
  updateCourierSheet: Scalars["JSONObject"]["output"];
  updateDiscount: Discount;
  updateDomesticZone: DomesticZone;
  updateEmployee: Employee;
  updateEmployeeInfo: Scalars["JSONObject"]["output"];
  updateFailedOrderStatus: Scalars["JSONObject"]["output"];
  updateFinancialAccount: Scalars["JSONObject"]["output"];
  updateFinancialTransaction: Scalars["JSONObject"]["output"];
  updateHub: Scalars["JSONObject"]["output"];
  updateInventory: Inventory;
  updateInventoryHistory: InventoryItemHistory;
  updateInventoryRent: Scalars["JSON"]["output"];
  updateInventoryRentTransaction: InventoryRentTransaction;
  updateInventorySupport: InventorySupport;
  updateItemReturnHistory: ItemReturnHistory;
  updateListener: Listener;
  updateMerchant: Scalars["JSONObject"]["output"];
  updateMerchantCustomerAddress: MerchantCustomerAddress;
  updateMerchantDomesticShipping: Scalars["JSONObject"]["output"];
  updateMerchantItem: Scalars["JSONObject"]["output"];
  updateMerchantVisit: MerchantVisit;
  updateMerchantVisitHistory: MerchantVisitHistory;
  updateMyInfo: Scalars["Boolean"]["output"];
  updateOrderItem: OrderItem;
  updateOrderRelation: OrderRelation;
  updateOrderStatus: Scalars["JSONObject"]["output"];
  updateOrdersStatus: Scalars["JSONObject"]["output"];
  updateRackName: Scalars["JSONObject"]["output"];
  updateRequest: Request;
  updateRequestStatusHistory: RequestStatusHistory;
  updateReturnPackageHistory: ReturnPackageHistory;
  updateRole: Role;
  updateSheetOrderStatusHistory: SheetOrderStatusHistory;
  updateShopifySession: ShopifySession;
  updateUserRoles: Scalars["Boolean"]["output"];
  updateUserRolesOptimized: Scalars["Boolean"]["output"];
  uploadExcelFile: Scalars["JSONObject"]["output"];
  webCreateOrder: Scalars["JSONObject"]["output"];
};

export type MutationAddOrdersToCourierSheetArgs = {
  input: AddOrdersToCourierSheetInput;
};

export type MutationAddRackLevelsArgs = {
  input: AddRackLevelsInput;
};

export type MutationAssignMerchantToInventoryArgs = {
  input: AssignMerchantToInventoryInput;
};

export type MutationAssignPackagesToCourierArgs = {
  input: AssignPackageToCourierInput;
};

export type MutationCompleteMerchantPaymentsArgs = {
  input: CompleteMerchantPaymentInput;
};

export type MutationCreateBallotArgs = {
  createBallotInput: CreateBallotInput;
};

export type MutationCreateBoxArgs = {
  createBoxInput: CreateBoxInput;
};

export type MutationCreateCompoundMerchantItemsArgs = {
  input: CreateMerchantItemsInput;
};

export type MutationCreateCourierSheetArgs = {
  input: CreateCourierSheetInput;
};

export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};

export type MutationCreateDiscountArgs = {
  createDiscountInput: CreateDiscountInput;
};

export type MutationCreateDomesticZoneArgs = {
  createDomesticZoneInput: CreateDomesticZoneInput;
};

export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput;
};

export type MutationCreateExpenseArgs = {
  input: CreateExpenseInput;
};

export type MutationCreateFinancialAccountArgs = {
  input: CreateFinancialAccountInput;
};

export type MutationCreateHubArgs = {
  input: CreateHubInput;
};

export type MutationCreateInventoryArgs = {
  input: CreateInventoryInput;
};

export type MutationCreateInventoryHistoryArgs = {
  createInventoryHistoryInput: CreateInventoryItemHistoryInput;
};

export type MutationCreateInventoryRentArgs = {
  input: CreateInventoryRentInput;
};

export type MutationCreateInventoryRentTransactionArgs = {
  createInventoryRentTransactionInput: CreateInventoryRentTransactionInput;
};

export type MutationCreateInventorySupportArgs = {
  createInventorySupportInput: CreateInventorySupportInput;
};

export type MutationCreateItemInBoxArgs = {
  createItemInBoxInput: CreateItemInBoxInput;
};

export type MutationCreateItemReturnHistoryArgs = {
  createItemReturnHistoryInput: CreateItemReturnHistoryInput;
};

export type MutationCreateMerchantArgs = {
  input: CreateMerchantInput;
};

export type MutationCreateMerchantDomesticShippingArgs = {
  input: CreateMerchantShippingListInput;
};

export type MutationCreateMerchantItemSinglesArgs = {
  input: Array<SingleItemRefInput>;
};

export type MutationCreateMerchantVisitArgs = {
  createMerchantVisitInput: CreateMerchantVisitInput;
};

export type MutationCreateMerchantVisitHistoryArgs = {
  createMerchantVisitHistoryInput: CreateMerchantVisitHistoryInput;
};

export type MutationCreateNewCustomerAddressArgs = {
  input: CreateCustomerAddressInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOrderItemArgs = {
  createOrderItemInput: CreateOrderItemInput;
};

export type MutationCreateOrderRelationArgs = {
  createOrderRelationInput: CreateOrderRelationInput;
};

export type MutationCreateRequestArgs = {
  createRequestInput: CreateRequestInput;
};

export type MutationCreateRequestStatusHistoryArgs = {
  createRequestStatusHistoryInput: CreateRequestStatusHistoryInput;
};

export type MutationCreateReturnPackageArgs = {
  input: CreateReturnPackageInput;
};

export type MutationCreateReturnPackageHistoryArgs = {
  createReturnPackageHistoryInput: CreateReturnPackageHistoryInput;
};

export type MutationCreateRoleArgs = {
  createRoleInput: CreateRolesInput;
};

export type MutationCreateSheetOrderStatusHistoryArgs = {
  createSheetOrderStatusHistoryInput: CreateSheetOrderStatusHistoryInput;
};

export type MutationCreateShopifyOrdersArgs = {
  input: CreateShopifyOrderListInput;
};

export type MutationCreateShopifySessionArgs = {
  createShopifySessionInput: CreateShopifySessionInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteCourierSheetArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeliverInventoryPackageArgs = {
  input: DeliverReturnPackageInput;
};

export type MutationExportItemArgs = {
  input: ItemCountInput;
};

export type MutationImportItemArgs = {
  input: ItemCountInput;
};

export type MutationImportNewItemArgs = {
  input: ImportNewItemInput;
};

export type MutationLinkCurrentCustomerAddressArgs = {
  input: LinkCurrentCustomerAddressInput;
};

export type MutationLinkMerchantCustomerArgs = {
  input: LinkMerchantCustomerInput;
};

export type MutationLinkShopToMerchantArgs = {
  input: LinkShopifyInput;
};

export type MutationProcessMerchantPaymentsArgs = {
  input: MerchantPaymentTransactionInput;
};

export type MutationRemoveBallotArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveBoxArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveDiscountArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveDomesticZoneArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveEmployeeArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveFinancialAccountArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventoryHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventoryRentArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventoryRentTransactionArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventoryReturnArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveInventorySupportArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveItemInBoxArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveItemReturnHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveListenerArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveMerchantAssignmentFromInventoryArgs = {
  input: RemoveMerchantAssignmentInput;
};

export type MutationRemoveMerchantCustomerArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveMerchantCustomerAddressArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveMerchantVisitArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveMerchantVisitHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveOrderItemArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveOrderRelationArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveRackArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveRequestArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveRequestStatusHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveReturnPackageHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveRoleArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveSheetOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveSheetOrderStatusHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveShopSubscriptionArgs = {
  shop: Scalars["String"]["input"];
};

export type MutationRemoveShopifySessionArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["String"]["input"];
};

export type MutationRemoveUserRoleArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationRequestOrderReturnArgs = {
  input: RequestOrderReturnInput;
};

export type MutationSendAnyFinancialTransactionArgs = {
  input: SendFinancialTransactionInput;
};

export type MutationSendFinancialTransactionArgs = {
  input: SendMyFinancialTransactionInput;
};

export type MutationSignInArgs = {
  input: TokenRequestInput;
};

export type MutationSignInFromShopifyArgs = {
  input: SignInByEmailInput;
};

export type MutationSyncShopifyProductsArgs = {
  input: SyncShopifyProductsInput;
};

export type MutationTransferAnyCourierCollectionFundsArgs = {
  input: TransferCourierCollectionInput;
};

export type MutationTransferCourierCollectionFundsArgs = {
  input: TransferCourierCollectionInput;
};

export type MutationTransferReturnPackageArgs = {
  input: TransferReturnPackageInput;
};

export type MutationUpdateAnyFinancialTransactionArgs = {
  input: UpdateFinancialTransactionInput;
};

export type MutationUpdateBallotNameArgs = {
  input: UpdateBallotNameInput;
};

export type MutationUpdateBoxArgs = {
  updateBoxInput: UpdateBoxInput;
};

export type MutationUpdateBoxNameArgs = {
  input: UpdateBoxNameInput;
};

export type MutationUpdateCourierSheetArgs = {
  input: UpdateCourierSheetInput;
};

export type MutationUpdateDiscountArgs = {
  updateDiscountInput: UpdateDiscountInput;
};

export type MutationUpdateDomesticZoneArgs = {
  updateDomesticZoneInput: UpdateDomesticZoneInput;
};

export type MutationUpdateEmployeeArgs = {
  updateEmployeeInput: UpdateEmployeeInput;
};

export type MutationUpdateEmployeeInfoArgs = {
  input: UpdateEmployeeInput;
};

export type MutationUpdateFailedOrderStatusArgs = {
  input: UpdateFailedOrderStatusInput;
};

export type MutationUpdateFinancialAccountArgs = {
  input: UpdateFinancialAccountInput;
};

export type MutationUpdateFinancialTransactionArgs = {
  input: UpdateMyFinancialTransactionInput;
};

export type MutationUpdateHubArgs = {
  input: UpdateHubInput;
};

export type MutationUpdateInventoryArgs = {
  updateInventoryInput: UpdateInventoryInput;
};

export type MutationUpdateInventoryHistoryArgs = {
  updateInventoryHistoryInput: UpdateInventoryItemHistoryInput;
};

export type MutationUpdateInventoryRentArgs = {
  input: UpdateInventoryRentInput;
};

export type MutationUpdateInventoryRentTransactionArgs = {
  updateInventoryRentTransactionInput: UpdateInventoryRentTransactionInput;
};

export type MutationUpdateInventorySupportArgs = {
  updateInventorySupportInput: UpdateInventorySupportInput;
};

export type MutationUpdateItemReturnHistoryArgs = {
  updateItemReturnHistoryInput: UpdateItemReturnHistoryInput;
};

export type MutationUpdateListenerArgs = {
  updateListenerInput: UpdateListenerInput;
};

export type MutationUpdateMerchantArgs = {
  input: UpdateMerchantInput;
};

export type MutationUpdateMerchantCustomerAddressArgs = {
  updateMerchantCustomerAddressInput: UpdateMerchantCustomerAddressInput;
};

export type MutationUpdateMerchantDomesticShippingArgs = {
  input: UpdateMerchantDomesticShippingInput;
};

export type MutationUpdateMerchantItemArgs = {
  input: UpdateMerchantItemInput;
};

export type MutationUpdateMerchantVisitArgs = {
  updateMerchantVisitInput: UpdateMerchantVisitInput;
};

export type MutationUpdateMerchantVisitHistoryArgs = {
  updateMerchantVisitHistoryInput: UpdateMerchantVisitHistoryInput;
};

export type MutationUpdateMyInfoArgs = {
  updateInfo: UpdateUserInput;
};

export type MutationUpdateOrderItemArgs = {
  updateOrderItemInput: UpdateOrderItemInput;
};

export type MutationUpdateOrderRelationArgs = {
  updateOrderRelationInput: UpdateOrderRelationInput;
};

export type MutationUpdateOrderStatusArgs = {
  input: UpdateCourierOrderStatusInput;
};

export type MutationUpdateOrdersStatusArgs = {
  input: UpdateOrderStatusInput;
};

export type MutationUpdateRackNameArgs = {
  input: UpdateRackNameInput;
};

export type MutationUpdateRequestArgs = {
  updateRequestInput: UpdateRequestInput;
};

export type MutationUpdateRequestStatusHistoryArgs = {
  updateRequestStatusHistoryInput: UpdateRequestStatusHistoryInput;
};

export type MutationUpdateReturnPackageHistoryArgs = {
  updateReturnPackageHistoryInput: UpdateReturnPackageHistoryInput;
};

export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
};

export type MutationUpdateSheetOrderStatusHistoryArgs = {
  updateSheetOrderStatusHistoryInput: UpdateSheetOrderStatusHistoryInput;
};

export type MutationUpdateShopifySessionArgs = {
  updateShopifySessionInput: UpdateShopifySessionInput;
};

export type MutationUpdateUserRolesArgs = {
  input: UpdateUserRoleInput;
};

export type MutationUpdateUserRolesOptimizedArgs = {
  input: UpdateUserRoleInputAdvanced;
};

export type MutationUploadExcelFileArgs = {
  base64File: Scalars["String"]["input"];
};

export type MutationWebCreateOrderArgs = {
  input: CreateOrderInput;
};

export type OrderHistoryPage = {
  __typename?: "OrderHistoryPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<OrderHistory>;
};

export type OrderItemInput = {
  count: Scalars["Int"]["input"];
  itemVariantId: Scalars["Int"]["input"];
};

export type OrderItemShopifyInput = {
  count: Scalars["Int"]["input"];
  id: Scalars["String"]["input"];
  total: Scalars["String"]["input"];
  variantId: Scalars["String"]["input"];
};

export type OrderPage = {
  __typename?: "OrderPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Order>;
};

export enum OrderStatusEnum {
  ArrivedAtHub = "arrivedAtHub",
  ArrivedAtSortFacilities = "arrivedAtSortFacilities",
  AssignedToCourier = "assignedToCourier",
  Cancelled = "cancelled",
  Delivered = "delivered",
  Dispatched = "dispatched",
  FailedDeliveryAttempt = "failedDeliveryAttempt",
  Fulfilled = "fulfilled",
  HandPicked = "handPicked",
  Idle = "idle",
  Lost = "lost",
  PartiallyDelivered = "partiallyDelivered",
  PartiallyReturned = "partiallyReturned",
  PickedUp = "pickedUp",
  Postponed = "postponed",
  Returned = "returned",
  Transferring = "transferring",
}

/** Types of orders placed by customers */
export enum OrderType {
  Delivery = "delivery",
  Exchange = "exchange",
  FreeShipping = "freeShipping",
  Return = "return",
}

export type PaginateCourierCollectionTransactionsInput = {
  accountIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PaginateCourierSheetInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  courierId?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  statuses?: InputMaybe<Array<CourierSheetStatus>>;
};

export type PaginateExpensesInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  types?: InputMaybe<Array<ExpenseType>>;
};

export type PaginateFinancialAccountsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaginateHubsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PaginateInventoryInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaginateInventoryReturnInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  packageId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<InventoryReturnStatus>;
};

export type PaginateItemHistoryInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  itemInBoxId: Scalars["Int"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PaginateItemReturnsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  assignedToPackage?: InputMaybe<Scalars["Boolean"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  packageId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PaginateItemVariantsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaginateMerchantPaymentTransactionsInput = {
  accountIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  processing?: InputMaybe<Scalars["Boolean"]["input"]>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PaginateMerchantsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaginateOrderHistoryInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  orderId: Scalars["Int"]["input"];
};

export type PaginateOrderTransactionsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  orderId: Scalars["Int"]["input"];
};

export type PaginateOrdersInInventoryInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orderIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  statuses?: InputMaybe<Array<OrderStatusEnum>>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PaginateOrdersInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  courierIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  fromDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  governorateIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  isAsc?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  manifestStatuses?: InputMaybe<Array<CourierSheetStatus>>;
  merchantIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  orderIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  paymentTypes?: InputMaybe<Array<PaymentType>>;
  prioritySort?: InputMaybe<Scalars["Boolean"]["input"]>;
  statuses?: InputMaybe<Array<OrderStatusEnum>>;
  toDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  types?: InputMaybe<Array<OrderType>>;
};

export type PaginateRacksInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  invetoryIds: Array<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PaginateReturnPackageHistoryInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  packageId: Scalars["Int"]["input"];
};

export type PaginateReturnPackageInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  assigned?: InputMaybe<Scalars["Boolean"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  courierId?: InputMaybe<Scalars["Int"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ReturnPackageStatus>;
  toInventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  toMerchantId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<ReturnPackageType>;
};

export type PaginateUsersInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type PartialItemInput = {
  id: Scalars["Int"]["input"];
  partialCount: Scalars["Int"]["input"];
};

/** Types of payment methods */
export enum PaymentType {
  Card = "card",
  Cash = "cash",
}

export type PriceInput = {
  amount: Scalars["Decimal"]["input"];
  currencyCode: Scalars["String"]["input"];
};

export type PriceRangeV2Input = {
  maxVariantPrice: PriceInput;
  minVariantPrice: PriceInput;
};

export type ProductNodeInput = {
  description: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  images: ImageNodes;
  priceRangeV2: PriceRangeV2Input;
  title: Scalars["String"]["input"];
  variants: VariantNodes;
};

export type Query = {
  __typename?: "Query";
  CourierSheet: CourierSheet;
  ballot: Ballot;
  box: Box;
  calculateFinancialTransactionsTotal: FinancialTransactionTotal;
  countInventoryRentTransaction: Scalars["Int"]["output"];
  createMerchantToken: Scalars["JSONObject"]["output"];
  discount: Discount;
  employee: Employee;
  findAllDomesticGovernorates: Array<DomesticGovernorate>;
  findAllHubs: Array<Hub>;
  findAllZones: Array<DomesticZone>;
  findCustomer: CustomerPage;
  findItemsWithShopifyId: Array<Item>;
  findMerchantDomesticShippings: Array<MerchantDomesticShipping>;
  findMerchantInventoryRent?: Maybe<InventoryRent>;
  findOneHub: Hub;
  findOneInventory: Inventory;
  findOneMerchant: Merchant;
  findOneOrder?: Maybe<Order>;
  findOneReturnPackage?: Maybe<ReturnPackage>;
  findOneZone: DomesticZone;
  findRoles: Array<Role>;
  findShop?: Maybe<Merchant>;
  findShopifyOrders: Array<Order>;
  findSimilarAddresses: Array<AddressSimilarityItem>;
  findSingleMerchantDomesticShipping: MerchantDomesticShipping;
  inventoryHistory: InventoryItemHistory;
  inventoryRentTransaction: InventoryRentTransaction;
  inventorySupport: InventorySupport;
  itemInBox: ItemInBox;
  itemReturnHistory: ItemReturnHistory;
  listener: Listener;
  listeners: Array<Listener>;
  merchantVisit: MerchantVisit;
  merchantVisitHistory: MerchantVisitHistory;
  myCourierSheet: CourierSheet;
  orderItem: OrderItem;
  orderRelation: OrderRelation;
  paginateAddresses: MerchantCustomerAddressPage;
  paginateBallots: BallotPage;
  paginateBoxes: BoxPage;
  paginateCourierCollectionTransactions: FinancialTransactionPage;
  paginateCourierSheets: CourierSheetPage;
  paginateCouriers: UserPage;
  paginateExpenses: ExpensesPage;
  paginateFinancialAccounts: FinancialAccountsPage;
  paginateFinancialTransaction: FinancialTransactionPage;
  paginateHubs: HubsPage;
  paginateInventories: InventoryPage;
  paginateInventoryRentTransaction: InventoryRentTransactionPage;
  paginateInventoryReturns: InventoryReturnPage;
  paginateItemHistory: ItemHistoryPage;
  paginateItemInBox: ItemInBoxPage;
  paginateItemReturns: ItemReturnPage;
  paginateItemVariants: ItemVariantPage;
  paginateItems: ItemPage;
  paginateMerchantPaymentTransactions: FinancialTransactionPage;
  paginateMerchants: MerchantPage;
  paginateOrderHistory: OrderHistoryPage;
  paginateOrderTransactionsHistory: FinancialTransactionPage;
  paginateOrders: OrderPage;
  paginateOrdersInInventory: OrderPage;
  paginateRacks: RacksPage;
  paginateReturnPackageHistory: ReturnPackageHistoryPage;
  paginateReturnPackages: ReturnPackagePage;
  paginateUsers: UserPage;
  request: Request;
  requestStatusHistory: RequestStatusHistory;
  returnPackageHistory: ReturnPackageHistory;
  role: Role;
  sendToEvent: EventListenObject;
  sheetOrder: SheetOrder;
  sheetOrderStatusHistory: SheetOrderStatusHistory;
  shopifySession: ShopifySession;
  sumInventoryRentTransaction: Scalars["Decimal"]["output"];
  testSheet: Scalars["Boolean"]["output"];
  userState: Scalars["Int"]["output"];
  webFindOneOrder?: Maybe<Order>;
  webPaginateOrders: OrderPage;
};

export type QueryCourierSheetArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryBallotArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryBoxArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryCalculateFinancialTransactionsTotalArgs = {
  input: FinancialTotalInput;
};

export type QueryCountInventoryRentTransactionArgs = {
  input: InventoryRentTransactionPageInput;
};

export type QueryDiscountArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryEmployeeArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryFindCustomerArgs = {
  input: FindCustomerInput;
};

export type QueryFindItemsWithShopifyIdArgs = {
  input: FindItemsWithShopifyIdInput;
};

export type QueryFindMerchantDomesticShippingsArgs = {
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFindMerchantInventoryRentArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryFindOneHubArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryFindOneInventoryArgs = {
  input: FindInventoryInput;
};

export type QueryFindOneMerchantArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryFindOneOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryFindOneReturnPackageArgs = {
  input: Scalars["Int"]["input"];
};

export type QueryFindOneZoneArgs = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type QueryFindShopArgs = {
  shop: Scalars["String"]["input"];
};

export type QueryFindShopifyOrdersArgs = {
  ids: Array<Scalars["String"]["input"]>;
};

export type QueryFindSimilarAddressesArgs = {
  input: CreateCustomerAddressInput;
};

export type QueryFindSingleMerchantDomesticShippingArgs = {
  input: FindMerchantDomesticShippingInput;
};

export type QueryInventoryHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryInventoryRentTransactionArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryInventorySupportArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryItemInBoxArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryItemReturnHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryListenerArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryMerchantVisitArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryMerchantVisitHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryOrderItemArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryOrderRelationArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryPaginateAddressesArgs = {
  input: MerchantCustomerAddressPaginationInput;
};

export type QueryPaginateBallotsArgs = {
  input: BallotPaginationInput;
};

export type QueryPaginateBoxesArgs = {
  input: BoxPaginationInput;
};

export type QueryPaginateCourierCollectionTransactionsArgs = {
  input: PaginateCourierCollectionTransactionsInput;
};

export type QueryPaginateCourierSheetsArgs = {
  input: PaginateCourierSheetInput;
};

export type QueryPaginateCouriersArgs = {
  input: CourierPageInput;
};

export type QueryPaginateExpensesArgs = {
  input: PaginateExpensesInput;
};

export type QueryPaginateFinancialAccountsArgs = {
  input: PaginateFinancialAccountsInput;
};

export type QueryPaginateFinancialTransactionArgs = {
  input: FinancialTransactionPaginationInput;
};

export type QueryPaginateHubsArgs = {
  input: PaginateHubsInput;
};

export type QueryPaginateInventoriesArgs = {
  input: PaginateInventoryInput;
};

export type QueryPaginateInventoryRentTransactionArgs = {
  input: InventoryRentTransactionPageInput;
};

export type QueryPaginateInventoryReturnsArgs = {
  input: PaginateInventoryReturnInput;
};

export type QueryPaginateItemHistoryArgs = {
  input: PaginateItemHistoryInput;
};

export type QueryPaginateItemInBoxArgs = {
  input: ItemInBoxPageInput;
};

export type QueryPaginateItemReturnsArgs = {
  input: PaginateItemReturnsInput;
};

export type QueryPaginateItemVariantsArgs = {
  input: PaginateItemVariantsInput;
};

export type QueryPaginateItemsArgs = {
  itemPageInput: PaginateItemsInput;
};

export type QueryPaginateMerchantPaymentTransactionsArgs = {
  input: PaginateMerchantPaymentTransactionsInput;
};

export type QueryPaginateMerchantsArgs = {
  input: PaginateMerchantsInput;
};

export type QueryPaginateOrderHistoryArgs = {
  input: PaginateOrderHistoryInput;
};

export type QueryPaginateOrderTransactionsHistoryArgs = {
  input: PaginateOrderTransactionsInput;
};

export type QueryPaginateOrdersArgs = {
  input: PaginateOrdersInput;
};

export type QueryPaginateOrdersInInventoryArgs = {
  input: PaginateOrdersInInventoryInput;
};

export type QueryPaginateRacksArgs = {
  input: PaginateRacksInput;
};

export type QueryPaginateReturnPackageHistoryArgs = {
  input: PaginateReturnPackageHistoryInput;
};

export type QueryPaginateReturnPackagesArgs = {
  input: PaginateReturnPackageInput;
};

export type QueryPaginateUsersArgs = {
  paginateUsersInput: PaginateUsersInput;
};

export type QueryRequestArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRequestStatusHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryReturnPackageHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRoleArgs = {
  id: Scalars["Int"]["input"];
};

export type QuerySheetOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type QuerySheetOrderStatusHistoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryShopifySessionArgs = {
  id: Scalars["Int"]["input"];
};

export type QuerySumInventoryRentTransactionArgs = {
  input: InventoryRentTransactionPageInput;
};

export type QueryUserStateArgs = {
  email: Scalars["String"]["input"];
};

export type QueryWebFindOneOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryWebPaginateOrdersArgs = {
  input: PaginateOrdersInput;
};

export type RacksPage = {
  __typename?: "RacksPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<Rack>;
};

export type RemoveMerchantAssignmentInput = {
  ballotIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  boxIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rackIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type RequestOrderReturnInput = {
  freeShipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  orderDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  orderId: Scalars["Int"]["input"];
  returnAmount?: InputMaybe<Scalars["Decimal"]["input"]>;
};

/** Status of requests in the system */
export enum RequestStatus {
  Accepted = "accepted",
  Expired = "expired",
  Pending = "pending",
  Read = "read",
  Rejected = "rejected",
  Sent = "sent",
}

/** Types of requests made to the system */
export enum RequestType {
  AccountUpdate = "accountUpdate",
  Announcement = "announcement",
  Appointment = "appointment",
  Authorization = "authorization",
  Confirmation = "confirmation",
  Feedback = "feedback",
  Inquiry = "inquiry",
  Invitation = "invitation",
  Invoice = "invoice",
  Marketing = "marketing",
  Notification = "notification",
  OrderProblem = "orderProblem",
  Other = "other",
  PasswordReset = "passwordReset",
  PaymentReminder = "paymentReminder",
  PolicyUpdate = "policyUpdate",
  Reminder = "reminder",
  Report = "report",
  Request = "request",
  Subscription = "subscription",
  Support = "support",
  Survey = "survey",
  TransactionUpdate = "transactionUpdate",
  Verification = "verification",
}

export type ReturnOrderUpdateInput = {
  amountCollected?: InputMaybe<Scalars["Decimal"]["input"]>;
  partialItems?: InputMaybe<Array<PartialItemInput>>;
  status: OrderStatusEnum;
};

export type ReturnPackage = {
  __typename?: "ReturnPackage";
  count: Scalars["Int"]["output"];
  courier?: Maybe<User>;
  courierId?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  hubId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  inventory?: Maybe<Inventory>;
  lastModified: Scalars["DateTime"]["output"];
  merchant?: Maybe<Merchant>;
  sku: Scalars["String"]["output"];
  status: ReturnPackageStatus;
  toInventoryId?: Maybe<Scalars["Int"]["output"]>;
  toMerchantId?: Maybe<Scalars["Int"]["output"]>;
  type: ReturnPackageType;
};

export type ReturnPackageHistory = {
  __typename?: "ReturnPackageHistory";
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  returnPackageId: Scalars["Int"]["output"];
  status: ReturnPackageStatus;
  transferredToId?: Maybe<Scalars["Int"]["output"]>;
};

export type ReturnPackageHistoryPage = {
  __typename?: "ReturnPackageHistoryPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<ReturnPackageHistory>;
};

export type ReturnPackagePage = {
  __typename?: "ReturnPackagePage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<ReturnPackage>;
};

export enum ReturnPackageStatus {
  AssignedToCourier = "assignedToCourier",
  Delivered = "delivered",
  Idle = "idle",
  Transferring = "transferring",
}

export enum ReturnPackageType {
  Inventory = "inventory",
  Merchant = "merchant",
}

export type Role = {
  __typename?: "Role";
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  type: RoleType;
};

export enum RoleType {
  Courier = "courier",
  Customer = "customer",
  Finance = "finance",
  Inventory = "inventory",
  Management = "management",
  Merchant = "merchant",
  Order = "order",
  Requests = "requests",
  ReturnPackage = "returnPackage",
  Super = "super",
}

export type SelectedOptionInput = {
  name: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type SendFinancialTransactionInput = {
  amount: Scalars["Decimal"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  fromAccountId: Scalars["Int"]["input"];
  receipt?: InputMaybe<Scalars["String"]["input"]>;
  sheetOrderId?: InputMaybe<Scalars["Int"]["input"]>;
  toAccountId: Scalars["Int"]["input"];
  type: TransactionType;
};

export type SendMyFinancialTransactionInput = {
  amount: Scalars["Decimal"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  receipt?: InputMaybe<Scalars["String"]["input"]>;
  sheetOrderId?: InputMaybe<Scalars["Int"]["input"]>;
  toAccountId: Scalars["Int"]["input"];
  type: TransactionType;
};

export enum SheetOrderStatus {
  AdminAccepted = "adminAccepted",
  AdminRejected = "adminRejected",
  FinanceAccepted = "financeAccepted",
  FinanceRejected = "financeRejected",
}

export enum ShippingStatus {
  Collected = "collected",
  Dismissed = "dismissed",
  NotCollected = "notCollected",
}

export type ShopifySession = {
  __typename?: "ShopifySession";
  accessToken: Scalars["String"]["output"];
  accountOwner: Scalars["Boolean"]["output"];
  collaborator: Scalars["Boolean"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified: Scalars["Boolean"]["output"];
  expires?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isOnline: Scalars["Boolean"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  shop: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type SignInByEmailInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SingleItemRefInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  colorHex?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl: Scalars["String"]["input"];
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  merchantSku?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  priceReference: Scalars["Int"]["input"];
  size?: InputMaybe<Scalars["String"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  listenToEvent: EventListenObject;
};

export type SyncShopifyProductsInput = {
  goodItems?: InputMaybe<Array<ProductNodeInput>>;
  invalidVariants?: InputMaybe<Array<VariantInput>>;
  itemsToAdd: Array<ProductNodeInput>;
  itemsToRemove: Array<ItemInput>;
  itemsToUpdate: Array<ProductNodeInput>;
  shopifyId: Scalars["String"]["input"];
  variantNamesToAdd: Array<Scalars["String"]["input"]>;
  variantOptionsToAdd: Array<Scalars["String"]["input"]>;
  variantsToAdd: Array<VariantInput>;
  variantsToRemove: Array<ItemVariantInput>;
  variantsToUpdate: Array<VariantInput>;
};

export type TokenRequestInput = {
  firebaseToken: Scalars["String"]["input"];
};

export enum TransactionCategory {
  CourierCollection = "courierCollection",
  MerchantOrderPayment = "merchantOrderPayment",
}

export enum TransactionStatusType {
  Cancelled = "cancelled",
  CancelledByReceiver = "cancelledByReceiver",
  CancelledBySender = "cancelledBySender",
  Completed = "completed",
  Failed = "failed",
  PendingInternal = "pendingInternal",
  PendingReceiver = "pendingReceiver",
  PendingSender = "pendingSender",
  Processing = "processing",
  ProcessingByReceiver = "processingByReceiver",
  ProcessingBySender = "processingBySender",
  Rejected = "rejected",
  RejectedByReceiver = "rejectedByReceiver",
  RejectedBySender = "rejectedBySender",
  Transferred = "transferred",
}

export enum TransactionType {
  Adjustment = "adjustment",
  Conversion = "conversion",
  CourierCancellation = "courierCancellation",
  CourierCollection = "courierCollection",
  CourierCollectionTransfer = "courierCollectionTransfer",
  Deposit = "deposit",
  Donation = "donation",
  Interest = "interest",
  InventoryRent = "inventoryRent",
  MerchantOrderPayment = "merchantOrderPayment",
  OrderCollection = "orderCollection",
  Other = "other",
  Payment = "payment",
  Refund = "refund",
  Reward = "reward",
  ShippingCollection = "shippingCollection",
  Subscription = "subscription",
  Taxes = "taxes",
  Transfer = "transfer",
  Withdrawal = "withdrawal",
}

export enum TransactionUpdateType {
  Cancel = "cancel",
  Complete = "complete",
  Fail = "fail",
  Process = "process",
  Reject = "reject",
}

export type TransferCourierCollectionInput = {
  allTransactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  toAccountId: Scalars["Int"]["input"];
  transactionIds?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type TransferReturnPackageInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  ids: Array<Scalars["Int"]["input"]>;
  transferredToId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateBallotNameInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateBoxInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateBoxNameInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateCompoundItemInput = {
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  merchantSku?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Decimal"]["input"]>;
  variantNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  variantOptionAttributes?: InputMaybe<Array<CreateItemVariantInput>>;
  variantOptions?: InputMaybe<Array<Array<CreateVariantOptionInput>>>;
};

export type UpdateCourierOrderStatusInput = {
  amountCollected?: InputMaybe<Scalars["Decimal"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  partialItems?: InputMaybe<Array<PartialItemInput>>;
  postponeDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  returnOrderUpdateInput?: InputMaybe<ReturnOrderUpdateInput>;
  sheetOrderId: Scalars["Int"]["input"];
  shippingCollected?: InputMaybe<Scalars["Boolean"]["input"]>;
  status: OrderStatusEnum;
};

export type UpdateCourierSheetInput = {
  asAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
  updateSheetOrders: Array<UpdateSheetOrdersInput>;
};

export type UpdateDiscountInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateDomesticZoneInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateEmployeeInput = {
  commission?: InputMaybe<Scalars["Decimal"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["String"]["input"];
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  salary?: InputMaybe<Scalars["Decimal"]["input"]>;
  type: EmployeeType;
};

export type UpdateFailedOrderStatusInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  postponeDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  status: OrderStatusEnum;
};

export type UpdateFinancialAccountInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateFinancialTransactionInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  receipt?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<TransactionUpdateType>;
};

export type UpdateHubInput = {
  governorateId?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
  location?: InputMaybe<Scalars["GraphqlPoint"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateInventoryInput = {
  ballotPerRack?: InputMaybe<Scalars["Int"]["input"]>;
  boxPerBallot?: InputMaybe<Scalars["Int"]["input"]>;
  hubId?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
  location?: InputMaybe<Scalars["GraphqlPoint"]["input"]>;
  module?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  numberOfRacks?: InputMaybe<Scalars["Int"]["input"]>;
  rackLevel?: InputMaybe<Scalars["Int"]["input"]>;
  zoneId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateInventoryItemHistoryInput = {
  amount?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  itemInBoxId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<ItemHistoryEnum>;
};

export type UpdateInventoryRentInput = {
  currency: Scalars["String"]["input"];
  merchantId: Scalars["Int"]["input"];
  pricePerUnit: Scalars["Decimal"]["input"];
  squareMeter?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type UpdateInventoryRentTransactionInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateInventorySupportInput = {
  governorateId?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
  inventoryId?: InputMaybe<Scalars["String"]["input"]>;
  zoneId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateItemReturnHistoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateListenerInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateMerchantCustomerAddressInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateMerchantDomesticShippingInput = {
  base?: InputMaybe<Scalars["Decimal"]["input"]>;
  id: Scalars["Int"]["input"];
  postDecimal?: InputMaybe<Scalars["Decimal"]["input"]>;
  total: Scalars["Decimal"]["input"];
  vatDecimal?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type UpdateMerchantInput = {
  address?: InputMaybe<CreateMerchantAddressInput>;
  addressId?: InputMaybe<Scalars["Int"]["input"]>;
  bankName?: InputMaybe<Scalars["String"]["input"]>;
  bankNumber?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  includesVat?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateMerchantItemInput = {
  item: UpdateCompoundItemInput;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateMerchantVisitHistoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateMerchantVisitInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateMyFinancialTransactionInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  receipt?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<TransactionUpdateType>;
};

export type UpdateOrderItemInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
  itemVariantId?: InputMaybe<Scalars["Int"]["input"]>;
  orderId?: InputMaybe<Scalars["Int"]["input"]>;
  partialCount?: InputMaybe<Scalars["Int"]["input"]>;
  unitDiscount?: InputMaybe<Scalars["Decimal"]["input"]>;
  unitPrice?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type UpdateOrderRelationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateOrderStatusInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  fromHubId?: InputMaybe<Scalars["Int"]["input"]>;
  ids: Array<Scalars["Int"]["input"]>;
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
  status: OrderStatusEnum;
  toHubId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateRackNameInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateRequestInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateRequestStatusHistoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateReturnPackageHistoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateRoleInput = {
  id: Scalars["Int"]["input"];
  roles?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type UpdateSheetOrderStatusHistoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateSheetOrdersInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  sheetOrderId: Scalars["Int"]["input"];
  shippingCollected?: InputMaybe<Scalars["Boolean"]["input"]>;
  status: SheetOrderStatus;
};

export type UpdateShopifySessionInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["Int"]["input"];
};

export type UpdateUserInput = {
  birthdate?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<UserType>;
};

export type UpdateUserRoleInput = {
  id: Scalars["String"]["input"];
  rolesToAdd: Array<Scalars["Int"]["input"]>;
  rolesToRemove: Array<Scalars["Int"]["input"]>;
};

export type UpdateUserRoleInputAdvanced = {
  id: Scalars["String"]["input"];
  roles: Array<Scalars["Int"]["input"]>;
};

export type UserPage = {
  __typename?: "UserPage";
  cursor: Scalars["GraphqlCursor"]["output"];
  data: Array<User>;
};

export type UserRole = {
  __typename?: "UserRole";
  role: Role;
  roleId: Scalars["Int"]["output"];
  userId: Scalars["String"]["output"];
};

export type UserTokenResponse = {
  __typename?: "UserTokenResponse";
  accessToken: Scalars["String"]["output"];
  user: User;
};

/** Types of users in the system */
export enum UserType {
  Customer = "customer",
  Employee = "employee",
  Merchant = "merchant",
}

export type VariantInput = {
  availableForSale?: InputMaybe<Scalars["Boolean"]["input"]>;
  compareAtPrice?: InputMaybe<Scalars["Decimal"]["input"]>;
  displayName: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  image?: InputMaybe<ImageInput>;
  invalid?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemId?: InputMaybe<Scalars["Int"]["input"]>;
  itemName?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Decimal"]["input"];
  selectedOptions: Array<SelectedOptionInput>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  synced?: InputMaybe<Scalars["Boolean"]["input"]>;
  title: Scalars["String"]["input"];
};

export type VariantName = {
  __typename?: "VariantName";
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type VariantNodes = {
  nodes: Array<VariantInput>;
};

export type VariantOption = {
  __typename?: "VariantOption";
  colorCode?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  value: Scalars["String"]["output"];
};

export type Ballot = {
  __typename?: "ballot";
  boxes: Array<Box>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  level: Scalars["Int"]["output"];
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  rack: Rack;
  rackId: Scalars["Int"]["output"];
};

export type Box = {
  __typename?: "box";
  ballot: Ballot;
  ballotId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
};

export type CompleteMerchantPaymentInput = {
  allTransactions?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  transactionIds: Array<Scalars["Int"]["input"]>;
};

export type CourierSheet = {
  __typename?: "courierSheet";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  orderCount: Scalars["Int"]["output"];
  sheetOrders?: Maybe<Array<SheetOrder>>;
  status: CourierSheetStatus;
  user: User;
  userId: Scalars["String"]["output"];
  userInfo: User;
};

export type CustomerAddress = {
  __typename?: "customerAddress";
  apartmentFloor: Scalars["String"]["output"];
  buildingNumber: Scalars["String"]["output"];
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  governorate: DomesticGovernorate;
  governorateId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  state?: Maybe<Scalars["String"]["output"]>;
  streetAddress: Scalars["String"]["output"];
  zipCode?: Maybe<Scalars["String"]["output"]>;
  zone: DomesticZone;
  zoneId?: Maybe<Scalars["Int"]["output"]>;
};

export type Expense = {
  __typename?: "expense";
  amount?: Maybe<Scalars["Decimal"]["output"]>;
  approvedById?: Maybe<Scalars["String"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  fromAccount: FinancialAccount;
  fromAccountId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  receipt?: Maybe<Scalars["String"]["output"]>;
  type: ExpenseType;
};

export type FinancialAccount = {
  __typename?: "financialAccount";
  balance: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchantId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  receivedTransactions: Array<FinancialTransaction>;
  sentTransactions: Array<FinancialTransaction>;
  type: FinancialAccountType;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type FinancialTransaction = {
  __typename?: "financialTransaction";
  amount: Scalars["Decimal"]["output"];
  auditedBy?: Maybe<User>;
  auditedById?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  fromAccount?: Maybe<FinancialAccount>;
  fromAccountId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  receipt?: Maybe<Scalars["String"]["output"]>;
  sheetOrder?: Maybe<SheetOrder>;
  sheetOrderId?: Maybe<Scalars["Int"]["output"]>;
  status: TransactionStatusType;
  toAccount: FinancialAccount;
  toAccountId: Scalars["Int"]["output"];
  type: TransactionType;
};

export type FindMerchantDomesticShippingInput = {
  govId: Scalars["Int"]["input"];
  merchantId: Scalars["Int"]["input"];
  orderType: OrderType;
};

export type Inventory = {
  __typename?: "inventory";
  createdAt: Scalars["DateTime"]["output"];
  governorateId?: Maybe<Scalars["Int"]["output"]>;
  hubId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  inventorySupports: Array<InventorySupport>;
  lastModified: Scalars["DateTime"]["output"];
  location: Scalars["GraphqlPoint"]["output"];
  module: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  racks: Array<Rack>;
};

export type InventoryItemHistory = {
  __typename?: "inventoryItemHistory";
  amount: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  itemInBoxId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  type: ItemHistoryEnum;
  user: User;
  userId: Scalars["String"]["output"];
};

export type InventorySupport = {
  __typename?: "inventorySupport";
  governorateId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  inventory: Inventory;
  inventoryId: Scalars["Int"]["output"];
  zoneId: Scalars["Int"]["output"];
};

export type Item = {
  __typename?: "item";
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  itemVariants: Array<ItemVariant>;
  lastModified: Scalars["DateTime"]["output"];
  merchantId: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  shopifyId?: Maybe<Scalars["String"]["output"]>;
};

export type ItemInBox = {
  __typename?: "itemInBox";
  box: Box;
  boxId: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  inventoryId: Scalars["Int"]["output"];
  itemVariant: ItemVariant;
  itemVariantId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchant: Merchant;
  merchantId: Scalars["Int"]["output"];
  minCount: Scalars["Int"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type Merchant = {
  __typename?: "merchant";
  address?: Maybe<CustomerAddress>;
  addressId?: Maybe<Scalars["Int"]["output"]>;
  bankName?: Maybe<Scalars["String"]["output"]>;
  bankNumber?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  financialAccount: FinancialAccount;
  id: Scalars["Int"]["output"];
  includesVat: Scalars["Boolean"]["output"];
  inventoryRent?: Maybe<InventoryRent>;
  lastModified: Scalars["DateTime"]["output"];
  name: Scalars["String"]["output"];
  overShipping: Scalars["Decimal"]["output"];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars["String"]["output"]>;
  shopifyShop?: Maybe<Scalars["String"]["output"]>;
  taxId?: Maybe<Scalars["String"]["output"]>;
  threshold: Scalars["Decimal"]["output"];
  users: Array<User>;
  webToken?: Maybe<Scalars["String"]["output"]>;
  webTokenExpiration: Scalars["DateTime"]["output"];
};

export type Order = {
  __typename?: "order";
  address?: Maybe<CustomerAddress>;
  addressId: Scalars["Int"]["output"];
  canBeEdited: Scalars["Boolean"]["output"];
  canOpen: Scalars["Boolean"]["output"];
  courier?: Maybe<User>;
  createdAt: Scalars["DateTime"]["output"];
  currency: Scalars["String"]["output"];
  deliveryPart: Scalars["Boolean"]["output"];
  fragile: Scalars["Boolean"]["output"];
  id: Scalars["Int"]["output"];
  isDomestic: Scalars["Boolean"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  merchant?: Maybe<Merchant>;
  merchantCustomer?: Maybe<MerchantCustomer>;
  merchantCustomerId: Scalars["Int"]["output"];
  merchantId: Scalars["Int"]["output"];
  orderDate: Scalars["DateTime"]["output"];
  orderItems: Array<OrderItem>;
  originalPrice: Scalars["Boolean"]["output"];
  otherId?: Maybe<Scalars["String"]["output"]>;
  parentOrder?: Maybe<Order>;
  paymentType: PaymentType;
  previousOrder?: Maybe<Order>;
  previousOrderId?: Maybe<Scalars["Int"]["output"]>;
  price: Scalars["Decimal"]["output"];
  sheetOrder?: Maybe<SheetOrder>;
  shippingPrice: Scalars["Decimal"]["output"];
  shopifyName?: Maybe<Scalars["String"]["output"]>;
  status: OrderStatusEnum;
  type: OrderType;
  weight: Scalars["Decimal"]["output"];
};

export type OrderHistory = {
  __typename?: "orderHistory";
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  fromHubId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  inventoryId?: Maybe<Scalars["Int"]["output"]>;
  lastModified: Scalars["DateTime"]["output"];
  order: Order;
  orderId: Scalars["Int"]["output"];
  status: OrderStatusEnum;
  toHubId?: Maybe<Scalars["Int"]["output"]>;
  userId: Scalars["String"]["output"];
};

export type OrderItem = {
  __typename?: "orderItem";
  count: Scalars["Int"]["output"];
  countInInventory: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  info: ItemVariant;
  inventory: Array<ItemInBox>;
  inventoryId?: Maybe<Scalars["Int"]["output"]>;
  inventoryReturn: InventoryReturn;
  itemReturn: ItemReturn;
  itemVariantId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  orderId: Scalars["Int"]["output"];
  partialCount?: Maybe<Scalars["Int"]["output"]>;
  returnCount: Scalars["Int"]["output"];
  unitDiscount: Scalars["Decimal"]["output"];
  unitPrice: Scalars["Decimal"]["output"];
};

export type OrderItemCountInInventoryArgs = {
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderItemInventoryArgs = {
  inventoryId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderRelation = {
  __typename?: "orderRelation";
  createdAt: Scalars["DateTime"]["output"];
  firstOrderId: Scalars["Int"]["output"];
  secondOrderId: Scalars["Int"]["output"];
};

export type PaginateItemsInput = {
  afterCursor?: InputMaybe<Scalars["String"]["input"]>;
  beforeCursor?: InputMaybe<Scalars["String"]["input"]>;
  isAsc?: Scalars["Boolean"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  merchantId?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
};

export type Rack = {
  __typename?: "rack";
  ballots: Array<Ballot>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  inventoryId: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  levels: Scalars["Int"]["output"];
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
};

export type Request = {
  __typename?: "request";
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  extraData: Scalars["String"]["output"];
  fromId: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  priority: Scalars["Int"]["output"];
  status: RequestStatus;
  type: RequestType;
};

export type RequestStatusHistory = {
  __typename?: "requestStatusHistory";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  requestId: Scalars["Int"]["output"];
  status: RequestStatus;
  userId: Scalars["Int"]["output"];
};

export type SheetOrder = {
  __typename?: "sheetOrder";
  adminPass: Scalars["Boolean"]["output"];
  amountCollected?: Maybe<Scalars["Decimal"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  financePass: Scalars["Boolean"]["output"];
  id: Scalars["Int"]["output"];
  lastModified: Scalars["DateTime"]["output"];
  order: Order;
  orderId: Scalars["Int"]["output"];
  sheet: CourierSheet;
  sheetId: Scalars["Int"]["output"];
  shippingCollected: ShippingStatus;
  transactionId?: Maybe<Scalars["Int"]["output"]>;
};

export type SheetOrderStatusHistory = {
  __typename?: "sheetOrderStatusHistory";
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  sheetOrderId: Scalars["Int"]["output"];
  status: SheetOrderStatus;
  userId: Scalars["String"]["output"];
};

export type User = {
  __typename?: "user";
  birthdate: Scalars["DateTime"]["output"];
  courierSheets: Array<CourierSheet>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  email: Scalars["String"]["output"];
  employee?: Maybe<Employee>;
  hub?: Maybe<Hub>;
  hubId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["String"]["output"];
  inventoryId?: Maybe<Scalars["Int"]["output"]>;
  lastModified: Scalars["DateTime"]["output"];
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  roles: Array<UserRole>;
  type: UserType;
  userRoles?: Maybe<Array<UserRole>>;
};

export type Vname = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type Voption = {
  colorCode?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ProductListQueryVariables = Exact<{
  itemPageInput: PaginateItemsInput;
}>;

export type ProductListQuery = {
  __typename?: "Query";
  paginateItems: {
    __typename?: "ItemPage";
    cursor: any;
    data: Array<{
      __typename?: "item";
      id: number;
      merchantId: number;
      name: string;
      shopifyId?: string | null;
      description?: string | null;
      currency: string;
      imageUrl?: string | null;
      createdAt: any;
      lastModified: any;
      itemVariants: Array<{
        __typename?: "ItemVariant";
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
      }>;
    }>;
  };
};

export const ProductListDocument = gql`
  query ProductList($itemPageInput: paginateItemsInput!) {
    paginateItems(itemPageInput: $itemPageInput) {
      cursor
      data {
        id
        merchantId
        name
        shopifyId
        description
        currency
        imageUrl
        itemVariants {
          id
          sku
          name
          shopifyId
          merchantSku
          merchantId
          itemId
          isEnabled
          imageUrl
          price
          weight
          createdAt
          lastModified
          deletedAt
        }
        createdAt
        lastModified
      }
    }
  }
`;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      itemPageInput: // value for 'itemPageInput'
 *   },
 * });
 */
export function useProductListQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProductListQuery,
    ProductListQueryVariables
  > &
    (
      | { variables: ProductListQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(
    ProductListDocument,
    options
  );
}
export function useProductListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductListQuery,
    ProductListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(
    ProductListDocument,
    options
  );
}
export function useProductListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProductListQuery,
        ProductListQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductListQuery, ProductListQueryVariables>(
    ProductListDocument,
    options
  );
}
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<
  typeof useProductListLazyQuery
>;
export type ProductListSuspenseQueryHookResult = ReturnType<
  typeof useProductListSuspenseQuery
>;
export type ProductListQueryResult = Apollo.QueryResult<
  ProductListQuery,
  ProductListQueryVariables
>;
