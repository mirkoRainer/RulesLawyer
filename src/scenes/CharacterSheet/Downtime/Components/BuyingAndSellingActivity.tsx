import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

type State = {
    descriptionVisible: boolean;
};

const BuyingAndSellingActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                After an adventure yields a windfall, the characters might have
                a number of items they want to sell. Likewise, when they’re
                flush with currency, they might want to stock up on gear. It
                usually takes 1 day of downtime to sell off a few goods or shop
                around to buy a couple items. It can take longer to sell off a
                large number of goods, expensive items, or items that aren’t in
                high demand. This assumes the characters are at a settlement of
                decent size during their downtime. In some cases, they might
                spend time traveling for days to reach bigger cities. As always,
                you have final say over what sort of shops and items are
                available. An item can usually be purchased at its full Price
                and sold for half its Price. Supply and demand adjusts these
                numbers, but only occasionally.
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
                <Text category="h3">Buying/Selling</Text>
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

export default BuyingAndSellingActivity;

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
