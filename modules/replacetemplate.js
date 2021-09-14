

module.exports=(val,temp)=>{
    let output=temp.replace(/{%image%}/g,val.image);
     output=output.replace(/{%productname%}/g,val.productName);
     output= output.replace(/{%quantity%}/g,val.quantity);
     output=output.replace(/{%price%}/g,val.price);
     output=output.replace(/{%from%}/g,val.from);
     output=output.replace(/{%nutrients%}/g,val.nutrients);
     output=output.replace(/{%id%}/g,val.id);
     output=output.replace(/{%description}/g,val.description);
   
     if(val.organic)
     output= output.replace("{%not_organic%}","Organic");
     else
     output=output.replace("{%not_organic%}","not-organic");
     return output;
 }