const limpa=(urlAlvo)=>{
  const urlLimpa=urlAlvo.replace('https://','');
  urlLimpa=urlLimpa.replace('/\./gi','_');
  urlLimpa=urlLimpa.replace('/\//gi','_');
  return urlLimpa;

}