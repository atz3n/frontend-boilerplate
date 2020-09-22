import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Layout from "../components/common/Layout";
import Page from "../components/common/Page";
import Success from "../components/lib/Success";
import Error from "../components/lib/Error";
import { SUCCESS_TIMEOUT_SECONDS } from "../constants";
import DotEnv from "../lib/DotEnv";
import dev from "../dev";
import ServerUrl from "../lib/ServerUrl";


const Home: React.FC = () => {
    const errorFragment = <Error title="Press the button" message="just do it"/>;
    const [stateFragment, setStateFragment] = useState(errorFragment);
    const role = DotEnv.isDev ? dev.role : "user";


    const handleButtonClick = (): void => {
        const mode =  + DotEnv.isDev ? "development" : "production";
        const successTitle = "You did it!!! You pressed the button in " + mode + " mode!!";

        setStateFragment(<Success title={successTitle} />);

        setTimeout(() => {
            setStateFragment(errorFragment);
        }, SUCCESS_TIMEOUT_SECONDS * 1000);
    };


    return (
        <Page>
            <Layout>
                <div style={{ paddingTop: "1rem" }}/>
                <h2 style={{ textAlign: "center" }}>Title</h2>
                <div style={{ paddingTop: "1rem" }}/>
                <Row>
                    <div style={{ textAlign: "center", margin: "auto", color: "#666", fontSize: "large", paddingBottom: "3rem" }}>
                        <span>Subtitle</span>
                    </div>
                </Row>
                <Row>
                    <Link href={ServerUrl.get("/subpage")}><a>Go to subpage</a></Link>
                </Row>
                <Row>
                    <p style={{ fontSize: "2rem" }}>Hello {role}!!</p>
                </Row>
                <Row style={{ alignItems: "center" }}>
                    <Col sm={2}>
                        <Button onClick={handleButtonClick}>Press me</Button>
                    </Col>
                    <Col sm={10}>
                        {stateFragment}
                    </Col>
                </Row>
            </Layout>
        </Page>
    );
};

export default Home;