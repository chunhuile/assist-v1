import React, { useState } from 'react';
import { Select } from 'antd';

interface ChildProps {
    options:{id:number,label:   string,value:number}[],
    style:Object,
    placeholder:string,
    selectedItems:string[],
    onChange:(value: string[]) => void
}


const UserSelect: React.FC<ChildProps> = ({
    options,
    style,
    placeholder,
    selectedItems,
    onChange
}) => {

  return (
    <Select
      mode="multiple"
      placeholder={placeholder}
      value={selectedItems}
      onChange={onChange}
      style={style}
     options={options.map((item) => ({
        value: item.id,
        label: item.label,
    }))}

    />
  );
};

export default UserSelect;