
const { SERVER } = require("../config/constant")

export const server = async (url, settings, data) => {

    const response = await fetch(`${SERVER}${url}`, {
        method: server_method,
        headers: server_headers,
        body: JSON.stringify({ idToken: idToken }),
    })
}
