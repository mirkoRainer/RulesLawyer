import React, { useState } from "react";
import {
    StyleSheet
} from "react-native";
import { Price } from "../../PF2eCoreLib/PlayerCharacter";
import { Input, Layout, Text } from "@ui-kitten/components";

const CoinPriceEditor: React.FC<Props> = (props) => {
    const [coins, setCoins] = useState({
        Copper:   props.currentPrice.Copper.toString(),
        Silver:   props.currentPrice.Silver.toString(),
        Gold:     props.currentPrice.Gold.toString(),
        Platinum: props.currentPrice.Platinum.toString()
    });

    return(
        <>
            <Text category='h6' style={{textAlign:"center"}}>Price</Text>
            <Layout style={{flex: 1, flexDirection: "row"}}>
                <Layout style={styles.inputColumn} >
                    <Input 
                        label={"PP"}
                        value={coins.Platinum}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {setCoins({...coins,Platinum: text});})}
                    />
                    <Input 
                        label={"SP"}
                        value={coins.Silver}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {setCoins({...coins,Silver: text});})}
                    />
                </Layout>
                <Layout style={styles.inputColumn}>
                    <Input 
                        label={"GP"}
                        value={coins.Gold}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {setCoins({...coins,Gold: text});})}
                    />
                    <Input 
                        label={"CP"}
                        value={coins.Copper}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {setCoins({...coins,Copper: text});})}
                    />
                </Layout>
            </Layout>
        </>
    );
};

type Props = {
    currentPrice: Price;
    updatePrice: (coins: Price) => void
}

const styles = StyleSheet.create({
    inputColumn: {
        flex: 1,
    }
});

export default CoinPriceEditor;