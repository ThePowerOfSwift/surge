http-response ^https:\/\/license\.pdfexpert\.com\/api\/.+\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Pdfexpert.vip.js,script-update-interval=0

^https:\/\/license\.pdfexpert\.com\/api\/.*\/(?:documents|pdfexpert6)\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Pdfexpert.vip.js,script-update-interval=0

var obj= {
  "originalTransactionId" : "20000625420102",
  "subscriptionState" : "trial",
  "isInGracePeriod" : false,
  "subscriptionExpirationDate" : "17:48 25/11/2099",
  "isDocuments6User" : true,
  "isEligibleForIntroPeriod" : false,
  "subscriptionAutoRenewStatus" : "autoRenewOff",
  "subscriptionReceiptId" : "1530908572000"
};

$done({body: JSON.stringify(obj)});

// Descriptions