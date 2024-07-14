import fetch from "node-fetch"

export const handler = async()=> {
    const airtable_api = 'https://api.airtable.com/v0/appzLdIRMrSF1cK9O/NFC%20Staff?maxRecords=3&view=Grid%20view'
    const bearer = 'Bearer' + process.env.API_SECRET
    const response = await fetch(airtable_api, {
        method: 'GET',
        headers: {
            'Authorization': bearer
        }  
    })
    const data = await response.json()
    return {
        statusCode: 200,
        body: JSON.stringify({
            data
        })
    }
}