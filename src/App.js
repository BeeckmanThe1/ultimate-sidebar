import {Sidebar} from "./stories/components/sidebar/Sidebar";
import {FullScreenImg} from "./stories/components/fullScreenImg/FullScreenImg";

function App() {
    return (
        <div className="App">
            <FullScreenImg src={'https://picsum.photos/1200'}/>
            <Sidebar/>
            <FullScreenImg src={'https://picsum.photos/1199'}/>
        </div>
    );
}

export default App;
