import React from "react";
import { StyleSheet, SectionList } from "react-native";
import { Input, Layout, Text, Icon, Button, TopNavigationAction, TopNavigation, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "./OffenseNavigation";
import { BaseRouter } from "@react-navigation/native";
import { reactionSymbol, freeActionSymbol, actionSymbol, MapActionToIndexPath, MapIndexToAction, DetermineActionSymbol } from "./ActionHelper";
import { update } from "lodash";
import { ScrollView } from "react-native-gesture-handler";

type ActionsNavigationProps = StackNavigationProp<OffenseStackParamList, "EditActionView">

type OwnProps = {
    navigation: ActionsNavigationProps;
    route: any;
};

const EditActionView: React.FC<Props> = (props) => {
    const index: number = props.route.params.index;
    const updateAction: (updatedAction: PF2Action, index: number) => void = props.route.params.updateAction;

    const BackIcon = (props: any) => (
        <Icon {...props} name='arrow-back' />
    );
    const EditActionsBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={()=>{props.navigation.navigate("EditActionsView");}} />
    );
    const NumberOfActionsSelector = () => {
        const onSelect = (indexPath: IndexPath | IndexPath[]) => {
            const trueIndex = indexPath as IndexPath;
            const newCost = MapIndexToAction(trueIndex.row);
            updateAction({ ...props.action, numberOfActions: newCost}, index);
        };
        return (
            <Select
                selectedIndex={MapActionToIndexPath(props.action.numberOfActions)}
                onSelect={onSelect}
                value={DetermineActionSymbol(props.action.numberOfActions)}
                label='Action Cost'
            >
                {/* Don't change the order of these. They map to a switch in ActionHelper.ts */}
                <SelectItem title={freeActionSymbol} />
                <SelectItem title={reactionSymbol} />
                <SelectItem title={actionSymbol} />
                <SelectItem title={actionSymbol.repeat(2)} />
                <SelectItem title={actionSymbol.repeat(3)} />
            </Select>
        );
    };

    const Editor = () => {
        return (
            <Layout style={{flex: 1, paddingVertical: 10}}>
                <ScrollView>
                    <Input 
                        label='Action Name' 
                        onChangeText={(name: string) => updateAction({ ...props.action, name }, index)}
                        placeholder='Name the Action' 
                        status={props.action.name || props.action.name !== "" ? "basic" : "danger"} 
                        caption={props.action.name ? undefined : "This value is needed"}
                    >{props.action.name}</Input>
                    {NumberOfActionsSelector()}
                    <Input 
                        label='Description' 
                        onChangeText={(description: string) => updateAction({ ...props.action, description }, index)}
                        placeholder='Describe the Action here' 
                        status={props.action.description || props.action.description !== "" ? "basic" : "danger"} 
                        caption={props.action.description ? undefined : "This value is needed"}
                        multiline={true}
                    >{props.action.description}</Input>
                    <Input 
                        label='Source of the Action' 
                        onChangeText={(source: string) => updateAction({ ...props.action, source }, index)}
                        placeholder='Where did the Action come from? A Feat? A Class Feature? A Weapon?' 
                        status={props.action.source || props.action.source !== "" ? "basic" : "danger"} 
                        caption={props.action.source ? undefined : "This value is needed"}
                        multiline={true}
                    >{props.action.source}</Input>
                    <Input label='Action Trigger' ></Input>
                    <Input label='Requirements' ></Input>
                    <Input label='Critical Success' ></Input>
                    <Input label='Success' ></Input>
                    <Input label='Failure' ></Input>
                    <Input label='Critical Failure' ></Input>
                    <Input label='Weapon' ></Input>
                    <Input label='Skill' ></Input>
                    <Input label='Book Reference' ></Input>
                    <Input label='Page Number' ></Input>
                    <Input label='Traits' ></Input>
                </ScrollView>
            </ Layout>
        );
    };

    return(
        <Layout style={{flex: 1, padding: 10}}>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title='Edit Actions'
            />
            {Editor()}
        </Layout>
    );
};

type Props = OwnProps & LinkStateProps;

interface LinkStateProps {
    action: PF2Action;
}

const mapStateToProps = (
    state: AppState,
    ownProps: OwnProps
): LinkStateProps => ({
    action: state.playerCharacter.actions[ownProps.route.params.index],
});


export default connect(mapStateToProps, null)(EditActionView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});