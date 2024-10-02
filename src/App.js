import './App.css';
import React from 'react';
import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

function App() {
  const [dataSubmited, setDataSubmited] = useState(null);
  const [data, setData] = useState({ name: '', description: '' });

  const handleClick = (evt) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    setDataSubmited(data);
    setData({ name: '', description: '' });
  };

  return (
    <div className="App">
      <Typography.Title>Форма с использованием Ant Design</Typography.Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Имя">
          <Input
            value={data.name}
            onChange={handleClick}
            name="name"
            placeholder="Name"
            required
          />
        </Form.Item>
        <Form.Item label="Описание">
          <Input
            value={data.description}
            onChange={handleClick}
            name="description"
            placeholder="Description"
            required
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>
      {dataSubmited && (
        <Card>
          <Typography.Title level={2}>Отправленные данные</Typography.Title>
          <Typography.Paragraph>
            <strong>Имя:</strong> {dataSubmited.name}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Описание:</strong> {dataSubmited.description}
          </Typography.Paragraph>
        </Card>
      )}
    </div>
  );
}

export default App;
