import Header from '~/components/Layout/components/User';
function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;
