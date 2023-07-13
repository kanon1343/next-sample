import { Button, Input } from "@chakra-ui/react";
import React from "react";

export default function ComponentC(props: any) {
  const input = (event: any) => {
    props.sendDataToParent(event.target.value);
  };

  return (
    <div>
      <Input onChange={input}></Input>
      <Button>AAA</Button>
    </div>
  );
}
