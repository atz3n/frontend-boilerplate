import { Row } from "react-bootstrap";
import Link from "next/link";
import Layout from "../../components/common/Layout";
import Page from "../../components/common/Page";
import ServerUrl from "../../lib/ServerUrl";


const SubPage: React.FC = () => {
    return (
        <Page>
            <Layout>
                <Row>
                    <p>This is a subpage</p>
                </Row>
                <Row>
                    <Link href={ServerUrl.get("/")}><a>Back to home</a></Link>
                </Row>
            </Layout>
        </Page>
    );
};

export default SubPage;