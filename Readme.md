# **MineStrator API (Unofficial)**


Resquest Module
# **Installation**
```
npm install minestratorapi.js
```
# **Example usage**
Simple example for retrieve the list of services
```js
const MineStratorAPI = require('minestratorapi.js')
const server = new MineStratorAPI('API Key');

server.getServerList().then(res => console.log(res.data));

/* Output
[
  {
    hashsupport: 'XXXXX',
    uuid_short_pt: 'xxx9xxx1',    
    ip: 'xxx.xxx.xx.xxx',
    port: '25640',
    tstart: '2022-02-15 16:20:46',
    tend: '2022-04-15 16:20:46',
    dns: 'xxxxxxxxxxxxx.mine.fun',
    name: 'xxxxxxx xxxxxx',
    offer: 'Premier'
  }
]
*/
```
# **Methods + Output**
***then(res => console.log(res.data))***
> getServerList()
```
[
  {
    hashsupport: 'XXXXX',
    uuid_short_pt: 'xxx9xxx1',    
    ip: 'xxx.xxx.xx.xxx',
    port: '25640',
    tstart: '2022-02-15 16:20:46',
    tend: '2022-04-15 16:20:46',
    dns: 'xxxxxxxxxxxxx.mine.fun',
    name: 'xxxxxxx xxxxxx',
    offer: 'Premier'
  }
]
```
> getServerInfo(hashsupport)
```
[
  {
    hashsupport: 'XXXXX',
    uuid_short_pt: 'xxx9xxx1',    
    ip: 'xxx.xxx.xx.xxx',
    port: '25640',
    tstart: '2022-02-15 16:20:46',
    tend: '2022-04-15 16:20:46',
    dns: 'xxxxxxxxxxxxx.mine.fun',
    name: 'xxxxxxx xxxxxx',
    offer: 'Premier',
    ressources: {
      cpu: [Object],
      memory: [Object],
      disk: [Object],
      databases: [Object]
    },
    uuid: 'xxx9xxx1-0x60-4x99-8xx5-733xxx24exx3'
  }
]
```
> getServerState(hashsupport)
```
[
  {
    uuid_short_pt: 'xxx9xxx1',    
    ip: 'xxx.xxx.xx.xxx',
    port: '25640',
    offer: 'Premier',
    status: 'on',
    cpu: { live: 15, max: 200 },
    memory: { live: 7067, max: '8192' },
    disk: { live: 32819, max: 60000 }
  }
]
```
> getServerContent(hashsupport)
```
[
  {
    hashsupport: 'XXXXX',
    uuid_short_pt: 'xxx9xxx1',    
    ip: 'xxx.xxx.xx.xxx',
    port: '25640',
    status: 'on',
    players: { online: 0, max: 30 },
    version: '1.12.2'
  }
]
```
> setServerPower(hashsupport, action) 

⚠ *Action: start | stop | restart | kill* 
```
start
{ message: 'Starting server XXXXX.' }

stop
{ message: 'Stopping server XXXXX.' }

restart
{ message: 'Restarting server XXXXX.' }

kill
{ message: 'Killing server XXXXX.' }
```
# **Credits**
[Axios](https://www.npmjs.com/package/axios)
[MineStrator](https://minestrator.com/)
