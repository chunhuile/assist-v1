import React, { LazyExoticComponent } from 'react';
import { Row, Col } from 'antd';

  const SuspenseWrapper = (Comp: LazyExoticComponent <() => JSX.Element>) =>{
  return (
    <React.Suspense
      fallback={
        <Row>
          <Col span={24}></Col>
        </Row>
      }
    >
      <Comp />
    </React.Suspense>
  );
};

export default SuspenseWrapper;
