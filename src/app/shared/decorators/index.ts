export function Emoji(){
    return (target:object,key:string)=>{
       // @ts-ignore
       let val= target[key];

       const getter=()=>{
           return val;
       }
       const setter=(value:string)=>{
           val=`😃${value}👿`
       }
       Object.defineProperty(target,key,{
           get:getter,
           set:setter,
           enumerable:true,
           configurable:true
       })
    }
}