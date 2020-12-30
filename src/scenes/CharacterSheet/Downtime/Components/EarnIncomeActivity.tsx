import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

const EarnIncomeActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                You use one of your skills to make money during downtime. The GM
                assigns a task level representing the most lucrative job
                available. You can search for lower-level tasks, with the GM
                determining whether you find any. Sometimes you can attempt to
                find better work than the initial offerings, though this takes
                time and requires using the Diplomacy skill to Gather
                Information, doing some research, or socializing. When you take
                on a job, the GM secretly sets the DC of your skill check. After
                your first day of work, you roll to determine your earnings. You
                gain an amount of income based on your result, the task’s level,
                and your proficiency rank (as listed on Table 4–2: Income
                Earned). You can continue working at the task on subsequent days
                without needing to roll again. For each day you spend after the
                first, you earn the same amount as the first day, up until the
                task’s completion. The GM determines how long you can work at
                the task. Most tasks last a week or two, though some can take
                months or even years. Table 4-2: Income Earned Task Level DC
                Failed Trained Expert Master Legendary 0 14 1 cp 5 cp 5 cp 5 cp
                5 cp 1 15 2 cp 2 sp 2 sp 2 sp 2 sp 2 16 4 cp 3 sp 3 sp 3 sp 3 sp
                3 18 8 cp 5 sp 5 sp 5 sp 5 sp 4 19 1 sp 7 sp 8 sp 8 sp 8 sp 5 20
                2 sp 9 sp 1 gp 1 gp 1 gp 6 22 3 sp 1 gp, 5 sp 2 gp 2 gp 2 gp 7
                23 4 sp 2 gp 2 gp, 5 sp 2 gp, 5 sp 2 gp, 5 sp 8 24 5 sp 2 gp, 5
                sp 3 gp 3 gp 3 gp 9 26 6 sp 3 gp 4 gp 4 gp 4 gp 10 27 7 sp 4 gp
                5 gp 6 gp 6 gp 11 28 8 sp 5 gp 6 gp 8 gp 8 gp 12 30 9 sp 6 gp 8
                gp 10 gp 10 gp 13 31 1 gp 7 gp 10 gp 15 gp 15 gp 14 32 1 gp, 5
                sp 8 gp 15 gp 20 gp 20 gp 15 34 2 gp 10 gp 20 gp 28 gp 28 gp 16
                35 2 gp, 5 sp 13 gp 25 gp 36 gp 40 gp 17 36 3 gp 15 gp 30 gp 45
                gp 55 gp 18 38 4 gp 20 gp 45 gp 70 gp 90 gp 19 39 6 gp 30 gp 60
                gp 100 gp 130 gp 20 40 8 gp 40 gp 75 gp 150 gp 200 gp 20
                (critical success) — — 50 gp 90 gp 175 gp 300 gp Critical
                Success You do outstanding work. Gain the amount of currency
                listed for the task level + 1 and your proficiency rank. Success
                You do competent work. Gain the amount of currency listed for
                the task level and your proficiency rank. Failure You do shoddy
                work and get paid the bare minimum for your time. Gain the
                amount of currency listed in the failure column for the task
                level. The GM will likely reduce how long you can continue at
                the task. Critical Failure You earn nothing for your work and
                are fired immediately. You can’t continue at the task. Your
                reputation suffers, potentially making it difficult for you to
                find rewarding jobs in that community in the future. Sample Earn
                Income Tasks These examples use Alcohol Lore to work in a bar or
                Legal Lore to perform legal work. Trained bartend, do legal
                research Expert curate drink selection, present minor court
                cases Master run a large brewery, present important court cases
                Legendary run an international brewing franchise, present a case
                in Hell’s courts
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
                <Text category="h3">Earn Income</Text>
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

export default EarnIncomeActivity;

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
