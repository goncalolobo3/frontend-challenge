import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import whatsIn from '../Exports/2.Logos/logo.svg';

class TopLogo extends React.Component {
    render(){
        const leftSpace = {
            paddingLeft: "60px"
        };
        return(
            <div>
                <Container fluid>
                    <Row xs={2} md={4} lg={6}>
                        <Col md="4">
                            <div className="pt-5" style={leftSpace}>
                                <img src={whatsIn} alt="what's in logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default TopLogo