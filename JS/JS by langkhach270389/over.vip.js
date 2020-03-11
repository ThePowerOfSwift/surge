http-response ^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/over.vip.js,script-update-interval=0

api.overhq.com


var body = $response.body;
let obj = JSON.parse(body);
obj.user.subscription["isSubscriptionActive"] = true;
obj.user.subscription["entitlement"] = ["OVER_PRO"];
$done({body:JSON.stringify(obj)});

