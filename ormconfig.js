module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "gobarber",
    "logging": false,
    "synchronize": false,
    "entities": [ 'dist/models/*.js' ],
    "migrations": [ 'dist/database/migrations/*.js' ],
    "cli": {
      "entitiesDir": 'src/models',
      "migrationsDir": 'src/database/migrations',
    },
    /*"type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "gobarber",
    "entities": [
        "./src/models/*.ts"
    ],
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }*/
}
