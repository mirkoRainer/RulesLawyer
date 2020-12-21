import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";

const url = "https://2e.aonprd.com/Traits.aspx";
const AxiosInstance = axios.create();

AxiosInstance.get(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const traits: Cheerio = $("span .trait");
        let traitsObj: { traits: string[] } = {
            traits: [],
        };
        traits.each((index, element) => {
            const trait: string | undefined = $(element).attr("title");
            if (trait) traitsObj.traits.push(trait);
        });
        const json = JSON.stringify(traitsObj, null, 1);
        fs.writeFileSync(
            "./src/PF2eCoreLib/populateData/traits.json",
            json,
            "utf8"
        );
    })
    .catch(console.error); // Error handling
