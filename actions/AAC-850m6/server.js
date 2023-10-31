async function (properties, context) {
    const selic = require('selic');
    try {
        const response = await selic.getRatesObject(); // { selic: 7.75, cdi: 7.65, ipca: 9.32 }
        return {
            selic: response.selic,
            cdi: response.cdi,
            ipca: response.ipca
        };
    } catch (err) {
        console.error(err); // Log the error for debugging.
        // Depending on your needs, you can throw the error or return a default/error response.
        throw err;
    }
}
