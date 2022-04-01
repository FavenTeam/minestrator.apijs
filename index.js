/*
 *   ███████╗ █████╗ ██╗   ██╗███████╗███╗   ██╗
 *   ██╔════╝██╔══██╗██║   ██║██╔════╝████╗  ██║
 *   █████╗  ███████║██║   ██║█████╗  ██╔██╗ ██║
 *   ██╔══╝  ██╔══██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║
 *   ██║     ██║  ██║ ╚████╔╝ ███████╗██║ ╚████║
 *   ╚═╝     ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝
 *         👥 ┆ Lorenzo ∞
 *         📝 ┆ index.js
 *         🕙 ┆ 01/04/2022 à 20:09:27
 */


const axios = require('axios')

class MineStratorApi {
  constructor(token)
  {
      this.headers = {'Authorization': token};
      this.action = ['start', 'stop', 'restart', 'kill'];
      this.rest = 'https://rest.minestrator.com/api/v1/server';
      this.anchor = ['/list', '/data', '/ressources', '/content', '/action'];
      this.checkToken();
  }

  checkToken()
  {
    axios.get(this.rest + this.anchor[0], { headers: this.headers }).then((response) => {
      if(response.data.error){
        return console.log(response.data.error.message);
      }
    });
  }
  
  checkHashSupport(hashsupport)
  {
    var requestResponse = axios.get(this.rest + this.anchor[1] + `/${hashsupport}`, { headers: this.headers }).then((response) => {
      if(response.data.error){
        return console.log(response.data.error.message);
      }
    });
  }

  getServerList()
  {
    var requestResponse = axios.get(this.rest + this.anchor[0], { headers: this.headers }).then((response) => response.data);
    return requestResponse;
  }

  getServerInfo(hashsupport)
  {
    this.checkHashSupport(hashsupport);
    var requestResponse = axios.get(this.rest + this.anchor[1] + `/${hashsupport}`, { headers: this.headers }).then((response) => response.data);
    return requestResponse;
  }

  getServerState(hashsupport)
  {
    this.checkHashSupport(hashsupport);
    var requestResponse = axios.get(this.rest + this.anchor[2] + `/${hashsupport}`, { headers: this.headers }).then((response) => response.data);
    return requestResponse;
  }

  getServerContent(hashsupport)
  {
    this.checkHashSupport(hashsupport);
    var requestResponse = axios.get(this.rest + this.anchor[3] + `/${hashsupport}`, { headers: this.headers }).then((response) => response.data);
    return requestResponse;
  }
  setServerPower(hashsupport, action)
  {
    this.checkHashSupport(hashsupport);
    const params = new URLSearchParams();
    params.append('hashsupport', hashsupport);
    params.append('action', action);
    if(!action.includes(this.action[0]) && !action.includes(this.action[1]) && !action.includes(this.action[2]) && !action.includes(this.action[3])) return console.log(action + " is not a recognized action. (start | stop | restart | kill)")
    var requestResponse = axios.post(this.rest + this.anchor[4], params, { headers: this.headers }).then((response) => response.data);
    return requestResponse;
  }
}

module.exports = MineStratorApi;
