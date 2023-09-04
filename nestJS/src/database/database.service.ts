import { Injectable } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    console.log(process.env)
    this.pool = new Pool({
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      port: parseInt(process.env.PGPORT),
    });
    console.log(this.pool)
  }
 
  async query(sql: string, values: any[] = []): Promise<QueryResult> {
    try {
      const client = await this.pool.connect();
      const result = await client.query(sql, values);
      client.release();
      return result;
    } catch (error) {
      throw new Error(`Error executing SQL query: ${error.message}`);
    }
  }
}
