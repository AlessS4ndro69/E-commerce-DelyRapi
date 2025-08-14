import App from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Layout/Header";
import buildClient from "../buildClient";
import "../public/css/style.css";
import "../public/css/font-awesome.min.css";
import "../public/css/elegant-icons.css";
import "../public/css/nice-select.css";
import { UserContext } from "../context/UserContext";
//import "../public/css/jquery-ui.min.css";
import "../public/css/slicknav.min.css";
import MainLayout from "./layout";

function MyApp({ Component, pageProps, currentUser }) {
    return (
        <UserContext.Provider value={currentUser}>
        <MainLayout >
            {/* <Header currentUser={currentUser} /> */}
            <div className="container">
                <Component {...pageProps} />
            </div>
        </MainLayout >
        </UserContext.Provider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const { req } = appContext.ctx;
    let data;

    const request = buildClient(req);

    const res = await request.get("/api/users/currentUser");
    console.log("res currentuser is: ", res.data);
    return { ...appProps, currentUser: res.data.currentUser || null };

    // console.log(req.headers);

    // await axios.get(
    //     "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentUser",
    //     {
    //         headers: {
    //             host: req.headers.host, // "ticketing.dev"
    //             cookie: req.headers.cookie,
    //         },
    //     }
    // );
};

export default MyApp;
