import React, { useState } from 'react'
import { Alert, Col, Row, Spin } from "antd"
import { Content } from "antd/lib/layout/layout"
import { Input, Form, SubmitButton } from 'formik-antd';
import { UserOutlined } from '@ant-design/icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';




const initialValues = {
  id: ''
}

const validationSchema = Yup.object({
  id: Yup.string().required('This field is required')
})

function VerifyComponent(props) {
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  const onSubmit = (values) => {
    const prepName = values.id.toLowerCase()
    console.log(prepName)
    setLoading(true)
    if(prepName === 'jerome gacoscosim') {
      const timeout = setTimeout(() => {
        setLoading(false)
        history.push('/netcentric/public/jerome-gacoscosim')
        return clearTimeout(timeout)
      },3000)
     
    } else {
      const timeout = setTimeout(() => {
        setLoading(false)
        history.push('/netcentric/public/error')
        return clearTimeout(timeout)
      },3000)
      
      
    }
  }


if (loading) return (
    <Row style={{height: '90vh', width: '100vw'}}
      justify='center' align='middle'
    >
      <Col>
        <Spin tip="Loading..." size="large">
        <Alert
          message="System is processing your request"
          description="Please wait..."
          type="info"
        />
      </Spin>
      </Col>
    </Row>
  ) 
  
  return (
    <div className="content">
      <Row align='middle'>
        <Col span={18} offset={3}>
            <p>Please enter the fulfillment verification code from the certification certificate. Click submit to verify the fulfillment. Verification information is displayed above this text. After viewing the verification information, you may continue use this form to verify additional certificates as needed.</p>

            <Formik
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {
                <Form>
                  <Form.Item name='id' label='Employee ID:' className='mt-2'>
                    
                    <Input className='input-id' name='id' placeholder='Enter employee ID' />
                    
                  </Form.Item>

                  <Row justify='end'>
                    <Col>
                      <SubmitButton type='secondary'>Submit</SubmitButton>
                    </Col>
                  </Row>

                </Form>
              }
            </Formik>
        </Col>
      </Row>
    </div>    
  )
}


export default VerifyComponent
