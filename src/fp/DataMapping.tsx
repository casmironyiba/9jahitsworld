import React from "react";

const dataMapping = () => (adminUser: any) =>
  adminUser.initialData.map((data: any, index: any) => (
    <div key={index}>{data}</div>
  ));

export default dataMapping;
