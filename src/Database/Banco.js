import pg from 'pg'
const { Pool } = pg
const client = new Pool()

try {
    client.connect();
} catch (error) {
    console.error(error);    
}
 
export {client as connect};

 
