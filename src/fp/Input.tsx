import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  border-bottom: 1px solid $white;
  font-size: 1rem;
  color: black;
`;

interface Obj {
  placeholder?: string;
  onKeyDown?: any;
  onChange?: any;
  type?: any;
  value?: any;
  name?: string;
  required?: boolean;
  id?: string;
}

function Input(
  { placeholder, onKeyDown, type, name, value, onChange, required, id }: Obj,
  ref: any
) {
  return (
    <InputField
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      type={type}
      name={name}
      value={value}
      ref={ref}
      onChange={onChange}
      required={required}
      id={id}
    />
  );
}

const forwardedRef = React.forwardRef(Input);
export default forwardedRef;
