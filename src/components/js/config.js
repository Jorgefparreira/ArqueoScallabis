
let config = {
  // hostnameDev = 'localhost:3000',
  // hostname = window.location.hostname,

  getHostname: () =>{
    if(window.location.hostname === 'localhost'){
      return 'localhost:3000';
    } else {
      return window.location.hostname;
    }
  },

  getRecaptchaKey: () => {
    if(window.location.hostname === 'localhost'){
      return '6LfqNAEVAAAAAKjKJYEbLjHc5bXCpfSkKqICL9Xt';
    } else {
      return '6LdgBQEVAAAAALRvlPgCkPeSXS6q_VLA3U2zmBYM';
    }
  }
}

export default config;