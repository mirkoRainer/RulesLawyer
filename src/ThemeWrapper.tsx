import React from "react";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import { AppNavigator } from "./AppNavigator";
import { ThemeState, DarkModeOptions } from "./store/ThemeState";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "./store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startToggleDarkMode } from "./store/actions/Theme/ThemeActions";
import { connect } from "react-redux";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { default as customTheme } from "../custom-theme.json";
import { EntireAppState } from "./store/Store";

const ThemeWrapper: React.FC<Props> = (props) => {
    const toggleTheme = () => {
        const nextTheme = props.theme === "light" ? "dark" : "light";
        props.toggleDarkMode(nextTheme);
    };
    if (props.theme === undefined) props.toggleDarkMode("dark");
    console.debug(`${props.theme} is current theme inside the wrapper`);
    const theme = props.theme === "light" ? eva.light : eva.dark;

    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{...theme, ...customTheme}}>
                <AppNavigator />
            </ApplicationProvider>
        </React.Fragment>
    );
};

type Props = LinkDispatchProps & LinkStateProps
    

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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeWrapper);