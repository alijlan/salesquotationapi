using { salesquotationapi as sqa } from '../db/sq-schema.cds';

service SQ {
    entity SalesQuotation as projection on sqa.SalesQuotation;
}

