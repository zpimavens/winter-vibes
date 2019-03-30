import React from 'react';
import {Route, Redirect} from 'react-router-dom';


class PublicRoute extends React.Component {
    state = {
        loading: true,
        isAuthenticated: false,
    }
    componentDidMount() {
        fetch('/checkToken')
        .then((res) => {
            this.setState({
                loading: false,
                isAuthenticated: res.status===200,
            });
        });
    }
    render() {
        const { component: Component, ...rest } = this.props;
        if (this.state.loading) {
            return null;
        } else {
            return (
                <Route {...rest} render={props => (
                    <>
                        {this.state.isAuthenticated && <Redirect to={{ pathname: '/user', state: { from: this.props.location } }} />}
                        <Component {...rest} />
                    </>
                )}
                />
            )
        }
    }
}
export default PublicRoute;