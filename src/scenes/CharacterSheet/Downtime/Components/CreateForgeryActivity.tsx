import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

const CreateForgeryActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                You create a forged document, usually over the course of a day
                or a week. You must have the proper writing material to create a
                forgery. When you Create a Forgery, the GM rolls a secret DC 20
                Society check. If you succeed, the forgery is of good enough
                quality that passive observers can’t notice the fake. Only those
                who carefully examine the document and attempt a Perception or
                Society check against your Society DC can do so. If the
                document’s handwriting doesn’t need to be specific to a person,
                you need only to have seen a similar document before, and you
                gain up to a +4 circumstance bonus to your check, as well as to
                your DC (the GM determines the bonus). To forge a specific
                person’s handwriting, you need a sample of that person’s
                handwriting. If your check result was below 20, the forgery has
                some obvious signs of being a fake, so the GM compares your
                result to each passive observer’s Perception DC or Society DC,
                whichever is higher, using the success or failure results below.
                Once the GM rolls your check for a document, that same result is
                used against all passive observers’ DCs no matter how many
                creatures passively observe that document. An observer who was
                fooled on a passive glance can still choose to closely
                scrutinize the documents on the lookout for a forgery, using
                different techniques and analysis methods beyond the surface
                elements you successfully forged with your original check. In
                that case, the observer can attempt a Perception or Society
                check against your Society DC (if they succeed, they know your
                document is a forgery). Success The observer does not detect the
                forgery. Failure The observer knows your document is a forgery.
            </Text>
        </Layout>
    );

    const descriptionText = descriptionVisible ? (
        description
    ) : (
        <Layout></Layout>
    );

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category="h3">Create Forgery</Text>
                <Button
                    appearance="ghost"
                    status="basic"
                    onPress={toggleDescription}
                >
                    Description
                </Button>
            </Layout>
            {descriptionText}
        </Layout>
    );
};

export default CreateForgeryActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        padding: 10,
    },
});
