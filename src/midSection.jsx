import "./midSec.css"
import MidCards from "./midSecCards"

function MidSec(){
    return(
        <div className="mainMidDiv">
            <div className="Midleft">
                <h3>New releases.</h3>
                <p>The latest typefaces from our expert designers.</p>
                <a>Explore typefaces</a>
            </div>
            <div className="Midright1">
                <MidCards w="24rem" h="12.5rem" content="Airoko" image="https://www.monotype.com/sites/default/files/styles/800x450/public/2023-01/aeroko-mf-banner-5-2880x1440_112_182.webp?itok=5uRy4RMd"/>
                <MidCards w="24rem" h="12.5rem" content="Touvlo" image="https://www.monotype.com/sites/default/files/styles/800x450/public/2022-08/touvlo-mf-banner-7-2880x1440_193_111.webp?itok=i4ruTxXk"/>
                <MidCards w="24rem" h="24rem" content="FF FIN Slab" image="https://www.monotype.com/sites/default/files/styles/700x700/public/2022-09/ff_din_slab_1_96_36.webp?itok=iqxPMeSE"/>
                <MidCards w="24rem" h="12.5rem" content="FF DIN Stencil" image="https://www.monotype.com/sites/default/files/styles/800x450/public/2022-09/ff_din_stencil_3_68_64.webp?itok=nTOHisjH"/>
            </div>
            <div className="Midright2">
                <MidCards w="24rem" h="24rem" content="Binate" image="https://www.monotype.com/sites/default/files/styles/700x700/public/2022-05/binate24_174.webp?itok=GFvWJbl5"/>
                <MidCards w="24rem" h="12.5rem" content="Eurosport RAW" image="https://www.monotype.com/sites/default/files/styles/800x450/public/2022-06/ES_WEB_images_2022011310-2048x1152%20%281%29_263.webp?itok=NA0zpIDi"/>
                <MidCards w="24rem" h="12.5rem" content="Shorai Sans" image="https://monotype.com/sites/default/files/styles/800x450/public/2022-06/soral_189.webp?itok=KOLhNnL9"/>
                <MidCards w="24rem" h="24rem" content="FF DIN Variable" image="https://www.monotype.com/sites/default/files/styles/700x700/public/2022-06/Rectangle%203685_173.webp?itok=XCbHGfKY"/>
            </div>
        </div>
    );
}

export default MidSec