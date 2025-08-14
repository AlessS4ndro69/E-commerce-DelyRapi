import axios from "axios";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false, //  Acepta certificados no verificados
});

export default (req) => {
    if (typeof window === "undefined") {
        // We are on the server

        return axios.create({
            baseURL:
                "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
            //"http://localhost/api",                

            headers: req.headers,
            httpsAgent: agent, // <- Acepta cert autofirmado
        });
    } else {
        ""
        // We must be on the browser
        return axios.create({
            baseUrl: "/",
            //baseUrl: "http://localhost",
        });
    }
};