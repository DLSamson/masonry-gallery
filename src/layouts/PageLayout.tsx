import type {PropsWithChildren} from "react";
import {Header} from "../components/Header.tsx";
import {observer} from "mobx-react-lite";

interface PageLayoutProps {
    scrollable: boolean;
}

const PageLayout = observer(({children, scrollable}: PropsWithChildren<PageLayoutProps>) => {
    return (
        <div className={`bg-white h-screen w-screen overflow-hidden`}>
            <div className={'h-full overflow-auto'}>
                <Header/>

                <div className={`grid gap-8 ${scrollable ? 'overflow-auto' : 'overflow-hidden'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
});

export default PageLayout;