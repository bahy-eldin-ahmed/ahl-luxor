self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(_){}
 e.waitUntil(self.registration.showNotification(d.title||'أهل الأقصر',{body:d.body||'',lang:'ar',dir:'rtl',tag:'ahl-luxor',renotify:true,data:{url:d.url||'/ahl-luxor/'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=new URL((e.notification.data&&e.notification.data.url)||'/ahl-luxor/',self.location.origin).href;
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if(c.url.startsWith(self.location.origin+'/ahl-luxor')&&'focus' in c){c.navigate(u);return c.focus()}}return self.clients.openWindow(u)}))});
