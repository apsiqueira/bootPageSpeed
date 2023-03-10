const xlsx =require('xlsx');

function learn(){
  const wd=xlsx.readFile(`${__dirname}/Lista.xlsx`);
  const ws= wd.Sheets['Sheet1'];
  const data=xlsx.utils.sheet_add_json(ws);

  const newData=data.map((record)=>{
   return record.Site;
  })
  return newData;
}