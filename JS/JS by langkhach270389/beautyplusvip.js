http-response ^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/beautyplusvip.js,script-update-interval=0

host name = api-intl.mr.meitu.com,api.vcus.meitu.com


var obj = JSON.parse($response.body);


obj=  {
  "status": 0,
  "expires_date": "9999-06-06 19:57:41"
};
$done({body: JSON.stringify(obj)});


// Mô tả
