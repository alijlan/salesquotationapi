const cds = require('@sap/cds');

module.exports = cds.service.impl( async function () {
    const SQ = await cds.connect.to('API_SALES_QUOTATION_SRV');
    this.on("READ","SalesQuotation", async(req) => {
        req.query.where("SalesQuotation <> '' ");
        return await SQ.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        });
    });
});

