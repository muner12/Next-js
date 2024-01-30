import React from 'react'

function Docs({params}:{
    params:{
        slug:string[]
    }
}) {

    console.log(params);
    if(params.slug?.length===2){
        return <div>
            <h1>Viewing Docs for feature {params.slug[0]} and concepts {params.slug[1]}</h1>
        </div>
    }else if(params.slug?.length===1){
        return <div>
            <h1>Viewing Docs for feature {params.slug[0]}</h1>
        </div>
    }

  return <h1>Docs Home page</h1>
}

export default Docs