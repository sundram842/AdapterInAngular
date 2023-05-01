import { Adapter } from "./Adapter";

export class DataChange implements Adapter<any>
{
   public adapt(data:any)
   {
  return data.map((item: any)=>
    {
      return{
        id:item.id,
        lable:item.name,
        // amount:item.value
      };
    });
   }
}