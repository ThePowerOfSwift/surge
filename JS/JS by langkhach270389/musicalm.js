http-response ^https:\/\/www\.peacefulsoundsapp\.com\/api\/v1\/init$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/musicalm.js,script-update-interval=0

www.peacefulsoundsapp.com

var obj = JSON.parse($response.body);

obj["data"]["is_premium"]=1;
obj["meta"]["current_subscription_expiration_date"]= "2 November 2099";
obj["meta"]["current_subscription_expiry_date"]= "2099-11-09 04:48:25";
$done({body: JSON.stringify(obj)});

// Descriptions