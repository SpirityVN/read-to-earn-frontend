import {
  FormControl,
  FormLabel,
  Text,
  Switch,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
};

export default function EnableEarn({ data, setData }: Props) {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  const handleEnable = () => {
    setIsEnable(!isEnable);

    setData("");
  };
  return (
    <>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <FormLabel
          htmlFor="email-alerts"
          mb="0"
          color={"#758091"}
          letterSpacing={"0.07em"}
          fontWeight={"medium"}
          padding={"10px"}
          fontSize={"13px"}
        >
          Enable{" "}
          <Text as={"span"} color={"blue.100"} fontWeight={"bold"}>
            Earn Token
          </Text>
        </FormLabel>
        <Switch
          id="email-alerts"
          isChecked={isEnable}
          onChange={handleEnable}
        />
      </FormControl>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          $
        </InputLeftElement>
        <Input
          fontSize={"sm"}
          isDisabled={!isEnable}
          value={data}
          placeholder="Enter amount"
          onChange={(e) => setData(e.target.value)}
        />
      </InputGroup>
    </>
  );
}
