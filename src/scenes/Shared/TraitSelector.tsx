import React from "react";
import { StyleSheet} from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Traits } from "../../PF2eCoreLib/Traits";
import { Pill } from "./Pill";

type Props = {
    currentTraits: (keyof typeof Traits)[];
    onSelection: (traits: (keyof typeof Traits)[]) => void;
};

export const TraitSelector: React.FC<Props> = (props) => {
    const renderTrait = (trait: string, status: string) => {
        const onTraitPress = () => {
            if (props.currentTraits.includes(trait as keyof typeof Traits)) {
                // trait is already active so remove the trait
                const newTraits = props.currentTraits;
                props.onSelection(newTraits);
            } else {                
                const newTraits = props.currentTraits;
                props.onSelection(newTraits);
            }
        };
        return (
            <Pill text={trait} status={status} onPress={onTraitPress}/>
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