
http-response ^https:\/\/api\.madewithfaded\.com\/api\/.+\/subscription\/validate$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/Faded.js,script-update-interval=0
api.madewithfaded.com

let obj= JSON.parse($response.body);
obj= {
  "status": 200,
  "message": "OK",
  "data": true,
  "subscriptionValid": true
};
$done({body: JSON.stringify(obj)});
