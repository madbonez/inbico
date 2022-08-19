export interface AbstractPriceRow {
    object: string;
    description: string;
    duration: string;
    price1: string;
    price2: string;
}

export interface PricesPageContent {
    block1: string;
    priceListHead: AbstractPriceRow[];
    priceList: { groupName: string, items: AbstractPriceRow[] } [];
}
