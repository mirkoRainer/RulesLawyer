import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Icon,
    IndexPath,
    Input,
    Layout,
    Select,
    SelectItem,
    Text,
} from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { HealthData } from "../../../PF2eCoreLib/HealthData";
import { startChangeCompanionHitPoints } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";
import { indexOf } from "lodash";
import { ArrowForwardIcon, ArrowDownIcon, CheckIcon } from "../IconButtons";

const EditHitPoints: React.FC<Props> = (props) => {
    const maxDyingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const maxDyingIndex = indexOf(maxDyingArray, props.hitPoints.maxDying);
    const pickerItems = (items: number[]) => {
        return items.map((value, index) => {
            return <SelectItem title={value} key={value} />;
        });
    };

    const [input, setInput] = useState({
        maxHp: props.hitPoints.maxHitPoints.toString(),
        maxDying: props.hitPoints.maxDying.toString(),
    });
    const [saved, setSaved] = useState(
        JSON.stringify(props.hitPoints) === JSON.stringify(input)
    );
    const AlertIcon = (props: any) => (
        <Icon {...props} name="alert-circle-outline" />
    );
    const onChangeMaxHp = (value: string) => {
        setInput({ ...input, maxHp: value });
    };

    const onSelectMaxDying = (indexPath: IndexPath | IndexPath[]) => {
        const trueIndex = indexPath as IndexPath;
        props.changeCompanionHitPoints(
            { ...props.hitPoints, maxDying: maxDyingArray[trueIndex.row] },
            props.companionId
        );
    };
    const status = () => {
        if (parseInt(input.maxHp) > 9999 || parseInt(input.maxHp) < 0)
            return "danger";
        if (input.maxHp !== props.hitPoints.maxHitPoints.toString())
            return "warning";
    };
    const caption = () => {
        if (parseInt(input.maxHp) > 9999 || parseInt(input.maxHp) < 0)
            return "Out of Range (1 - 9999)";
        if (input.maxHp !== props.hitPoints.maxHitPoints.toString())
            return "Unsaved";
        return "";
    };
    const [state, setState] = useState(false);
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            <Layout style={{ ...styles.wrapRow, paddingHorizontal: 10 }}>
                <Text category="h5" style={styles.centered}>
                    Hit Points
                </Text>
                <Button
                    appearance="ghost"
                    accessoryRight={state ? ArrowDownIcon : ArrowForwardIcon}
                    onPress={() => setState(!state)}
                />
            </Layout>
            {state ? (
                <Layout>
                    <Layout style={{ flexDirection: "row" }}>
                        <Input
                            label={"Max Hit Points"}
                            placeholder="-"
                            value={input.maxHp}
                            onChangeText={onChangeMaxHp}
                            caption={caption()}
                            keyboardType="numeric"
                            accessoryRight={
                                parseInt(input.maxHp) > 9999 ||
                                parseInt(input.maxHp) < 0 ||
                                input.maxHp !==
                                    props.hitPoints.maxHitPoints.toString()
                                    ? AlertIcon
                                    : undefined
                            }
                            status={status()}
                            style={{ flex: 1, paddingVertical: 5 }}
                        />
                        {parseInt(input.maxHp) > 9999 ||
                        parseInt(input.maxHp) < 0 ||
                        input.maxHp ===
                            props.hitPoints.maxHitPoints.toString() ? (
                            <></>
                        ) : (
                            <Button
                                accessoryRight={CheckIcon}
                                appearance="ghost"
                                status={status()}
                                onPress={() => {
                                    props.changeCompanionHitPoints(
                                        {
                                            ...props.hitPoints,
                                            maxDying: parseInt(input.maxDying),
                                            maxHitPoints: parseInt(input.maxHp),
                                        },
                                        props.companionId
                                    );
                                }}
                            ></Button>
                        )}
                    </Layout>
                    <Select
                        selectedIndex={new IndexPath(maxDyingIndex)}
                        onSelect={onSelectMaxDying}
                        value={maxDyingArray[maxDyingIndex]}
                        label="Max Dying Value"
                    >
                        {pickerItems(maxDyingArray)}
                    </Select>
                </Layout>
            ) : (
                <></>
            )}
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface OwnProps {
    companionId: string;
    hitPoints: HealthData;
}

interface LinkDispatchProps {
    changeCompanionHitPoints: (
        newHitPoints: HealthData,
        companionId: string
    ) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        changeCompanionHitPoints: bindActionCreators(
            startChangeCompanionHitPoints,
            dispatch
        ),
    };
};

interface LinkStateProps {}

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditHitPoints);

export const styles = StyleSheet.create({
    centered: {
        textAlign: "center",
        flex: 1,
        textAlignVertical: "center",
        alignSelf: "center",
    },
    wrapRow: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
