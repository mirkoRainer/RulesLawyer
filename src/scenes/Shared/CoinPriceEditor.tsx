import React, { useState, useEffect } from "react";
import {
    StyleSheet
} from "react-native";
import { Price } from "../../PF2eCoreLib/PlayerCharacter";
import { Input, Layout, Text } from "@ui-kitten/components";
import deepEqual from "deep-equal";
import { UpdateAbilityScore } from "../../PF2eCoreLib/AbilityScores";

const CoinPriceEditor: React.FC<Props> = (props) => {

    return(
        <>
            <Text category='h6' style={{textAlign:"center", paddingVertical:5}}>Price</Text>
            <Layout style={{flex: 1, flexDirection: "row"}}>
                <Layout style={styles.inputColumn} >
                    <Input 
                        label={"PP"}
                        value={props.currentPrice.Platinum}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {props.updatePrice({...props.currentPrice,Platinum: text});})}
                    />
                    <Input 
                        label={"SP"}
                        value={props.currentPrice.Silver}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {props.updatePrice({...props.currentPrice,Silver: text});})}
                    />
                </Layout>
                <Layout style={styles.inputColumn}>
                    <Input 
                        label={"GP"}
                        value={props.currentPrice.Gold}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {props.updatePrice({...props.currentPrice,Gold: text});})}
                    />
                    <Input 
                        label={"CP"}
                        value={props.currentPrice.Copper}
                        size='medium'
                        keyboardType='numeric'
                        onChangeText={((text) => {props.updatePrice({...props.currentPrice,Copper: text});})}
                    />
                </Layout>
            </Layout>
        </>
    );
};

type Props = {
    currentPrice: {Copper: string, Silver: string, Gold: string, Platinum: string};
    updatePrice: (currentPrice: {Copper: string, Silver: string, Gold: string, Platinum: string}) => void
}

const styles = StyleSheet.create({
    inputColumn: {
        flex: 1,
    }
});

export default CoinPriceEditor;