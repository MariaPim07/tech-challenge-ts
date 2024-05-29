import swaggerAutogen from 'swagger-autogen';

const doc = {
    definitions: {
        order: {
            client: {id: 1},
            hamburger: {id: 1},
            accompaniment: {id: 2},
            drink: {id: 3},
            dessert: {id: 4}
        },
    }
};

swaggerAutogen()('src/adapter/driver/swagger-output.json', ['src/adapter/driver/main.ts'], doc);
