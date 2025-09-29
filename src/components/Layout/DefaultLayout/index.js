import User from '~/components/Layout/components/User';
import Sidebar from '~/components/Layout/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="flex justify-between w-full">
                <Sidebar />
                {children}
                <User />
            </div>
        </div>
    );
}

export default DefaultLayout;
