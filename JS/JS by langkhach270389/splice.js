http-response https:\/\/splice\.oracle\.\w+\.com\/devices\/me requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/splice.js,script-update-interval=0

splice.oracle.*.com


var obj = JSON.parse($response.body); 
obj['will_renew_subscription'] = true; 
obj['is_subscribed'] = true; 
$done({body: JSON.stringify(obj)});