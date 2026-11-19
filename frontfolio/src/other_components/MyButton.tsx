export default function MyButton({btn_content="", btn_classname=""}){

    return (<>
    
        <button className={btn_classname}>{btn_content}</button>
        
    </>)

}