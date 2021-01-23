import React from 'react';
import {View} from 'react-navigation';
import {Heading} from "./Heading";
import {gcss} from "./styles";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('error',error);
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <View style={gcss.flexContainer}>
                <Heading val={'Something went wrong'}/>
            </View>
        }
        return this.props.children;
    }
}
