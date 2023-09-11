import {InnerBlocks} from "@wordpress/block-editor"
import {registerBlockType} from "@wordpress/blocks"
wp.blockEditor.InnerBlocks
Wp.blocks.registerBlockType("ourblocktheme/banner",{
    title:"Banner",
    support:{
        align:["full"]
    },
    attributes:{
        align:{type :"string" , default :"full"} 
    },
    edit:EditComponent,
    save:SaveComponent
})
function EditComponent(){
    const useMeLater =(
    <div id="primary" class="content-area">
    <div id="main" class="site-main">
        <InnerBlocks allowedBlocks={["ourblocktheme/genericheading","ourblocktheme/genericbutton"]} />
    </div>
</div>
  )
}
function SaveComponent(){
    return (
<div id="primary" class="content-area">
    <div id="main" class="site-main">
        <InnerBlocks.Content/>
    </div>
</div>
    )
}