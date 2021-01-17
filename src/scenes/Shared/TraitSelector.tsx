import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Card, Icon, Input, Button } from "@ui-kitten/components";
import { Traits } from "../../PF2eCoreLib/Traits";
import { Pill } from "./Pill";
import _ from "lodash";

export type TraitSelectorProps = {
    currentTraits: (keyof typeof Traits)[];
    onSelection: (traits: (keyof typeof Traits)[]) => void;
};

const TraitSelector: React.FC<TraitSelectorProps> = (props) => {
    const renderTrait = (trait: string, status: string) => {
        const onTraitPress = () => {
            console.debug("onTraitPress");
            console.debug(`trait: ${trait}`);
            console.debug(
                `CurrentTraits: ${JSON.stringify(props.currentTraits, null, 1)}`
            );
            if (props.currentTraits.includes(trait)) {
                // trait is already active so remove the trait
                _.remove(props.currentTraits, (value) => {
                    return value === trait;
                });
                console.debug(
                    `newTraits: ${JSON.stringify(props.currentTraits, null, 1)}`
                );
                props.onSelection(props.currentTraits);
            } else {
                const newTraits = props.currentTraits;
                newTraits.push(trait);
                console.debug(
                    `newTraits: ${JSON.stringify(newTraits, null, 1)}`
                );
                props.onSelection(newTraits);
            }
        };
        return (
            <Pill
                key={trait}
                text={trait}
                status={status}
                onPress={onTraitPress}
            />
        );
    };
    const renderActiveTraits: JSX.Element[] = [];
    const renderInactiveTraits: JSX.Element[] = [];
    Object.keys(Traits).forEach((trait) => {
        let status: string;
        if (props.currentTraits.includes(trait as keyof typeof Traits)) {
            status = "success";
            renderActiveTraits.push(renderTrait(trait, status));
        } else {
            status = "info";
            renderInactiveTraits.push(renderTrait(trait, status));
        }
    });

    const [value, setValue] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const searchIcon = (props: any) => <Icon {...props} name="search" />;
    const searchBar = () => {
        return (
            <Input
                style={{ flex: 1, width: "100%" }}
                value={value}
                placeholder="Search Traits"
                accessoryRight={searchIcon}
                onChangeText={(nextValue: string) => setValue(nextValue)}
            />
        );
    };

    return (
        <Card>
            <Layout
                style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-between",
                }}
            >
                <Text category="h5">Traits</Text>
                <Button
                    style={{ alignSelf: "flex-end" }}
                    appearance="ghost"
                    onPress={() => setVisible(!visible)}
                >
                    {visible ? "Collapse Traits" : "Edit Traits"}
                </Button>
            </Layout>
            {visible ? (
                <Layout>
                    <Text category="c2">Tap to remove</Text>
                    <Layout style={styles.traitContainer}>
                        {renderActiveTraits}
                    </Layout>
                    {searchBar()}
                    <Text category="c2">Tap to add</Text>
                    <Layout style={styles.traitContainer}>
                        {renderInactiveTraits.filter(
                            (x) =>
                                value === "" ||
                                x.key
                                    ?.toString()
                                    .toLowerCase()
                                    .startsWith(value.toLowerCase())
                        )}
                    </Layout>
                </Layout>
            ) : (
                <></>
            )}
        </Card>
    );
};

export default TraitSelector;

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    traitContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingVertical: 5,
    },
});
