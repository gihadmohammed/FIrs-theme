import {RichText,BlockControls} from "@wordpress/block-editor"
import {registerBlockType} from "@wordpress/blocks"
import {link} from "@wordpress/icons"
registerBlockType("ourblocktheme/genericheading",{
    title:"Generic Button",
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
    function buttonHandler(){

    }
    return (
        <>
        <BlockControls>
            <ToolbarGroup>

                <ToolbarButton onPressed={buttonHandler} icon={link}>
                     Large </ToolbarButton>
                <ToolbarButton onPressed={porps.attributes.size==="medium"} onClick={()=>props.setAttributes({size:"medium"})}>
                     Medium </ToolbarButton>
                <ToolbarButton onPressed={porps.attributes.size==="small"} onClick={()=>props.setAttributes({size:"small"})}>
                     Small </ToolbarButton>
            </ToolbarGroup>
        </BlockControls>
        <RichText allowedFormat={[]} tagName="a" className={`headline headline--${props.attributes.size} btn--blue`} value={Prop.attributes.text} onChange={handleTextChange} />
        </>
    )
}
function SaveComponent(props){
   
     return <a href="#" className={`headline headline--${props.attributes.size} btn--blue`} value={Prop.attributes.text}>
        {props.attributes.text}
     </a>}