
http-response ^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/mondly.vip.js,script-update-interval=0

api.mondlylanguages.com



var obj = JSON.parse($response.body);

obj["pucharses"]= [10];
obj["subscriptions"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["subscription"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["parsed_transactions"]= [
  "540000370283138"
];
$done({body: JSON.stringify(obj)});
