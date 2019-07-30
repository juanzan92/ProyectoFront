import React from 'react';
//Components
import NavBar from './NavBar';
import Footer from './Footer';
import TopBar from './TopBar';

export default function wrapper(WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <div >
                    <TopBar/>
                    <NavBar />
                    <WrappedComponent {...this.props} />
                    <Footer />
                </div>
            )
        }
    };
}