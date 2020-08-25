import React from "react";
import { StyleSheet} from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Traits } from "../../PF2eCoreLib/Traits";
import { Pill } from "./Pill";
import _ from "lodash";

type Props = {
    currentTraits: (keyof typeof Traits)[];
    onSelection: (traits: (keyof typeof Traits)[]) => void;
};

export const TraitSelector: React.FC<Props> = (props) => {
    const renderTrait = (trait: string, status: string) => {
        const onTraitPress = () => {
            console.debug("onTraitPress");
            console.debug(`trait: ${trait}`);
            console.debug(`CurrentTraits: ${JSON.stringify(props.currentTraits)}`);
            if (props.currentTraits.includes(trait)) {
                // trait is already active so remove the trait
                _.remove(props.currentTraits, (value) => {return value === trait;});
                console.debug(`newTraits: ${JSON.stringify(props.currentTraits)}`);
                props.onSelection(props.currentTraits);
            } else {                
                const newTraits = props.currentTraits;
                newTraits.push(trait);
                console.debug(`newTraits: ${JSON.stringify(newTraits)}`);
                props.onSelection(newTraits);
            }
        };
        return (
            <Pill key={trait} text={trait} status={status} onPress={onTraitPress}/>
        );
    };

    const renderActiveTraits: JSX.Element[] = [];
    const renderInactiveTraits: JSX.Element[] = [];
    Object.keys(Traits).forEach(trait => {
        let status: string;
        if (props.currentTraits.includes(trait as keyof typeof Traits)) {
            status = "success";
            renderActiveTraits.push(renderTrait(trait, status));
        } else {
            status = "info";
            renderInactiveTraits.push(renderTrait(trait, status));
        }
    });
    return(
        <Card>
            <Text category='h5'>Traits</Text>
            <Layout style={{flexWrap: "wrap", flexDirection: "row"}}>
                {renderActiveTraits}
                {renderInactiveTraits}
            </Layout>
        </Card>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});