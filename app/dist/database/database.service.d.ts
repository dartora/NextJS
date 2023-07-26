import { QueryResult } from 'pg';
export declare class DatabaseService {
    private pool;
    constructor();
    query(sql: string, values?: any[]): Promise<QueryResult>;
}
