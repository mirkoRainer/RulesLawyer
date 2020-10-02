import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { connect } from "react-redux";
import { ThemeState, DarkModeOptions } from "../store/ThemeState";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startToggleDarkMode } from "../store/actions/Theme/ThemeActions";
import { SafeAreaView } from "react-native";
import { EntireAppState } from "../store/Store";

type Props = LinkDispatchProps & LinkStateProps;

const AboutView: React.FC<Props> = (props) => {
    const toggleTheme = () => {
        const nextTheme = props.theme === "light" ? "dark" : "light";
        props.toggleDarkMode(nextTheme);
    };

    return(    
        <SafeAreaView style={{flex:1}}>
            <Layout style={{flex: 1}}>
                <Text style={{flex: 1}} category='h1'>About !!!!!!!!!</Text>
                <Button onPress={toggleTheme}>Toggle Dark Mode</Button>
            </Layout>
        </SafeAreaView>
    );
};

// base state
interface LinkStateProps {
    theme: keyof DarkModeOptions;
}
//all actions to be dispatched
interface LinkDispatchProps {
    toggleDarkMode: (newTheme: keyof DarkModeOptions) => void;
}

const mapStateToProps = (
    state: EntireAppState): LinkStateProps => ({
    theme: state.theme.mode
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    toggleDarkMode: bindActionCreators(startToggleDarkMode, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutView);