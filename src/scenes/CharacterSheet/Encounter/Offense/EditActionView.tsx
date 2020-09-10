import React from "react";
import { StyleSheet, SectionList } from "react-native";
import { Input, Layout, Text, Icon, Button } from "@ui-kitten/components";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../../store/Store";
import { connect } from "react-redux";

type OwnProps = {
    index: number;
    updateAction: (updatedAction: PF2Action, index: number) => void;
};

const EditActionView: React.FC<Props> = (props) => {
    const [ editing, setEditing ] = React.useState(false);

    const DownArrow = (props: any) => <Icon {...props} name='arrow-ios-downward-outline' />;
    const SideArrow = (props: any) => <Icon {...props} name='arrow-ios-forward-outline' />;
    const ActualArrow = () =>  { return editing ? DownArrow : SideArrow; };
    const handleDropDownButton = () => {
        setEditing(!editing);
    };
    const DropDownButton = () => (<Button onPress={handleDropDownButton} accessoryRight={ActualArrow()} style={{flex: .2}}>{editing ? "Save" : "Edit"}</Button>);

    const Editor = () => {
        return (
            <Layout style={{flex: 1, paddingVertical: 10}}>
                <Input 
                    label='Action Name' 
                    onChangeText={(name: string) => props.updateAction({ ...props.action, name }, props.index)}
                    placeholder='Name the Action' 
                    status={props.action.name || props.action.name !== "" ? "basic" : "danger"} 
                    caption={props.action.name ? undefined : "This value is needed"}
                >{props.action.name}</Input>
                <Input label='Number Of Actions' />
                <Input label='Traits' />
                <Input label='Description' />
                <Input label='Action Source' />
                <Input label='Action Trigger' />
                <Input label='Requirements' />
                <Input label='Critical Success' />
                <Input label='Success' />
                <Input label='Failure' />
                <Input label='Critical Failure' />
                <Input label='Weapon' />
                <Input label='Skill' />
                <Input label='Book Reference' />
                <Input label='Page Number' />
            </ Layout>
        );
    };

    return(
        <Layout style={{flex: 1, padding: 10}}>
            <Layout style={{flex: 1, flexDirection: "row"}}>
                {DropDownButton()}
                {editing ? <></> : <Text style={{flex: 1, paddingHorizontal: 10, alignSelf: "center"}} category='h4'>{props.action.name}</Text>}
            </Layout>
            {editing ? Editor() : <></>}
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
    action: state.playerCharacter.actions[ownProps.index],
});


export default connect(mapStateToProps, null)(EditActionView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});