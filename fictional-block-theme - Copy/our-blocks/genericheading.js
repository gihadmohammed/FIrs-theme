import {RichText,BlockControls} from "@wordpress/block-editor"
import {registerBlockType} from "@wordpress/blocks"
registerBlockType("ourblocktheme/genericheading",{
    title:"Generic Heading",
    attributes:{
        test:{type:"string"},
        size:{type:"string",default:"large"}
    },
    edit:EditComponent,
    save:SaveComponent

})
function EditComponent(){
    function handleTextChange(x){
    Props.setAttributes({text : x})
    }
    return (
        <>
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton onPressed={porps.attributes.size==="large"} onClick={()=>props.setAttributes({size:"large"})}>
                     Large </ToolbarButton>
                <ToolbarButton onPressed={porps.attributes.size==="medium"} onClick={()=>props.setAttributes({size:"medium"})}>
                     Medium </ToolbarButton>
                <ToolbarButton onPressed={porps.attributes.size==="small"} onClick={()=>props.setAttributes({size:"small"})}>
                     Small </ToolbarButton>
            </ToolbarGroup>
        </BlockControls>
        <RichText allowedFormat={['core/bold','core/italic']} tagName="h1" className={`headline headline--${props.attributes.size}`} value={Prop.attributes.text} onChange={handleTextChange} />
        </>
    )
}
function SaveComponent(props){
    function createTagName(){
        switch(props.attributes.size){
            case "large":
                return "h1"
            case "medium":
                return "h2"
            case "small":
                return "h3"
        }
    }
     return <RichText.Content tagName={createTagName()} className={`headline headline--${props.attributes.size}`}  value={props.attributes.text}/>
}