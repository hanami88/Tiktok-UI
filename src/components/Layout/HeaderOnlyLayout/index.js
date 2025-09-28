import Header from '~/components/Layout/DefaultLayout/Header';
function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;
