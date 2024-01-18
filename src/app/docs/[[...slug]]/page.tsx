export default function Docx({params}:{
    params:{
        slug:String[]
    }
}){

    if(params.slug?.length==2){
        return <h1>
            Viewing docx for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
    }else if(params.slug?.length==1){
        return <h3>Viewing docx for feature {params.slug[0]}</h3>
    }else{
        return(<div>
            DocsPage
    </div>)
    }
   
}