import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 316px;
  height: 52px;
  background-color: "#ffffff";
  border: none;
  padding-left: 8px;
  border-radius: 2px;
`;

const Label = styled.label`
  color: "#000000";
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} />
  </div>
);

export const PasswordInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="password">{label}</Label>
    <Input id="password" type="password" placeholder={placeholder} />
  </div>
);