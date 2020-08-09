import connect from "@databases/expo";
import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset";

export async function copyDBFromBundleToDocumentDirectory() {
    const dbName = "pf2e.sqlite"; 
    const sqlDirectory = FileSystem.documentDirectory + "SQLite/";
    if (!(await FileSystem.getInfoAsync(sqlDirectory + dbName)).exists) {
        await FileSystem.makeDirectoryAsync(sqlDirectory, {intermediates: true});
        const asset = Asset.fromModule(require("../../assets/pf2e.db"));
        await FileSystem.downloadAsync(asset.uri, sqlDirectory + dbName);
    }
}

export const db = connect("pf2e.sqlite");