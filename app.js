class VpnDetected{
  constructor(preload = true, type = 'simple'){
    if(VpnDetected.exists){
      return VpnDetected.instance;
    }
    this.type = type;
    this.preload = preload;
    VpnDetected.exists = true;
    VpnDetected.instance = this;
  }
  
  
  createBlock(message, description, type = 'warn'){
    const block = document.createElement('div');
    const className = 'vpn_detected_'+ new Date().getTime(); 
    block.setAttribute('class', 'vpn_detected '+className);
    const shiled_svg = '<svg class="vpn_detected_check" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-shield-checkered"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.013 12v9.754a13 13 0 0 1 -8.733 -9.754h8.734zm9.284 3.794a13 13 0 0 1 -7.283 5.951l-.001 -9.745h8.708a12.96 12.96 0 0 1 -1.424 3.794zm-9.283 -13.268l-.001 7.474h-8.986c-.068 -1.432 .101 -2.88 .514 -4.282a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.192 -2.256l.276 -.219zm1.999 7.474v-7.453l-.09 -.073a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717c.413 1.403 .582 2.85 .514 4.282h-8.96z" /></svg>';
    const alert_svg = `<svg class="vpn_detected_${type == 'warn'? 'warn' : 'ban'}" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>`;

    
    block.innerHTML = `
    ${type == 'wait' ? shiled_svg : alert_svg }
    <div class="vpn_detected_title">${message}</div>
    <div class="vpn_detected_description">${description}</div>
    <div class="vpn_detected_author">ANTY-VPN CODE BY idisila</div>`;
    document.body.append(block);
    return className;
  }
  
  hide(lang){
    this.createBlock('VPN DETECTED','Please Disable VPN and refresh the page!');
    if (this.type == 'average') {
      document.body.innerHTML = '';
      this.createBlock('VPN DETECTED', 'Please Disable VPN and refresh the page!');
    }
    if (this.type == 'enhanced') {
      document.body.innerHTML = '';
      this.createBlock('YOU ARE BANNED', 'VPN is prohibited on our site', 'ban');
      const storage_lang = lang ?? localStorage.vpn_detected;
      setInterval(() => { localStorage.setItem('vpn_detected', storage_lang) }, 10);
    }
  }
  
  run(){
    let className = null;
    this.preload && (className = this.createBlock('WAIT PLEASE', 'Checking for VPN availability', 'wait'));
    
    const ip = async () => {
      const language = await navigator.language.split('-')[1];
      const ipRawGeo = await fetch('https://ipinfo.io/geo');
      const ipGeo = await ipRawGeo.json();
      if(ipGeo.country != language){
        this.hide(ipGeo.country);
      }
      className && document.querySelector(`.${className}`).remove();
    }
    
    if(localStorage.vpn_detected && this.type === 'enhanced'){
      this.hide();
    }
    else{
      ip();
    }
  }
}