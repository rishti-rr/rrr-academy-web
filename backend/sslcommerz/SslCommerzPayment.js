// Unified SSLCommerz Payment Class (imported from your master/api/payment-controller.js)
const httpCall = require("../../SSLCommerz-NodeJS-master/api/fetch");
const paymentInitDataProcess = require("../../SSLCommerz-NodeJS-master/api/payment-init-data-process");

class SslCommerzPayment {
    constructor(store_id, store_passwd, live = false) {
        this.baseURL = `https://${live ? 'securepay' : 'sandbox'}.sslcommerz.com`;
        this.initURL = this.baseURL + '/gwprocess/v4/api.php';
        this.validationURL = this.baseURL + '/validator/api/validationserverAPI.php?';
        this.refundURL = this.baseURL + '/validator/api/merchantTransIDvalidationAPI.php?';
        this.refundQueryURL = this.baseURL + '/validator/api/merchantTransIDvalidationAPI.php?';
        this.transactionQueryBySessionIdURL = this.baseURL + '/validator/api/merchantTransIDvalidationAPI.php?';
        this.transactionQueryByTransactionIdURL = this.baseURL + '/validator/api/merchantTransIDvalidationAPI.php?';
        this.store_id = store_id;
        this.store_passwd = store_passwd;
    }

    async init(data, url = false, method = "POST") {
        try {
            data.store_id = this.store_id;
            data.store_passwd = this.store_passwd;
            const processedData = paymentInitDataProcess(data);
            const response = await httpCall({ url: url || this.initURL, method: method || "POST", data: processedData });
            return response;
        } catch (err) {
            console.error("SSLCommerz init error:", err);
            throw err;
        }
    }

    async validate(data, url = false, method = "GET") {
        try {
            const response = await httpCall({
                url: url || this.validationURL + `val_id=${data.val_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`,
                method: method || "GET"
            });
            return response;
        } catch (err) {
            console.error("SSLCommerz validate error:", err);
            throw err;
        }
    }

    async initiateRefund(data, url = false, method = "GET") {
        try {
            const response = await httpCall({
                url: url || this.refundURL + `refund_amount=${data.refund_amount}&refund_remarks=${data.refund_remarks}&bank_tran_id=${data.bank_tran_id}&refe_id=${data.refe_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`,
                method: method || "GET"
            });
            return response;
        } catch (err) {
            console.error("SSLCommerz refund error:", err);
            throw err;
        }
    }

    async refundQuery(data, url = false, method = "GET") {
        try {
            const response = await httpCall({
                url: url || this.refundQueryURL + `refund_ref_id=${data.refund_ref_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`,
                method: method || "GET"
            });
            return response;
        } catch (err) {
            console.error("SSLCommerz refundQuery error:", err);
            throw err;
        }
    }

    async transactionQueryBySessionId(data, url = false, method = "GET") {
        try {
            const response = await httpCall({
                url: url || this.transactionQueryBySessionIdURL + `sessionkey=${data.sessionkey}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`,
                method: method || "GET"
            });
            return response;
        } catch (err) {
            console.error("SSLCommerz transactionQueryBySessionId error:", err);
            throw err;
        }
    }

    async transactionQueryByTransactionId(data, url = false, method = "GET") {
        try {
            const response = await httpCall({
                url: url || this.transactionQueryByTransactionIdURL + `tran_id=${data.tran_id}&store_id=${this.store_id}&store_passwd=${this.store_passwd}&v=1&format=json`,
                method: method || "GET"
            });
            return response;
        } catch (err) {
            console.error("SSLCommerz transactionQueryByTransactionId error:", err);
            throw err;
        }
    }
}

module.exports = SslCommerzPayment;
