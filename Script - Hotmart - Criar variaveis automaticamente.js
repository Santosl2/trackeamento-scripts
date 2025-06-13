// Description: This script creates variables in Google Tag Manager for Hotmart webhook data.
// Created by: Matheus Filype
// Cole this code in the browser console while on the Google Tag Manager variables page.
const entries = {
  "ed - webhook - hotmart - email": "data.buyer.email",
  "ed - webhook - hotmart - sck": "data.purchase.origin.xcod",
  "ed - webhook - hotmart - first_name": "buyer.first_name",
  "ed - webhook - hotmart - last_name": "buyer.last_name",
  "ed - webhook - hotmart - checkout_phone": "buyer.checkout_phone",
  "ed - webhook - hotmart - document": "buyer.document",
  "ed - webhook - hotmart - document_type": "buyer.document_type",
  "ed - webhook - hotmart - zipcode": "buyer.address.zipcode",
  "ed - webhook - hotmart - country": "buyer.address.country",
  "ed - webhook - hotmart - number": "buyer.address.number",
  "ed - webhook - hotmart - address": "buyer.address.address",
  "ed - webhook - hotmart - city": "buyer.address.city",
  "ed - webhook - hotmart - state": "buyer.address.state",
  "ed - webhook - hotmart - neighborhood": "buyer.address.neighborhood",
  "ed - webhook - hotmart - complement": "buyer.address.complement",
  "ed - webhook - hotmart - country_iso": "buyer.address.country_iso",
  "ed - webhook - hotmart - full_price.value":
    "buyer.purchase.full_price.value",
  "ed - webhook - hotmart - full_price.currency_value":
    "buyer.purchase.full_price.currency_value",
  "ed - webhook - hotmart - full_price.currency_value":
    "buyer.purchase.full_price.currency_value",
  "ed - webhook - hotmart - transaction": "buyer.purchase.purchase.transaction",
};

// Note: The XSRF token is specific to your session and may change.
// You can find it in the browser's developer tools under the "Network" tab
// when you make a request to the Google Tag Manager API.
// Replace the XSRF_TOKEN value with the one from your session.
const XSRF_TOKEN = "YOUR XSRF_TOKEN";

const headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
  "cache-control": "no-cache",
  "content-type": "application/json;charset=UTF-8",
  pragma: "no-cache",
  "x-xsrf-token": XSRF_TOKEN,
};

const baseURL =
  "https://tagmanager.google.com/api/accounts/6265994503/containers/217720704/workspaces/14/variables";

console.log("Creating variables...", Object.keys(entries).length);
Object.entries(entries).forEach(([name, keyPath]) => {
  fetch(baseURL, {
    method: "POST",
    headers,
    credentials: "include",
    mode: "cors",
    referrer: "https://tagmanager.google.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify({
      data: {
        name,
        type: 41,
        positiveConditionId: [],
        negativeConditionId: [],
        positiveTriggerId: [],
        negativeTriggerId: [],
        parentFolderId: 105,
        vendorTemplate: {
          param: [
            {
              key: "setDefaultValue",
              value: {
                type: 8,
                listItem: [],
                mapKey: [],
                mapValue: [],
                boolean: false,
                templateToken: [],
                escaping: [],
              },
            },
            {
              key: "keyPath",
              value: {
                type: 1,
                string: "data." + keyPath,
                listItem: [],
                mapKey: [],
                mapValue: [],
                templateToken: [],
                escaping: [],
              },
            },
            {
              key: "defaultValue",
              value: {
                type: 1,
                string: "",
              },
            },
          ],
          paramMap: {
            setDefaultValue: {
              key: "setDefaultValue",
              value: {
                type: 8,
                boolean: false,
              },
            },
            keyPath: {
              key: "keyPath",
              value: {
                type: 1,
                string: "data." + keyPath,
              },
            },
            defaultValue: {
              key: "defaultValue",
              value: {
                type: 1,
                string: "",
              },
            },
          },
          defaultValueMap: {
            keyPath: {
              type: 1,
              string: "",
            },
            setDefaultValue: {
              type: 8,
              boolean: false,
            },
            defaultValue: {
              type: 1,
              string: "",
            },
          },
          key: {
            publicId: "ed",
          },
        },
        normalization: {},
      },
      statMetadata: {
        createdTime: Date.now().toString(),
        modifiedTime: Date.now().toString(),
        entityVersion: Date.now().toString(),
      },
      containerDraftMetadata: {
        changeStatus: 1,
      },
      references: [],
    }),
  });
});
