import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {}

type State = {
    descriptionVisible: boolean
}

const RetrainingActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>

            <Text category='p1' style={styles.text}>
                Retraining offers a way to alter some of your character choices, which is helpful when you want to take your character in a new direction or change decisions that didn’t meet your expectations. You can retrain feats, skills, and some selectable class features. You can’t retrain your ancestry, heritage, background, class, or ability scores. You can’t perform other downtime activities while retraining.

Retraining usually requires you to spend time learning from a teacher, whether that entails physical training, studying at a library, or falling into shared magical trances. Your GM determines whether you can get proper training or whether something can be retrained at all. In some cases, you’ll have to pay your instructor.

Some abilities can be difficult or impossible to retrain (for instance, a sorcerer can retrain their bloodline only in extraordinary circumstances).

When retraining, you generally can’t make choices you couldn’t make when you selected the original option. For instance, you can’t exchange a 2nd-level skill feat for a 4th-level one, or for one that requires prerequisites you didn’t meet at the time you took the original feat. If you don’t remember whether you met the prerequisites at the time, ask your GM to make the call. If you cease to meet the prerequisites for an ability due to retraining, you can’t use that ability. You might need to retrain several abilities in sequence in order to get all the abilities you want.
Feats
You can spend a week of downtime retraining to swap out one of your feats. Remove the old feat and replace it with another of the same type. For example, you could swap a skill feat for another skill feat, but not for a wizard feat.
Skills
You can spend a week of downtime retraining to swap out one of your skill increases. Reduce your proficiency rank in the skill losing its increase by one step and increase your proficiency rank in another skill by one step. The new proficiency rank has to be equal to or lower than the proficiency rank you traded away. For instance, if your bard is a master in Performance and Stealth, and an expert in Occultism, you could reduce the character’s proficiency in Stealth to expert and become a master in Occultism, but you couldn’t reassign that skill increase to become legendary in Performance. Keep track of your level when you reassign skill increases; the level at which your skill proficiencies changed can influence your ability to retrain feats with skill prerequisites.

You can also spend a week to retrain an initial trained skill you gained during character creation.
Class Features
You can change a class feature that required a choice, making a different choice instead. This lets you change a druid order or a wizard school, for example. The GM will tell you how long this takes—always at least a month.
            </Text>
        </Layout>
    );

    const descriptionText = descriptionVisible ? description : (<Layout></ Layout>);

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category='h3'>Retraining</Text>
                <Button 
                    appearance='ghost' 
                    status='basic' 
                    onPress={toggleDescription}
                >
                    Description
                </Button>
            </Layout>
            {descriptionText}
        </Layout>
    );
};

export default RetrainingActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    text: {
        padding: 10
    }
});