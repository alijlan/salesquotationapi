namespace salesquotationapi;

using { API_SALES_QUOTATION_SRV as sq } from '../srv/external/API_SALES_QUOTATION_SRV.csn';

entity SalesQuotation as projection on sq.A_SalesQuotation;
