export interface Message {
    id: string;
    email: string;
    message: string;
}

export interface Logs {
    id: string;
    logs: Message[];
}

export interface Tally {
    email: string;
    total: number;
}

export interface TallyMessage {
    logs_id: string;
    tally: Tally[];
}

export interface StringAsKey {
    [key: string]: number;
}
