import { Modal, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 }
};

function WUpdateModal({
  visible, data, onOk, onCancel
}) {
  const [form] = Form.useForm();
  form.setFieldsValue(data);


  const onSure = () => {
    form
      .validateFields()
      .then(values => {
        // form.resetFields();
        onOk(values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      title="修改title"
      visible={visible}
      onOk={onSure}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form
        form={form}
        initialValues={data}
        {...layout}
      >
        <Form.Item
          label="Title"
          name="title"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default WUpdateModal;
