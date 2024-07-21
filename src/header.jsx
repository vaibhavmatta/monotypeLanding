import "./header.css"

function Header(){
    return(
        <div className="header">
            <div className="top-line">Are your font management practices hurting your brand? Watch out for these seven common signs.</div>
            <div className="sub-header">
                <div className="logo">Monotype.</div>
                <div className="sub-header-right">
                    <div className="searchSupportLanguage">
                        <div className="search">
                            <img className="searchIcon" src="https://www.monotype.com/profiles/custom/global_cms/themes/custom/globalcms/pattern-lab/source/images/mt-images/search-icon.svg" alt="" srcset="" />
                            <input className="searchBar" placeholder="Find anything (i.e., fonts,foundries,desginers)" type="text" />
                        </div>
                        <div className="support">Support</div>
                        <div className="language">EN</div>
                    </div>
                    <div className="nav-speaksales">
                        <div className="navigation">
                            <a href="#" className="nav">Fonts</a>
                            <a href="#" className="nav">Products</a>
                            <a href="#" className="nav">Studio</a>
                            <a href="#" className="nav">Resources</a>
                            <a href="#" className="nav">Partners</a>
                            <a href="#" className="nav">About Us</a>
                        </div>
                        <div className="speak-to-sales">Speak to sales</div>
                    </div>
                </div>   
            </div>
            
        </div>
    );
}

export default Header