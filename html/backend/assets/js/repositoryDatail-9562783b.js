import{R as t,c4 as c}from"./entry-9cc5c370.js";const a=(e,o="1",u)=>t({url:{1:"/collection/vod/collect",2:"/collection/celebrity/collect",3:"/collection/art/collect"}[o],method:"get",headers:{Collect:u},params:{...e,ids:e.ids?e.ids.join(","):[]},timeout:0}).then(l=>{let r={all:e.t==0?"\u91C7\u96C6\u6240\u6709":"\u91C7\u96C6\u672C\u7C7B",day:"\u91C7\u96C6\u5F53\u5929",week:"\u91C7\u96C6\u672C\u5468"};c.push({name:"collectProgress",query:{i:l.logId,n:r[e.op]||"\u91C7\u96C6\u9009\u4E2D",resource_id:e.rid}})}),i=e=>t({url:"/collection/class",method:"post",data:e}),d=e=>t({url:"/collection/class",method:"delete",params:{id:e}}),C=e=>t({url:"/collection/vod/bindCates",method:"get",params:e});export{C as a,i as b,a as r,d as u};