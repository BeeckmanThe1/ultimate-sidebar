import {FullScreenImg} from "./stories/components/fullScreenImg/FullScreenImg";
import SidebarWrapper from "./stories/components/sidebar/SidebarWrapper";

import {SidebarTypes} from "./stories/components/sidebar/SidebarWrapper";

function App() {
    return (
        <div className="App">
            <SidebarWrapper displayLeft={true} type={SidebarTypes["side-menu"]}>
                <SidebarWrapper.MainContentWrapper>
                    <FullScreenImg src={'https://picsum.photos/1200'} value={'lel'}/>
                    <FullScreenImg src={'https://picsum.photos/1199'} value={'lal'}/>
                </SidebarWrapper.MainContentWrapper>
            </SidebarWrapper>
        </div>
    );
}

export default App;
