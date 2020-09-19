import React from "react";
import { StyleSheet, SectionList } from "react-native";
import { Input, Layout, Text, Icon, Button, TopNavigationAction, TopNavigation, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { PF2Action, Skill, Weapon } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "./OffenseNavigation";
import { BaseRouter, RouteProp } from "@react-navigation/native";
import { reactionSymbol, freeActionSymbol, actionSymbol, MapActionToIndexPath, MapIndexToAction, DetermineActionSymbol } from "./ActionHelper";
import { update } from "lodash";
import { ScrollView } from "react-native-gesture-handler";
import { TraitSelector } from "../../../Shared/TraitSelector";
import { SkillSelector } from "../Skills/SkillSelector";
import { WeaponSelector } from "./Weapons/WeaponSelector";

type ActionsNavigationProps = StackNavigationProp<OffenseStackParamList, "EditActionView">

type OwnProps = {
    navigation: ActionsNavigationProps;
    route: RouteProp<OffenseStackParamList, "EditActionView">;
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

    const updateTraits: (traits: string[]) => void = (traits: string[]) => {updateAction({ ...props.action, traits }, index);};

    const updateSkill: (skill: Skill | undefined) => void = (skill: Skill | undefined) => {updateAction({ ...props.action, skill }, index);};
    
    const updateWeapon: (skill: Weapon | undefined) => void = (weapon: Weapon | undefined) => {updateAction({ ...props.action, weapon }, index);};
    
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
                    {props.action.numberOfActions === 0.5 ?<Input 
                        label='Trigger' 
                        onChangeText={(trigger: string) => {trigger !== "" ? updateAction({ ...props.action, trigger }, index) : updateAction({...props.action, trigger: undefined }, index);}}
                        placeholder='What triggers this reaction?' 
                        multiline={true}
                    >{props.action.trigger}</Input> : <></>}
                    <Input 
                        label='Requirements' 
                        onChangeText={(requirements: string) => {requirements !== "" ? updateAction({ ...props.action, requirements }, index) : updateAction({...props.action, requirements: undefined }, index);}}
                        placeholder='Action requirements?' 
                        multiline={true}
                    >{props.action.requirements}</Input>
                    <Input 
                        label='Critical Success' 
                        onChangeText={(critSuccess: string) => {critSuccess !== "" ? updateAction({ ...props.action, critSuccess }, index) : updateAction({...props.action, critSuccess: undefined }, index);}}
                        placeholder='What happens on a critSuccess?' 
                        multiline={true}
                    >{props.action.critSuccess}</Input>
                    <Input 
                        label='Success' 
                        onChangeText={(success: string) => {success !== "" ? updateAction({ ...props.action, success }, index) : updateAction({...props.action, success: undefined }, index);}}
                        placeholder='What happens on a success?' 
                        multiline={true}
                    >{props.action.success}</Input>
                    <Input 
                        label='Failure' 
                        onChangeText={(failure: string) => {failure !== "" ? updateAction({ ...props.action, failure }, index) : updateAction({...props.action, failure: undefined }, index);}}
                        placeholder='What happens on a failure?' 
                        multiline={true}
                    >{props.action.failure}</Input>
                    <Input 
                        label='Critical Failure' 
                        onChangeText={(critFailure: string) => {critFailure !== "" ? updateAction({ ...props.action, critFailure }, index) : updateAction({...props.action, critFailure: undefined }, index);}}
                        placeholder='What happens on a critFailure?' 
                        multiline={true}
                    >{props.action.critFailure}</Input>
                    <Input 
                        label='Book Source' 
                        onChangeText={(bookAbbreviation: string) => {bookAbbreviation !== "" ? updateAction({ ...props.action, bookAbbreviation }, index) : updateAction({...props.action, bookAbbreviation: undefined }, index);}}
                        placeholder='Book this action can be referenced in' 
                    >{props.action.bookAbbreviation}</Input>
                    <Input 
                        label='Page Number' 
                        onChangeText={(pageNumber: string) => {pageNumber !== "" && typeof pageNumber === typeof 1? updateAction({ ...props.action, pageNumber: parseInt(pageNumber) }, index) : updateAction({...props.action, pageNumber: undefined }, index);}}
                        placeholder='Book this action can be referenced in' 
                        keyboardType='numeric'
                    >{props.action.pageNumber}</Input>
                    <WeaponSelector currentWeapons={props.weapons} onSelect={updateWeapon} currentWeaponSelected={props.action.weapon} />
                    <SkillSelector currentSkills={props.skills} onSelect={updateSkill} currentSkillSelected={props.action.skill} />
                    <TraitSelector currentTraits={props.action.traits} onSelection={updateTraits}/>
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
    skills: Skill[];
    weapons: Weapon[];
}

const mapStateToProps = (
    state: AppState,
    ownProps: OwnProps
): LinkStateProps => ({
    action: state.playerCharacter.actions[ownProps.route.params.index],
    skills: state.playerCharacter.skills,
    weapons: state.playerCharacter.weapons
});


export default connect(mapStateToProps, null)(EditActionView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});