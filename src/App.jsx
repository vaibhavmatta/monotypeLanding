import Header from "./header.jsx";
import TopBanner from "./topBanner.jsx";
import BMid from "./beforeMid.jsx";
import MidSec from "./midSection.jsx"
import "./index.css";

function App() {
    return (
        <div className="Main">
            <Header />
            <TopBanner />
            <BMid />
            <MidSec />
        </div>
    );
}

export default App;
