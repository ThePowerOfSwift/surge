http-response ^https:\/\/api-kinemaster-assetstore\.(nexstreaming|kinemasters)\.com\/.+\/product\/verifyReceipt$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/kinemaster.js,script-update-interval=0

api-kinemaster-assetstore.*


var obj = JSON.parse($response.body);

obj= {
  "is_valid_device" : true,
  "has_valid_subscription" : true,
  "expiration_date_ms" : 4097755192000,
  "is_table_resettable" : true,
  "subscription_product_id" : "com.kinemaster.sub.annual.ia2",
  "state_code" : 0
};

$done({body: JSON.stringify(obj)});

// Descriptions