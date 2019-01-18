import React, {Component} from 'react';
import { Router, Scene, Stack, } from 'react-native-router-flux';
import MainScreen from '../screen/MainScreen'
import ThankYou from '../screen/ThankYou'

const App = () => {
        return(
            <Router>
                <Stack>
                    <Scene key='mainscreen'
                           component={MainScreen}
                           hideNavBar
                        //    initial
                    />
                    <Scene key='thankyou'
                           component={ThankYou}
                           hideNavBar
                           initial
                    />
                </Stack>
            </Router>
        );
}
export default App;