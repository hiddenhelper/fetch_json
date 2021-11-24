import { Logs, StringAsKey, TallyMessage } from "../customTypings";

var fs: any = require('fs');
var folderPath: string = './data/';
var fileCount: number = 100;

function generateTallyMessage (path: string) {
    try {
        const file: Buffer = fs.readFileSync(path, 'utf-8');
        const jsonData: Logs = JSON.parse(file.toString());
        let emailObject: StringAsKey = {};
        for (let i: number = 0 ; i < jsonData.logs.length ; i++) {
            if (!emailObject[jsonData.logs[i].email]) {
                emailObject[jsonData.logs[i].email] = 0;
            }
            emailObject[jsonData.logs[i].email]++;
        }
        let result: TallyMessage = {
            logs_id: jsonData.id,
            tally: [],
        };
        for (const [key, value] of Object.entries(emailObject)) {
            result.tally.push({
                email: key,
                total: value,
            });
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

function run () {
    for (let i: number = 0 ; i < fileCount ; i++) {
        const path: string = folderPath + `logs_${i}.json`;
        console.log(generateTallyMessage(path));
    }
}

run();