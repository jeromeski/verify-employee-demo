import { Button, Card, Col, Row } from "antd"
import React, { Fragment } from 'react'
import {Link, useHistory} from 'react-router-dom';

function ResultPage() {
  const history = useHistory();

  return (
    <Fragment>
      <Row span={24} justify='center'>
        <Col>
          <Row justify='center' style={{textAlign: 'center', marginTop: '10rem'}} >
            <Col>
            <h1 className='employee'>Jerome Gacoscosim</h1>
            <h3 className='position'>Junior React Developer</h3>
            </Col>
          </Row>
          <Card  bordered={true} style={{ width: '80vw' }}>
            <Row justify='center'>
              <Col>
                <p className='employee-status'>Resigned</p>
                <p className='resign-date'>Netcentric - July 31, 2019</p>
              </Col>
            </Row>
         </Card>

         <Button type='secondary' className='back-button'>
            <Link to='/netcentric/public/verification'>Back</Link>
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ResultPage
