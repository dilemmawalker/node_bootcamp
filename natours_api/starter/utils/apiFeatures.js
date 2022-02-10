
class APIFeatures{
    constructor(query,queryString){
      this.query = query;
      this.queryString = queryString;
    }
  
    filter(){
    //1)A) Filtering 
    const queryObj = {...this.queryString};
    const excludedFields = ['page','sort','limit','fields'];
    excludedFields.forEach(ele=>{
      delete queryObj[ele];
    });
  
    //1)B) Advanced Filtering
    let queryStr=JSON.stringify(queryObj);
    queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(match)=>{
      `$${match}`
    });
  
    this.query.find(JSON.parse(queryStr));
    return this;
    }
  
    sort(){
      //2) Sorting
      if(this.queryString.sort){
        console.log("Sorting Done");
      this.query = this.query.sort(this.queryString.sort);
      }
      return this;
    }
  
    fields(){
      //3) Fields
      if(this.queryString.fields){
        console.log("Fields exists!!!");
        const fields = this.queryString.fields.split(',').join(' ');
        this.query = this.query.select(fields);
      }
      return this;
    }
  
     //4) Pagination
      pagination(){
     console.log("Pagination working");
     console.log(this.queryString.limit);
     const skip = (this.queryString.page-1)*this.queryString.limit || 0;
     const limit = (this.queryString.limit*1)||100;
     console.log("Limit "+limit);
   this.query = this.query.skip(skip).limit(limit);
  
   return this;
      }
      
  }
  module.exports = APIFeatures;