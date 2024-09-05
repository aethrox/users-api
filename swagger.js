import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users RESTful API",
            version: "1.0.0",
            description: "This API performs simple CRUD operations. It was developed to learn and experiment with the gesture testing library.",
            contact: {
                name: "Kaan Demirel",
                email: "kaan@aethrx.com",
            },
        },
    },
    apis: ["./routes/*.js"],
};

export default swaggerJSDoc(options);