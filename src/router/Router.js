import React from 'react';
import { Router, Scene, Stack, } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux'
import MainScreen from '../screen/MainScreen'
import ThankYou from '../screen/ThankYou'
import store from '../redux/store'

// const ConnectRouter = connect()(Router)

const App = () => {
    return (
        // <Provider store={store}>
            <Router>
                <Stack>
                    <Scene key='mainscreen'
                        component={MainScreen}
                        hideNavBar
                        initial
                    />
                    <Scene key='thankyou'
                        component={ThankYou}
                        hideNavBar
                    />
                </Stack>
            </Router>
        // </Provider>
    );
}
export default App;