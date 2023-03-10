const puppeteer=require('puppeteer');
const fs=require('fs');
const path=require('path');
const dir=path.join(__dirname,'relatorios');
if(!fs.existsSync(dir)){
  fs.mkdirSync(dir);
  console.log('criado');

}

const limpa=require('./limpaUrl')
const alvo="https://pagespeed.web.dev/";
const urls=['https://www.mercadolivre.com.br/','https://www.olx.com.br/'];
const dadosRapados=[];
const limparUrl=(urlAlvo)=>{
  const url=urlAlvo.replace('https://','')
  urlLimpa1=url.replace(/\./gi,'_');
  const totalmenteLimpa=urlLimpa1.replace(/\//gi,'');
  return totalmenteLimpa;
}



(async () => {
 const browser=await puppeteer.launch({headless:false,defaultViewport:null});
 const page=await browser.newPage();
 await page.setDefaultTimeout(0);
for(let i=0;i<urls.length;i++) {
  const url=urls[i];
  await page.goto(alvo);
  await page.waitForSelector('.VfPpkd-fmcmS-wGMbrd');
  await page.type('.VfPpkd-fmcmS-wGMbrd',url,{delay:300});
  await page.waitForSelector('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.c659ib');
  await page.click('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.c659ib');
  await page.waitForSelector('.lh-gauge__percentage');
  const urlSanitizada=limparUrl(urls[i]);
  await page.screenshot({path:`${dir}/${urlSanitizada}.png`,fullPage:true});

}




 await browser.close();



})();