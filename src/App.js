import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout';

import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App bg-black">
                <Routes>
                    {publicRoutes.map((value, index) => {
                        let Layout;
                        if (value.layout === null) Layout = Fragment;
                        else if (value.layout === undefined)
                            Layout = DefaultLayout;
                        else Layout = value.layout;
                        return (
                            <Route
                                key={index}
                                path={value.path}
                                element={
                                    <Layout>
                                        <value.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
