http-response ^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/draft.js,script-update-interval=0

backend.getdrafts.com


var obj = JSON.parse($response.body);

obj= {
  "active_expires_at" : "2029-01-01T00:00:00Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "premium",
  "is_blocked" : false
};

$done({body: JSON.stringify(obj)});

// Descriptions